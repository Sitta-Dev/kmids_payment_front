<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>List of Transactions</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-img
                    class="white--text align-end"
                    height="300px"
                    :src="'http://localhost:8083/' + showlink.img"
                  ></v-img>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Refund</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <p>กรุณากรอกข้อความความต้องการของท่าน หรือ หมายเลขบัญชี</p>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="Acy"
                      :items="ACYlist"
                      label="ACY"
                      prepend-icon="mdi-bag-personal"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <v-textarea solo name="req" v-model="text"></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <input
                      type="file"
                      style="display: none"
                      @change="onfileimg"
                      accept="image/png, image/jpeg, image/bmp"
                      ref="fileInput"
                      :rules="rules"
                    />
                    <v-btn
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      @click="$refs.fileInput.click()"
                    >
                      <v-icon left>mdi-camera</v-icon> upload bookbank
                    </v-btn>
                    <p>file name: {{ nameimg }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close2">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="saverefund(item)"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn
        color="blue darken-1"
        text
        :href="'http://localhost:8083/'+item.img"
        target="_bank"
      >
        <v-icon medium class="mr-2">
          mdi-file-image
        </v-icon>
      </v-btn>

      <v-btn
        v-if="item.status === 'Paid'"
        color="blue darken-1"
        text
        target="_bank"
        :to="{
          name: 'receipt',
          params: {
            uuids: item.uuid_any_activity_check,
          },
        }"
      >
        print receipt
      </v-btn>
      <v-btn
        v-if="item.status === 'Not Complete'"
        color="blue darken-1"
        text
        target="_bank"
        :to="{
          name: 'parentrejectpayment',
          params: {
            uuids: item.uuid_any_activity_check,
          },
        }"
      >
        show detail
      </v-btn>
    </template>
    <template v-slot:no-data>
      <p>Not have DATA</p>
    </template>
    <p
      style="    display: inline-block;
                 overflow: hidden;
                  text-indent: -9999px;"
    >
      {{ (this.parentname = $store.state.parent_name) }}
    </p>
  </v-data-table>
</template>

<script>
import anyactivity from "../../../services/anyactivity";
import refundservcie from "../../../services/refund";
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    headers: [
      {
        text: "Ref",
        align: "left",
        value: "uuid_any_activity_check",
      },
      { text: "Payitem", value: "payitem" },
      { text: "Grade", value: "grade" },
      { text: "Amount", value: "amount" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "action", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    passstatus: "pass",
    showlink: {
      ref: "",
      fristname: "",
      lastname: "",
      grad: "",
      amount: "",
      status: "",
      link: "",
    },
    defaultItem: {
      ref: "",
      fristname: "",
      lastname: "",
      grad: "",
      amount: "",
      status: "",
      link: "",
    },
    text: null,
    payment: "test",
    imgexam: null,
    nameimg: null,
    parentname: null,
    torefund: {
      uuidpayment: null,
      text: null,
      payitem: null,
      studentid: null,
      studentname: null,
      parentname: null,
      grade: null,
      acy: null,
      amount: null,
    },
    ACYlist: ["2562", "2563", "2564", "2565"],
    Acy: "2562",
    urlpath:null
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.showlink = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    close2() {
      this.dialog2 = false;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.showlink);
      } else {
        this.desserts.push(this.showlink);
      }
      this.close();
    },
    refund(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.torefund.uuidpayment = item.uuid;
      this.torefund.text = this.text;
      this.torefund.payitem = item.payitem;
      this.torefund.studentid = item.studentid;
      this.torefund.studentname = item.studentname;
      this.torefund.parentname = this.parentname;
      this.torefund.grade = item.grade;
      this.torefund.acy = this.Acy;
      this.torefund.amount = item.amount;
      this.dialog2 = true;
    },
    onfileimg(event) {
      this.imgexam = event.target.files[0];
      this.nameimg = event.target.files[0].name;
      console.log(event.target.files[0]);
    },
    async saverefund() {
      const fd = new FormData();
      fd.append("uuidpayment", this.torefund.uuidpayment);
      fd.append("text", this.text);
      fd.append("payitem", this.torefund.payitem);
      fd.append("studentid", this.torefund.studentid);
      fd.append("studentname", this.torefund.studentname);
      fd.append("parentname", this.torefund.parentname);
      fd.append("grade", this.torefund.grade);
      fd.append("acy", this.torefund.acy);
      fd.append("amount", this.torefund.amount);
      fd.append("bookbank", this.imgexam, this.imgexam.name);
      const responserefund = await refundservcie.refundreq(
        fd,
        this.$store.getters.token
      );
      if (responserefund.data.success) {
        this.dialog2 = false;
        confirm("ร้องขอ Refund เรียบร้อยแล้วคะ");
      } else {
        confirm("เกิดข้อผิดพลาดกรุณาตรวจสอบใหม่อีกครั้ง");
      }
    },
  },
  async mounted() {
    try {
      const response = await anyactivity
        .getdatastatusparent(
          {
            studentid: this.$store.getters.studentid,
          },
          this.$store.getters.token
        )
        .then((res) => {
          return res;
        });
      this.desserts = response.data.data;
      // console.log(response);
      // console.log(response.data.data);
    } catch (error) {
      return error;
    }
  },
};
</script>
