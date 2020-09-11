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
                    :src="'http://localhost:8083/' +showlink.img"
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

      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <!-- <v-btn
        color="blue darken-1"
        text
        :href="'http://localhost:8083/' + item.bookbank"
        target="_bank"
      >
        <v-icon medium class="mr-2">
          mdi-file-image
        </v-icon>
      </v-btn> -->

      <v-btn
        v-if="item.status === 'Reject to refund'"
        color="blue darken-1"
        text
        target="_bank"
        :to="{
          name: 'parentrejectrefund',
          params: {
            uuids: item.uuidrefund_activity,
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
import refundservcie from "../../../services/refund";
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    headers: [
      {
        text: "Ref",
        align: "left",
        value: "uuidrefund_activity",
        sortable: false
      },
      { text: "Payitem", value: "payitem" ,sortable: false},
      { text: "Grade", value: "grade",sortable: false },
      { text: "Amount", value: "amount" },
      { text: "Status", value: "status" ,sortable: false },
      { text: "Actions", value: "action", sortable: false }
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
      link: ""
    },
    defaultItem: {
      ref: "",
      fristname: "",
      lastname: "",
      grad: "",
      amount: "",
      status: "",
      link: ""
    },
    text: null,
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
      amount: null
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
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
  },
  async mounted() {
    try {
      console.log({ studentid: this.$store.getters.studentid });
      const response = await refundservcie
        .getstatusrefund(
          {
            studentid: this.$store.getters.studentid
          },
          this.$store.getters.token
        )
        .then(res => {
          return res;
        });
      this.desserts = response.data.data;
      console.log(response);
      // console.log(response.data.data);
    } catch (error) {
      return error;
    }
  }
};
</script>
