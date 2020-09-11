<template>
  <div class="createinvoice">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto"
      >
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card class="mx-auto" elevation="5">
            <v-card-text>
              <p class="display-1 text--primary">
                Create Invoice
              </p>
              <div class="text--primary">
                Create Inovice Form
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card class="mx-auto" elevation="5">
            <v-card-text>
              <form>
                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      prepend-icon="mdi-checkbook"
                      name="subject"
                      label="Subject"
                      type="text"
                      solo
                      v-model="subject"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      prepend-icon="mdi-checkbook"
                      name="TexID"
                      label="TexID"
                      type="text"
                      solo
                      v-model="taxid"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="12">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Description "
                      v-model="description"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="4">
                    <v-text-field
                      prepend-icon="mdi-calendar-month-outline"
                      name="datepay"
                      label="วันที่เรียกเก็บ"
                      type="date"
                      v-model="date"
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="4">
                    <v-text-field
                      prepend-icon="mdi-calendar-month-outline"
                      name="datepay"
                      label="วันที่ครบกำหนด"
                      type="date"
                      v-model="due_date"
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="4">
                    <v-select
                      v-model="Acy"
                      :items="ACYlist"
                      label="Academic Year"
                      prepend-icon="mdi-bag-personal"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <!-- <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#2e3192" dark>
                    submit
                  </v-btn>
                </v-card-actions> -->
              </form>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12">
          <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-5"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>list item</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on"
                      >New Item</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.item"
                              label="item/Description"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.amount"
                              label="AMOUNT"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="save"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <p>Not have data</p>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
            <template v-slot:footer>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <center>
                    <v-btn color="primary" @click="caltotalitem"
                      >คำนวณยอดเงินรวม</v-btn
                    >
                  </center>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <p>ToTal: {{ totalitem }}</p>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          class="mx-2"
          color="orange darken-2"
          dark
          to="/dashboard/invoice/lsit"
        >
          <v-icon dark left>mdi-arrow-left</v-icon>back
        </v-btn>
        <v-btn class="mx-2" color="green darken-2" dark @click="createinvoice">
          Make Bill
          <v-icon dark right>mdi-newspaper</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import invoice from "../../../services/invoice";
export default {
  name: "createinvoice",
  data: () => ({
    subject: null,
    description: null,
    date: null,
    due_date: null,
    taxid: null,
    ACYlist: [
      "2562",
      "2563",
      "2564",
      "2565",
      "2566",
      "2567",
      "2568",
      "2569",
      "2570",
    ],
    Acy: "2562",

    dialog: false,
    headers: [
      {
        text: "item/Description",
        align: "start",
        sortable: false,
        value: "item",
      },
      { text: "AMOUNT", value: "amount" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      item: "",
      amount: "",
    },
    defaultItem: {
      item: "",
      amount: "",
    },
    totalitem: null,
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
    totalitem: function(val) {
      const temp = val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.totalitem = temp;
    },
  },

  created() {},

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
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

    save() {
      if (this.editedIndex > -1) {
        const temp = this.editedItem.amount
          .replace(/\D/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.editedItem.amount = temp;
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        const temp = this.editedItem.amount
          .replace(/\D/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.editedItem.amount = temp;
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    caltotalitem() {
      var i = 0;
      var sum = 0;
      for (i; i < this.desserts.length; i++) {
        var temp = this.desserts[i].amount;
        var temp2 = temp.replace(/,/g, "");
        var toplus = parseInt(temp2);
        sum += toplus;
      }
      this.totalitem = sum.toString();
    },
    async createinvoice(){
      const response = await invoice.createinvoice(
        {
          subject:this.subject,
          description:this.description,
          date:this.date,
          due_date:this.due_date,
          taxid:this.taxid,
          acy:this.Acy,
          item_invoice:{
            data: this.desserts
          },
          totalitem:this.totalitem,
          create_by:this.$store.getters.uuid
        },
        this.$store.getters.token
      );
      if(response.data.success){
        confirm("สร้างใบ invoice master สำเร็จแล้ว");
        this.$router.push({
          name: "lsitinvoice",
        });
      }else{
        confirm("ไม่สำเร็จ สร้าง invoice ไม่ได้");
      }
    }
  },
};
</script>
