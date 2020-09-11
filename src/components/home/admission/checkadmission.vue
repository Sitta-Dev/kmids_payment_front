<template>
  <div class="checkadmission">
    <v-col cols="12" sm="12" md="12">
      <v-card class="mx-auto">
        <v-card-text>
          <form>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="titlecheck"
                  :items="titlechecklist"
                  label="payitem"
                  prepend-icon="mdi-account-badge-horizontal"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-checkbook"
                  name="Refid"
                  label="Ref ID 1"
                  type="text"
                  v-model="Refid1"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-checkbook"
                  name="Refid"
                  label="Ref ID 2"
                  type="text"
                  v-model="Refid2"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-card-details"
                  name="firstname"
                  label="First name"
                  type="text"
                  v-model="firstname"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-card-details-outline"
                  name="lastname"
                  label="Last name"
                  type="text"
                  v-model="lastname"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="grad"
                  :items="selectgrad"
                  label="Grade"
                  prepend-icon="mdi-google-classroom"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="Round"
                  :items="Roundlist"
                  label="Round"
                  prepend-icon="mdi-school"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="Acy"
                  :items="ACYlist"
                  label="ACY"
                  prepend-icon="mdi-bag-personal"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-calendar-month-outline"
                  name="datepay"
                  label="วันที่จ่ายเงิน ex. 11/01/2020"
                  type="date"
                  v-model="datepay"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-alarm"
                  name="timepay"
                  label="เวลาจ่ายเงิน ex.09.30 น."
                  type="text"
                  v-model="timepay"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-cash"
                  label="Amount"
                  type="text"
                  v-model="amount"
                  prefix="฿"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="chancebank"
                  :items="chance"
                  label="ช่องทางการจ่ายเงิน"
                  prepend-icon="mdi-cash-register"
                  outlined
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-if="chancebank === 'Bar Code' || chancebank === 'E-banking'"
              >
                <v-select
                  v-model="paybank"
                  :items="bank"
                  label="ธนาคาร"
                  prepend-icon="mdi-bank"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <input
                  type="file"
                  style="display: none"
                  @change="onfileimg"
                  accept="image/png, image/jpeg, image/bmp"
                  ref="fileInput"
                />
                <v-btn class="ma-2" tile outlined color="success" @click="$refs.fileInput.click()">
                  <v-icon left>mdi-camera</v-icon>upload image
                </v-btn>
                <p>file name: {{ nameimg }}</p>
              </v-col>
            </v-row>

            <v-row v-if="titlecheck === 'ค่าเทอม'">
              <v-col cols="12" sm="12" md="12">
                <h2>หลักฐานการชำระค่ามูลนิธิ</h2>
                <br />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-calendar-month-outline"
                  name="datepaydevelop"
                  label="วันที่จ่ายเงินค่ามูลนิธิ ex. 11/01/2020"
                  type="date"
                  v-model="datedevelop"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-alarm"
                  name="timepaydevelop"
                  label="เวลาจ่ายเงินค่ามูลนิธิ ex.09.30 น."
                  type="text"
                  v-model="timepaydevelop"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-cash"
                  label="Amount"
                  type="text"
                  v-model="amountdevelop"
                  prefix="฿"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="chancebankdevelop"
                  :items="chance"
                  label="ช่องทางการจ่ายเงิน"
                  prepend-icon="mdi-cash-register"
                  outlined
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-if="
                  chancebankdevelop === 'Bar Code' ||
                    chancebankdevelop === 'Mobile banking'
                "
              >
                <v-select
                  v-model="paybankdevelop"
                  :items="bank"
                  label="ธนาคาร"
                  prepend-icon="mdi-bank"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <input
                  type="file"
                  style="display: none"
                  @change="onfileimgdevop"
                  accept="image/png, image/jpeg, image/bmp"
                  ref="fileInput2"
                  :rules="rules"
                />
                <v-btn class="ma-2" tile outlined color="success" @click="$refs.fileInput2.click()">
                  <v-icon left>mdi-camera</v-icon>upload image
                </v-btn>
                <p>file name: {{ imgdevename }}</p>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="#2e3192"
                dark
                v-on:click.native="exam"
                v-if="titlecheck === 'ค่าสมัครสอบ'"
              >ส่งหลักฐานค่าสมัครสอบ</v-btn>
              <v-btn
                color="#2e3192"
                dark
                v-on:click.native="tuitionfee"
                v-if="titlecheck === 'ค่าเทอม'"
              >ส่งหลักฐานค่าเทอม</v-btn>
              <v-btn
                color="#2e3192"
                dark
                v-on:click.native="foundation"
                v-if="titlecheck === 'ค่าเรียนปรับพื้นฐาน'"
              >ส่งหลักฐานค่าปรับพื้นฐาน</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import admission from "../../../services/admission";
