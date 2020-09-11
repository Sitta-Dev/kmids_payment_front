<template>
  <div class="showreport">
    <v-container>
      <v-row>
        <v-col clos="12" md="12" sm="12" xs="12">
          <v-card class="mx-auto" elevation="15">
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <p class="display-1 text--primary font-weight-bold mx-7">
                    Report
                  </p>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <p class="text--primary subtitle-2 mx-7">
                    SUBJECT: {{ subject }}
                  </p>
                  <br />
                  <p class="text--primary  mx-7">
                    {{ description }}
                  </p>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-select
                    :items="items"
                    dense
                    v-model="selectgetreport"
                    outlined
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="selectgetreport === 'All'"
                >
                  <v-btn class="mx-2" color="green" dark @click="comboall()">
                    <v-icon dark left>mdi-file-chart-outline</v-icon> Get Report
                    All
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="selectgetreport === 'bill'"
                >
                  <v-btn class="mx-2" color="green" dark @click="combobill()">
                    <v-icon dark left>mdi-file-chart-outline</v-icon> Get Report
                    Bill
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="selectgetreport === 'Paid'"
                >
                  <v-btn class="mx-2" color="green" dark @click="combopaidd()">
                    <v-icon dark left>mdi-file-chart-outline</v-icon> Get Report
                    Paid
                  </v-btn>
                </v-col>

                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="12">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">No.</th>
                            <th class="text-center">
                              studentid
                            </th>
                            <th class="text-center">
                              studentname
                            </th>
                            <th class="text-center">
                              grade
                            </th>
                            <th>
                              Fathers name
                            </th>
                            <th>
                              phone fathers
                            </th>
                            <th>
                              Mothers name
                            </th>
                            <th>
                              phone Mothers
                            </th>
                            <th class="text-center">
                              status
                            </th>
                            <th class="text-right">AMOUNT(THB)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in datageninvoice"
                            :key="item.Descri"
                          >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.studentid }}</td>
                            <td>{{ item.studentname }}</td>
                            <td>{{ item.grade }}</td>
                            <td>
                              {{
                                item.fathers_frist_name +
                                  " " +
                                  item.fathers_last_name
                              }}
                            </td>
                            <td>{{ item.phone_fathers }}</td>
                            <td>
                              {{
                                item.mothers_first_name +
                                  " " +
                                  item.mothers_last_name
                              }}
                            </td>
                            <td>{{ item.phone_mothers }}</td>
                            <td>{{ item.status }}</td>
                            <td align="right">{{ item.amount }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    v-if="selectgetreport === 'All'"
                  >
                    <h1>ยอดเงินรวม: {{ totalamount }}</h1>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    v-if="selectgetreport === 'bill'"
                  >
                    <h1>ยอดเงินรวมค้างชำระ: {{ totalamount }}</h1>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    v-if="selectgetreport === 'Paid'"
                  >
                    <h1>ยอดเงินรวมชำระแล้ว: {{ totalamount }}</h1>
                  </v-col>
                </v-row>
              </v-row>

              <div>
                <v-row justify="center">
                  <v-btn
                    class="mx-2"
                    color="orange darken-2"
                    dark
                    to="/dashboard/report"
                  >
                    <v-icon dark left>mdi-arrow-left</v-icon>back
                  </v-btn>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import invoice from "../../../services/invoice";
import report from "../../../services/report";
export default {
  name: "showreport",
  data: () => ({
    dataoptionone: [],
    totalitem: null,
    due_date: null,
    subject: null,
    description: null,
    datageninvoice: [],
    items: ["All", "bill", "Paid"],
    selectgetreport: "All",
    totalamount: null,
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
        var getdetail = response.data.data[0].item_invoice;
        var todataoption = JSON.parse(getdetail);
        this.dataoptionone = todataoption.data;
        this.totalitem = response.data.data[0].totalitem;
        this.due_date = response.data.data[0].due_date;
        this.subject = response.data.data[0].subject;
        this.description = response.data.data[0].description;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
    } catch (error) {
      return error;
    }
  },
  watch: {
    totalamount: function(val) {
      const temp = val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.totalamount = temp;
    },
  },
  methods: {
    async getdataall() {
      const response = await report.getdataall(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.datageninvoice = response.data.data;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
    },
    async getdatapaid() {
      const response = await report.getdatapaid(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.datageninvoice = response.data.data;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
    },
    async getdatabill() {
      const response = await report.getdatabill(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.datageninvoice = response.data.data;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
    },
    caltotalitem() {
      var i = 0;
      var sum = 0;
      for (i; i < this.datageninvoice.length; i++) {
        var temp = this.datageninvoice[i].amount;
        var temp2 = temp.replace(/,/g, "");
        var toplus = parseInt(temp2);
        sum += toplus;
      }
      this.totalamount = sum.toString();
    },
    comboall() {
      this.getdataall();
      setTimeout(() => this.caltotalitem() , 500);
    },
    combobill() {
      this.getdatabill();
      setTimeout(() => this.caltotalitem() , 500);
    },
    combopaidd() {
      this.getdatapaid();
      setTimeout(() => this.caltotalitem() , 500);
    },
  },
};
</script>
