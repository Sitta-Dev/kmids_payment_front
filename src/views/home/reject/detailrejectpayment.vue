<template>
  <div class="receipt">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto"
      >
        <v-col clos="12" md="12" sm="12" xs="12">
          <v-card class="mx-auto" elevation="10">
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <v-img
                    alt="KMIDS LOGO"
                    class="shrink mx-auto"
                    contain
                    src="../../../assets/KMIDSLogo.png"
                    transition="scale-transition"
                    width="100"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <p
                    class="display-1 text--primary font-weight-medium text-center"
                  >
                    Not Complete Payment
                  </p>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <h5>
                      <br />
                      <br />
                      <p class="text-right">
                        Receipt Ref: {{ datareceipt[0].uuid_any_activity_check  }}
                      </p>
                      <p class="text-right">
                        Receipt Date: {{ convertdate() }} {{ date }}
                      </p>
                    </h5>
                  </div>
                </v-col>
              </v-row>
              <div class="text--primary">
                <h4>
                  <p>Pay Item: {{ datareceipt[0].payitem }}</p>
                  <p>Student ID: {{ datareceipt[0].student_id }}</p>
                  <p>Student Name: {{ datareceipt[0].studentname }}</p>
                  <p>Grade: {{ datareceipt[0].grade }}</p>
                  <p>Academic Year: {{ datareceipt[0].acy }}</p>
                  <p>Date paid: {{ datareceipt[0].date_paid }}</p>
                  <p>Time paid: {{ datareceipt[0].time_paid }}</p>
                  <p>Amount: {{ datareceipt[0].amount }}</p>
                  <p>Chance: {{ datareceipt[0].chance }}</p>
                  <p>Bank: {{ datareceipt[0].bank }}</p>
                  <p>Status: {{ datareceipt[0].status }}</p>
                </h4>
                <p>comment: {{ comment }}</p>
              </div>
              <div>
                <v-row justify="center">
                  <v-btn color="orange darken-2" dark>
                    <v-icon dark left>mdi-printer</v-icon>Print
                  </v-btn>

                  <v-btn color="orange darken-2" dark to="/transaction">
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
import receiptapi from "../../../services/receipt";
import moment from "moment";
export default {
  name: "receipt",
  data: () => ({
    datareceipt: [],
    date: null,
    toreject: null,
    comment:null,
  }),
  async mounted() {
    try {
      // console.log(this.$route.params.uuids);
      const response = await receiptapi.getdatareceipt(
        {
          uuids: this.$route.params.uuids
        },
        this.$store.getters.token
      );
    //   console.log(response);
      if (response.data.success) {
        this.datareceipt = response.data.data;
        this.toreject = response.data.data[0].uuid_any_activity_check;
      } else {
        confirm("" + response.data.massage);
      }

       const response2 = await receiptapi.parentrejectpayment(
        {
          uuid: this.toreject
        },
        this.$store.getters.token
      );
      console.log(response2);
      if (response2.data.success) {
        this.comment = response2.data.data[0].comment
      } else {
        confirm("ดึงข้อมูลไม่ได้คะ");
      }
    } catch (error) {
      return error;
    }
  },
  methods: {
    convertdate() {
      const datess = this.datareceipt[0].create_time;
      this.date = moment(datess).format("DD/MM/YYYY hh:mm");
    }
  }
};
</script>
