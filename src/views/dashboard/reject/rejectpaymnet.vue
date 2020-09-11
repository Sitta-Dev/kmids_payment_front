<template>
  <div class="rejectpayment">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto"
      >
        <v-col clos="12" md="12" sm="12" xs="12">
          <v-card class="mx-auto" elevation="10">
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p
                    class="display-1 text--primary font-weight-medium text-center"
                  >
                    รายละเอียดการชำระเงิน
                  </p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <div class="text--primary">
                    <p class="title">Pay Item: {{ datareceipt[0].payitem }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <div class="text--primary">
                    <p>Student ID: {{ datareceipt[0].student_id }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <div class="text--primary">
                    <p>Student Name: {{ datareceipt[0].studentname }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <div class="text--primary">
                    <p>Grade: {{ datareceipt[0].grade }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <div class="text--primary">
                    <p>Academic Year: {{ datareceipt[0].acy }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Date paid:{{ datareceipt[0].date_paid }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Time paid: {{ datareceipt[0].time_paid }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Amount: {{ datareceipt[0].amount }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Chance: {{ datareceipt[0].chance }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Bank: {{ datareceipt[0].bank }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <div class="text--primary">
                    <p>Status: {{ datareceipt[0].status }}</p>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                    dark
                    :href="'http://172.16.1.49:8083/' + datareceipt[0].img"
                    target="_bank"
                  >
                    <v-icon left>mdi-file-image</v-icon>
                    view image
                  </v-btn>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-textarea
                    outlined
                    name="input-7-4"
                    label="Please provide detailed of reject"
                    v-model="comment"
                  ></v-textarea>
                </v-col>
              </v-row>
              <div>
                <v-row justify="center">
                  <v-btn
                    class="mx-2"
                    color="orange darken-2"
                    dark
                    to="/dashboard/payment"
                  >
                    <v-icon dark left>mdi-arrow-left</v-icon>back
                  </v-btn>
                  <v-btn
                    class="mx-2"
                    color="red"
                    dark
                    @click="rejectnaja()"
                    >Reject
                    <v-icon dark right>mdi-cancel</v-icon>
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
import show from "../../../services/anyactivity";
import anyactivity from "../../../services/anyactivity";
import moment from "moment";
export default {
  name: "rejectpayment",
  data: () => ({
    datareceipt: [],
    date: null,
    reject: null,
    comment: null,
    urlpath:null
  }),
  async mounted() {
    try {
      // console.log(this.$route.params.uuids);
      const response = await show.getdatashowactivity(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      console.log(response);
      if (response.data.success) {
        this.datareceipt = response.data.data;
        this.reject = response.data.data[0].uuid_any_activity_check;
      } else {
        confirm("" + response.data.massage);
      }
      this.urlpath = this.$store.state.urlimg;
    } catch (error) {
      return error;
    }
  },
  methods: {
    convertdate() {
      const datess = this.datareceipt[0].create_time;
      this.date = moment(datess).format("DD/MM/YYYY hh:mm");
    },
    async rejectnaja(){
      confirm("คุณต้องการ Reject ใช่ไหม");
        const response = await anyactivity
        .rejectpayment(
          {
            uuidpayment: this.datareceipt[0].uuid_any_activity_check,
            studentid: this.datareceipt[0].student_id,
            comment: this.comment,
            createby: this.$store.getters.uuid,
          },
          this.$store.getters.token
        )
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return error;
        });
      if (response.data.success) {
        confirm("ยืนยันสำเร็จแล้วคะ");
        this.$router.push({
          name: "anyactivitydas",
        });
      } else {
        confirm("ทำรายการไม่สำเร็จคะ");
      }
    },
  },
};
</script>