export default {
  name: "checkadmission",
  data: () => ({
    Refid1: null,
    Refid2: null,
    firstname: null,
    lastname: null,
    grad: null,
    selectgrad: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
    datepay: null,
    timepay: null,
    amount: null,
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    imgexam: null,
    nameimg: null,
    chance: ["Bar Code", "Mobile banking", "Counter Service (7/11)"],
    chancebank: null,
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
      "ธนาคารอิสลามแห่งประเทศไทย"
    ],
    paybank: null,
    titlechecklist: ["ค่าสมัครสอบ", "ค่าเทอม", "ค่าเรียนปรับพื้นฐาน"],
    titlecheck: null,
    Roundlist: ["Round 1", "Round 2", "Round 3"],
    Round: null,
    ACYlist: ["2563", "2564", "2565"],
    Acy: "2563",
    titlecheckdavalop: "ค่ามูลนิธิ",
    datedevelop: null,
    timepaydevelop: null,
    amountdevelop: null,
    imgdeve: null,
    imgdevename: null,
    chancebankdevelop: null,
    paybankdevelop: null,
    error: null
  }),
  methods: {
    onfileimg(event) {
      this.imgexam = event.target.files[0];
      this.nameimg = event.target.files[0].name;
    },
    onfileimgdevop(event) {
      this.imgdeve = event.target.files[0];
      this.imgdevename = event.target.files[0].name;
    },
    async exam() {
      const fd = new FormData();
      fd.append("titlecheck", this.titlecheck);
      fd.append("refid1", this.Refid1);
      fd.append("refid2", this.Refid2);
      fd.append("firstname", this.firstname);
      fd.append("lastname", this.lastname);
      fd.append("grad", this.grad);
      fd.append("round", this.Round);
      fd.append("acy", this.Acy);
      fd.append("datepay", this.datepay);
      fd.append("timepay", this.timepay);
      fd.append("amount", this.amount);
      fd.append("chance", this.chancebank);
      fd.append("bank", this.paybank);
      fd.append("imgexam", this.imgexam, this.imgexam.name);
      const response = await admission.examinationfee(fd);
      if (response.data.success) {
        this.$router.push({
          name: "completeadmission"
        });
      }
    },
    async tuitionfee() {
      const fdtutition = new FormData();
      fdtutition.append("titlecheck", this.titlecheck);
      fdtutition.append("refid1", this.Refid1);
      fdtutition.append("refid2", this.Refid2);
      fdtutition.append("firstname", this.firstname);
      fdtutition.append("lastname", this.lastname);
      fdtutition.append("grad", this.grad);
      fdtutition.append("round", this.Round);
      fdtutition.append("acy", this.Acy);
      fdtutition.append("datepay", this.datepay);
      fdtutition.append("timepay", this.timepay);
      fdtutition.append("amount", this.amount);
      fdtutition.append("chance", this.chancebank);
      fdtutition.append("bank", this.paybank);
      fdtutition.append("imgexam", this.imgexam, this.imgexam.name);

      const fddevelop = new FormData();
      fddevelop.append("titlecheck", this.titlecheckdavalop);
      fddevelop.append("refid1", this.Refid1);
      fddevelop.append("refid2", this.Refid2);
      fddevelop.append("firstname", this.firstname);
      fddevelop.append("lastname", this.lastname);
      fddevelop.append("grad", this.grad);
      fddevelop.append("round", this.Round);
      fddevelop.append("acy", this.Acy);
      fddevelop.append("datepay", this.datedevelop);
      fddevelop.append("timepay", this.timepaydevelop);
      fddevelop.append("amount", this.amountdevelop);
      fddevelop.append("chance", this.chancebankdevelop);
      fddevelop.append("bank", this.paybankdevelop);
      fddevelop.append("imgdeve", this.imgdeve, this.imgdeve.name);

      const responsetuition = await admission.tuitionfee(fdtutition);
      console.log(responsetuition.data.success);
      const responsedevelop = await admission.developmentfund(fddevelop);
      console.log(responsedevelop.data.success);
      if (responsetuition.data.success && responsedevelop.data.success) {
        this.$router.push({
          name: "completeadmission"
        });
      }
    },
    async foundation() {
      const fd = new FormData();
      fd.append("titlecheck", this.titlecheck);
      fd.append("refid1", this.Refid1);
      fd.append("refid2", this.Refid2);
      fd.append("firstname", this.firstname);
      fd.append("lastname", this.lastname);
      fd.append("grad", this.grad);
      fd.append("round", this.Round);
      fd.append("acy", this.Acy);
      fd.append("datepay", this.datepay);
      fd.append("timepay", this.timepay);
      fd.append("amount", this.amount);
      fd.append("chance", this.chancebank);
      fd.append("bank", this.paybank);
      fd.append("imgexam", this.imgexam, this.imgexam.name);
      const response = await admission.foundation(fd);
      console.log(response.data.success);
      if (response.data.success) {
        this.$router.push({
          name: "completeadmission"
        });
      }
    }
  }
};
</script>
