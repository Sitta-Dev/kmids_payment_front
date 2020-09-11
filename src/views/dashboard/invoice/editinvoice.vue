<template>
  <div class="editinvoice">
    <v-container>
      <v-row>
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
                      name="Refid"
                      label="Activity Name"
                      type="text"
                      solo
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" lg="6"></v-col>
                  <v-col cols="12" sm="12" md="12" lg="12">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Description Activity"
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
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
            <template v-slot:footer>
              <P class="pa-2">Total Amount: </P>
            </template>
          </v-data-table>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12">
          <v-data-table
            v-model="selected"
            :headers="headers2"
            :items="desserts2"
            :single-select="singleSelect"
            item-key="stundentid"
            show-select
            class="elevation-5"
          >
            <template v-slot:top>
                
              <v-toolbar flat color="white">
                   <v-spacer></v-spacer>
                <v-btn color="primary" dark class="mb-2" v-on="on"
                  >Selet Grand</v-btn
                >
              </v-toolbar>
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
        <v-btn class="mx-2" color="green darken-2" dark >
          Save change
          <v-icon dark right>mdi-newspaper</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name:'editinvoice',
     data: () => ({
    date: null,
    due_date: null,
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

    singleSelect: false,
    selected: [],
    headers2: [
      {
        text: "Stundent ID",
        align: "start",
        sortable: false,
        value: "stundentid",
      },
      { text: "Student Name", value: "studentname", sortable: false },
      { text: "Grand", value: "grand", sortable: false },
    ],
    desserts2: [
      {
        stundentid: "1231651",
        studentname: "test test",
        grand: "Grand 7",
      },
      {
        stundentid: "123",
        studentname: "test test",
        grand: "Grand 7",
      },
      {
        stundentid: "123165",
        studentname: "test test",
        grand: "Grand 7",
      },
      {
        stundentid: "12351",
        studentname: "test test",
        grand: "Grand 7",
      },
      {
        stundentid: "1651",
        studentname: "test test",
        grand: "Grand 7",
      },
    ],
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          item: "major Activities fees/year",
          amount: "10,000",
        },
        {
          item: "Lunch & Snack Fees/year",
          amount: "24,300",
        },
        {
          item: "Dormitory",
          amount: "80,000",
        },
        {
          item: "Uniforms",
          amount: "8,250",
        },
        {
          item: "Rotc Fees/year",
          amount: "6,800",
        },
      ];
    },

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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
  }
</script>
