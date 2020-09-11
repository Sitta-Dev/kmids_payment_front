<template>
  <div class="refund">
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
                    src="../../assets/KMIDSLogo.png"
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
                    <label class="font-weight-bold">Student's Name:</label>
                  </p>
                </v-col>
                <v-col cols="12" xs="4" sm="4" md="4" lg="4">
                  <v-text-field dense v-model="studentname"></v-text-field>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Student's ID:</label>
                </v-col>
                <v-col cols="6" xs="6" sm="4" md="4" lg="4">
                  <v-text-field dense v-model="studentid"></v-text-field>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Grade Level:</label>
                </v-col>
                <v-col cols="6" xs="6" sm="4" md="4" lg="4">
                  <v-text-field dense v-model="grade"></v-text-field>
                </v-col>

                <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                  <p class="body-1 text-right">
                    As per the following payment info:
                  </p>
                </v-col>
                <v-col cols="12" xs="6" sm="6" md="6" lg="6"> </v-col>
                <v-col cols="12" xs="8" sm="8" md="8" lg="8">
                  <p>e-Receipt No.: {{ datareceipt[0].uuid_any_activity_check }}</p>
                </v-col>
                <v-col cols="12" xs="4" sm="4" md="4" lg="4">
                  <p>Date Paid: {{ datareceipt[0].date_paid }}</p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p>Description:</p>
                  <p>Pay Item: {{ datareceipt[0].payitem }}</p>
                  <p>Academic Year: {{ datareceipt[0].acy }}</p>
                  <p>Time Paid: {{ datareceipt[0].time_paid  }}</p>
                  <p>Amount: {{ datareceipt[0].amount }}</p>
                  <p>Chance: {{ datareceipt[0].chance }}</p>
                  <p>Bank: {{ datareceipt[0].bank }}</p>
                  <p>Status: {{ datareceipt[0].status }}</p>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1">With my reason for request:</p>
                  <v-radio-group v-model="reason1" :mandatory="false">
                    <v-radio
                      label="Refund the deposits"
                      value="Refund the deposits"
                    ></v-radio>
                    <v-radio
                      label="The activity was cancelled."
                      value="The activity was cancelled."
                    ></v-radio>
                    <v-radio
                      label="My child was withdrawn from the activity."
                      value="My child was withdrawn from the activity."
                    ></v-radio>
                    <v-radio label="Others." value="Others"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="12"
                  lg="12"
                  v-if="reason1 === 'Others'"
                >
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Please provide detailed explanation of the reason why you are asking for a refund."
                    v-model="reason2"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" xs="3" sm="3" md="3" lg="3">
                  <p class="body-1">Refund Request for</p>
                </v-col>
                <v-col cols="12" xs="3" sm="3" md="3" lg="3">
                  <v-radio-group v-model="statusreq" :mandatory="false">
                    <v-radio label="Full Refund" value="1"></v-radio>
                    <v-radio label="Partial Refund" value="2"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col
                  cols="12"
                  xs="3"
                  sm="3"
                  md="3"
                  lg="3"
                  v-if="statusreq === '2'"
                >
                  <br />
                  <br />
                  <v-text-field
                    label="Amount"
                    v-model="amount"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1">
                    Please deposit the approved refund to the following bank
                    account.
                  </p>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Bank Name</label>
                </v-col>
                <v-col cols="6" xs="12" sm="4" md="4" lg="4">
                  <v-select v-model="bankname" :items="bank" dense></v-select>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Branch:</label>
                </v-col>
                <v-col cols="6" xs="12" sm="4" md="4" lg="4">
                  <v-text-field v-model="branch" dense> </v-text-field>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Account No.</label>
                </v-col>
                <v-col
                  cols="6"
                  xs="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="
                    bankname !== 'ธนาคารออมสิน' &&
                      bankname !== 'ธนาคารเกียรตินาคิน' &&
                      bankname !== 'ธนาคาร ธ.ก.ส'
                  "
                >
                  <v-text-field
                    v-model="accountno"
                    maxlength="10"
                    counter
                    :rules="[rules1.required, rules1.counter]"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  xs="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="
                    bankname === 'ธนาคารออมสิน' || bankname === 'ธนาคาร ธ.ก.ส'
                  "
                >
                  <v-text-field
                    v-model="accountno"
                    maxlength="12"
                    counter
                    :rules="[rules2.required, rules2.counter]"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  xs="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="bankname === 'ธนาคารเกียรตินาคิน'"
                >
                  <v-text-field
                    v-model="accountno"
                    maxlength="14"
                    counter
                    :rules="[rules3.required, rules3.counter]"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Account Name</label>
                </v-col>
                <v-col cols="6" xs="12" sm="4" md="4" lg="4">
                  <v-text-field v-model="accountname" dense> </v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <p class="body-1 mx-10">
                    and notify me at
                  </p>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">Phone number</label>
                </v-col>
                <v-col cols="6" xs="12" sm="4" md="4" lg="4">
                  <v-text-field v-model="phonenumber" dense> </v-text-field>
                </v-col>
                <v-col cols="6" xs="4" sm="2" md="2" lg="2">
                  <label class="body-1 font-weight-bold">E-mail</label>
                </v-col>
                <v-col cols="6" xs="12" sm="4" md="4" lg="4">
                  <v-text-field v-model="email" dense> </v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4" lg="4">
                  <p class="body-1 text-center">
                    Requester:
                  </p>
                </v-col>
                <v-col cols="6" xs="4" sm="3" md="3" lg="3">
                  <label class="body-1 font-weight-bold">Parent's Name</label>
                </v-col>
                <v-col cols="6" xs="12" sm="6" md="4" lg="4">
                  <v-text-field v-model="parentname" dense> </v-text-field>
                </v-col>
              </v-row>

              <div>
                <v-row justify="center">
                  <v-btn color="orange darken-2" dark to="/invoiceparent">
                    <v-icon dark left>mdi-arrow-left</v-icon>back
                  </v-btn>

                  <v-btn class="mx-2" color="red" dark @click="torefund(); payrefund();"
                    >Submit the Request
                    <v-icon dark right>mdi-cash-refund</v-icon>
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
import receiptapi from "../../services/receipt";
import refund from "../../services/refund";
export default {
  name: "refund",
  data: () => ({
    bank: [
      "ธนาคารไทยพาณิชย์",
      "ธนาคารกรุงศรีอยุธยา",
      "ธนาคารกสิกรไทย",
      "ธนาคารกรุงเทพ",
      "ธนาคารกรุงไทย",
      "ธนาคารทหารไทย",
      "ธนาคารออมสิน",
      "ธนาคารเกียรตินาคิน",
      "ธนาคารธนชาต",
      "ธนาคารอิสลามแห่งประเทศไทย",
      "ธนาคาร ธ.ก.ส",
    ],
    bankname: null,
    branch: null,
    uuidpayment: null,
    reasons: null,
    payitem: null,
    studentid: null,
    studentname: null,
    parentname: null,
    phonenumber: null,
    email: null,
    accountno: null,
    accountname: null,
    grade: null,
    acy: null,
    amount: null,
    reason1: "Refund the deposits",
    reason2: null,
    statusreq: null,
    datareceipt: [],
    rules1: {
      required: (value) => value.length > 9 || "Required 10 characters",
      counter: (v) => v.length <= 10 || "Max 10 characters",
    },
    rules2: {
      required: (value) => value.length > 11 || "Required 12 characters",
      counter: (v) => v.length <= 12 || "Max 10 characters",
    },
    rules3: {
      required: (value) => value.length > 13 || "Required 14 characters",
      counter: (v) => v.length <= 14 || "Max 10 characters",
    },
  }),
  async mounted() {
    try {
      // console.log(this.$route.params.uuids);
      const response = await receiptapi.getdatareceipt(
        {
          uuids: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      // console.log(response);
      if (response.data.success) {
        this.uuidpayment = response.data.data[0].uuid_any_activity_check;
        this.payitem = response.data.data[0].payitem;
        this.studentid = response.data.data[0].student_id;
        this.studentname = response.data.data[0].studentname;
        this.parentname = response.data.data[0].parent_name;
        this.grade = response.data.data[0].grade;
        this.acy = response.data.data[0].acy;
        this.amount = response.data.data[0].amount;
        this.parentname = this.$store.state.parent_name;
        this.datareceipt = response.data.data;
      } else {
        confirm("" + response.data.massage);
      }

      const responsedataparnet = await refund.getdataparent(
        {
          studentid: this.studentid,
          parentname: this.parentname,
        },
        this.$store.getters.token
      );
      // console.log(responsedataparnet);
      if (responsedataparnet.data.success) {
        this.phonenumber = responsedataparnet.data.data.phone;
        this.email = responsedataparnet.data.data.email;
      }
    } catch (error) {
      return error;
    }
  },
  methods: {
    async torefund() {
      const response = await refund.refundreq(
        {
          uuidpayment: this.uuidpayment,
          reason1: this.reason1,
          reasons2: this.reason2,
          payitem: this.payitem,
          studentid: this.studentid,
          studentname: this.studentname,
          parentname: this.parentname,
          phonenumber: this.phonenumber,
          email: this.email,
          bankname: this.bankname,
          branch: this.branch,
          account_no: this.accountno,
          account_name: this.accountname,
          grade: this.grade,
          acy: this.acy,
          amount: this.amount,
        },
        this.$store.getters.token
      );
      // console.log(response);
      if (response.data.success) {
        confirm(
          "คำร้องของท่านได้ถูกส่งไปเรียบร้อยแล้ว \nYour request has been submitted"
        );
        this.$router.push({
          name: "invoiceparent",
        });
      }
    },
    async payrefund(){
        const response = await refund.refundpayment(
        {
          uuid: this.uuidpayment,
          updateby: this.$store.getters.uuid,
        },
        this.$store.getters.token
      );
       if(response.data.success){
          confirm("ดำเนินการต่อ");
        }
    }
  },
};
</script>

