<template>
  <div class="listinvoice">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                List of my Invoice
              </p>
              <div class="text--primary">
                Table List of Invoice
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="12" lg="12">
          <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-5"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>My invoice</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  to="/dashboard/invoice/create"
                  >New Invoice</v-btn
                >
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn
                icon
                target="_bank"
                :to="{
                  name: 'generateinvoice',
                  params: {
                    uuids: item.uuid_invoice_master,
                  },
                }"
              >
                <v-icon small class="mr-2">
                  mdi-file-send-outline
                </v-icon>
              </v-btn>
              <v-btn
                icon
                target="_bank"
                :to="{
                  name: 'dasdetailinvoice',
                  params: {
                    uuids: item.uuid_invoice_master,
                  },
                }"
              >
                <v-icon small class="mr-2">
                  mdi-file-eye
                </v-icon>
              </v-btn>
              <v-btn icon to="/dashboard/invoice/edit">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import inovice from "../../../services/invoice";
export default {
  name: "listinvoice",
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "subject",
        align: "start",
        sortable: false,
        value: "subject",
      },
      { text: "description", value: "description", sortable: false },
      { text: "date", value: "date", sortable: false },
      { text: "due_date", value: "due_date", sortable: false },
      { text: "amount", value: "totalitem", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
  }),

  computed: {},

  watch: {},

  created() {},
  async mounted() {
    try {
      const response = await inovice.myinvoice(
        {
          uuid: this.$store.getters.uuid,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.desserts = response.data.data;
      } else {
        confirm("ไม่มีข้อมูล my invocie");
      }
    } catch (error) {
      return error;
    }
  },

  methods: {
   async deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") 
        const responsedel = await inovice.delinvoice(
          {
            uuid_invoice: item.uuid_invoice_master
          },
          this.$store.getters.token
        );
        if(responsedel.data.success){
          confirm("delete this item complate") &&
          this.desserts.splice(index, 1);
        }else{
          confirm("delete this item complate not complate")
        }
    },
  },
};
</script>
