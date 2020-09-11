<template>
  <div class="showrefund">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto"
      >
        <v-col clos="12" md="12" sm="12" xs="12">
          <v-card class="mx-auto" elevation="15">
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
                <v-col cols="12" xs="12" sm="8" md="8" lg="8">
                  <p
                    class="headline text--primary font-weight-medium text-right"
                  >
                    Refund Request Form
                  </p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="subtitle-2 mx-10">Attention: School Director</p>
                </v-col>
                <v-col cols="12" xs="8" sm="8" md="8" lg="8">
                  <p class="body-1 text-right">
                    I would like to request a refund for
                    
                  </p>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <label class="font-weight-bold">Student's Name:    {{ datarefund[0].studentname }}</label> 
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Student's ID: {{ datarefund[0].studentid }}</label>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Grade Level: {{ datarefund[0].grade }}</label>
                </v-col>

                <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                  <p class="body-1 text-right">
                    As per the following payment info:
                  </p>
                </v-col>
                <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                </v-col>
                  <v-col cols="12" xs="8" sm="8" md="8" lg="8">
                    <p>
                      e-Receipt No.: {{ datarecipe[0].uuid_any_activity_check }}
                    </p>
                  </v-col>
                  <v-col cols="12" xs="4" sm="4" md="4" lg="4">
                    <p>Date Paid: {{ datarecipe[0].date_paid }}</p>
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                    <p>Description:</p>
                    <p>Pay Item: {{ datarecipe[0].payitem }}</p>
                    <p>Academic Year: {{ datarecipe[0].acy }}</p>
                    <p>Time Paid: {{ datarecipe[0].time_paid }}</p>
                    <p>Amount: {{ datarecipe[0].amount }}</p>
                    <p>Chance: {{ datarecipe[0].chance }}</p>
                    <p>Bank: {{ datarecipe[0].bank }}</p>
                    <p>Status: {{ datarecipe[0].status }}</p>
                  </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1">With my reason for request: {{ datarefund[0].reason1 }} {{ datarefund[0].reasons2 }}</p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1">Refund Request for : {{ datarefund[0].amount }} </p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1">
                    Please deposit the approved refund to the following bank
                    account.
                  </p>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Bank Name : {{ datarefund[0].bankname }}</label>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Branch: {{ datarefund[0].branch }}</label>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Account No.: {{ datarefund[0].account_no }}</label>
                </v-col>

                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Account Name: {{ datarefund[0].account_name }}</label>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1 mx-10">
                    and notify me at
                  </p>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Phone number: {{ datarefund[0].phone_number }}</label>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">E-mail: {{ datarefund[0].email }}</label>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4" lg="4">
                  <p class="body-1 text-center">
                    Requester:
                  </p>
                </v-col>
                <v-col cols="6" xs="4" sm="6" md="6" lg="6" align="center">
                  <label class="body-1 font-weight-bold">Parent's Name : {{ datarefund[0].parent_name }}</label>
                </v-col>
              </v-row>

              <div>
                <v-row justify="center">
                  <v-btn class="mx-2" color="orange darken-2" dark to="/dashboard/refund">
                    <v-icon dark left>mdi-arrow-left</v-icon>back
                  </v-btn>
                   <v-btn class="mx-2" color="green darken-2" dark @click="aprove(); payrefund(); ">
                    confirm
                    <v-icon dark right>mdi-check-outline</v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-2"
                    color="red"
                    dark
                     :to="{
                      name: 'rejectrefund',
                      params: {
                        uuids: reject,
                      },
                    }"
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
import refund from "../../../services/refund";
import receiptapi from "../../../services/receipt";
export default {
  name: "showrefund",
  data: () => ({
    datarefund: [],
    datarecipe: [],
    uuidpayment: null,
    showrecipt: false,
    reject: null,
  }),
  async mounted(){
    try {
      const response = await refund
        .showdetail(
          { 
            uuid: this.$route.params.uuids
          },this.$store.getters.token)
        .then((res) => {
          return res;
        });
      this.datarefund = response.data.data;
      this.reject = response.data.data[0].uuidrefund_activity;
      this.uuidpayment = response.data.data.uuid_activity_payment;
      const response2 = await receiptapi.getdatareceipt(
        {
          uuids: this.datarefund[0].uuid_activity_payment,
        },
        this.$store.getters.token
      );
      
      this.datarecipe = response2.data.data;
      this.showrecipt = true;
      // console.log(this.datarefund);

    } catch (error) {
      return error;
    }
  },
  methods: {
    async aprove() {
      confirm("คุณต้องการยืนยันใช่ไหม");
      const response = await refund.approvestatusrefund({
          uuid:this.$route.params.uuids,
          studentid:this.datarefund[0].studentid,
          updateby: this.$store.getters.uuid,
          },this.$store.getters.token)
      .then(res=>{
        return res;
      })
      .catch(error=>{
        return error;
      });
      if (response.data.success) {
        confirm("ยืนยันสำเร็จแล้วค่ะ");
        this.$router.push({
          name: "refunddas",
        });
      } else {
        confirm("ทำรายการไม่สำเร็จคะ");
      }
    },
    async payrefund(){
        const response2 = await refund.approvedrefundpayment(
        {
          uuid: this.uuidpayment,
          updateby: this.$store.getters.uuid,
        },
        this.$store.getters.token
      );
       if(response2.data.success){
          confirm("ดำเนินการต่อ");
        }
    }
  },
};
</script>
