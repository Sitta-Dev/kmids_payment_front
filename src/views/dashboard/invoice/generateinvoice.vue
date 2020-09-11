<template>
  <div class="generateinoice">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto"
      >
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                Generate Invoice
              </p>
              <div class="text--primary">
                <P>Subject:{{ subject }}</P>
                <p>Description:{{ description }}</p>
              </div>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-select
                    v-model="grad"
                    :items="selectgrad"
                    label="Grade"
                    prepend-icon="mdi-google-classroom"
                    solo
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-btn
                    class="mx-2"
                    color="green darken-2"
                    dark
                    @click="getgrade"
                  >
                    Get Data student
                    <v-icon dark right>mdi-newspaper</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            item-key="student_id"
            show-select
            class="elevation-2"
          >
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
        <v-btn
          class="mx-2"
          color="green darken-2"
          dark
          @click="generateinvoice"
        >
          Genereate Bill
          <v-icon dark right>mdi-newspaper</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import invoice from "../../../services/invoice";
export default {
  name: "generateinoice",
  data: () => ({
    selected: [],
    headers: [
      {
        text: "Student ID",
        align: "start",
        sortable: false,
        value: "student_id",
      },
      { text: "First Name", value: "first_name", sortable: false },
      { text: "Last Name", value: "last_name", sortable: false },
      { text: "Grade", value: "grade", sortable: false },
    ],
    desserts: [],
    grad: null,
    selectgrad: [
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
    ],
    subject: null,
    description: null,
    acy: null,
    totalitem: null,
  }),

  async mounted() {
    try {
      const response = await invoice.detailinvoice(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.subject = response.data.data[0].subject;
        this.description = response.data.data[0].description;
        this.acy = response.data.data[0].acy;
        this.totalitem = response.data.data[0].totalitem;
      } else {
        confirm("ไม่สามารถดึงข้อมูลรายละเอียด invocie ได้");
      }
    } catch (error) {
      return error;
    }
  },

  methods: {
    async getgrade() {
      const response = await invoice.getgrade(
        {
          grade: this.grad,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.desserts = response.data.data;
      } else {
        confirm("ไม่สามารถดึงข้อมูลได้");
      }
    },
    async generateinvoice() {
      const responsegen = await invoice.generateinvoice(
        {
          uuid_invoice_master: this.$route.params.uuids,
          subject:this.subject,
          description:this.description,
          studentlist: {
            data: this.selected,
          },
          acy: this.acy,
          totalitem: this.totalitem,
          create_by: this.$store.getters.uuid,
        },
        this.$store.getters.token
      );
      if (responsegen.data.success) {
        confirm("generate invoice สำเร็จแล้ว");
        this.$router.push({
          name: "lsitinvoice",
        });
      } else {
        confirm("ไม่สำเร็จ สร้าง invoice ไม่ได้");
      }
    },
  },
};
</script>
