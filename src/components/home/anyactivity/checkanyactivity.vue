<template>
  <div class="checkanyactivity">
    <v-col cols="12" sm="12" md="12">
      <v-card class="mx-auto">
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" xs="12" sm="2" md="2" lg="2">
              <v-img
                alt="KMIDS LOGO"
                class="shrink mx-5"
                contain
                src="../../../assets/KMIDSLogo.png"
                transition="scale-transition"
                width="100"
              />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <p class="headline text--primary text-center">Bank Transfer</p>
              <p class="display-1 text--primary text-center">Account Number: 088-3-00580-5</p>
              <p
                class="title text--primary text-center"
              >Account Name: KMITL International Demonstration School</p>
              <p class="title text--primary text-center">Siam Commercial Bank (SCB)</p>
            </v-col>
          </v-row>

          <form>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="titlecheck"
                  :items="titlechecklist"
                  label="Pay Item"
                  prepend-icon="mdi-account-badge-horizontal"
                  outlined
                ></v-select>
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
                v-if="
                  chancebank === 'Bar Code' || chancebank === 'Mobile banking'
                "
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
                <v-select
                  v-model="Acy"
                  :items="ACYlist"
                  label="Academic Year"
                  prepend-icon="mdi-bag-personal"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-calendar-month-outline"
                  name="datepay"
                  label="วันที่จ่ายเงิน อ้างอิงจากหลักฐาน"
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
                <input
                  type="file"
                  style="display: none"
                  @change="onfileimg"
                  accept="image/png, image/jpeg, image/bmp"
                  ref="fileInput"
                  :rules="rules"
                />
                <v-btn class="ma-2" tile outlined color="success" @click="$refs.fileInput.click()">
                  <v-icon left>mdi-camera</v-icon>upload image
                </v-btn>
                <p>file name: {{ nameimg }}</p>
              </v-col>
            </v-row>
            <p
              style="    display: inline-block;
                 overflow: hidden;
                  text-indent: -9999px;"
            >
              {{ (this.grad = $store.state.grade) }}
              {{ (this.studentid = $store.state.studentid) }}
              {{ (this.studentname = $store.state.studant_name) }}
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange darken-2 mx-2" dark to="/invoiceparent">
                <v-icon dark left>mdi-arrow-left</v-icon>back
              </v-btn>
              <v-btn color="#2e3192" dark @click="anyactivity">submit</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import anyactivity from "../../../services/anyactivity";
export default {
  name: "checkadmission",
  data: () => ({
    studentid: null,
    studentname: null,
    grad: null,
    selectgrad: [
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12"
    ],
    ACYlist: ["2562", "2563", "2564", "2565"],
    Acy: "2563",
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
    titlechecklist: ["Tuition Fee 2021", "week without walls"],
    titlecheck: "Tuition Fee 2021",
    uuidinvicebill: null
  }),
  methods: {
    onfileimg(event) {
      this.imgexam = event.target.files[0];
      this.nameimg = event.target.files[0].name;
      // console.log(event.target.files[0]);
    },
    async anyactivity() {
      const fd = new FormData();
      fd.append("uuidinvicebill", this.uuidinvicebill);
      fd.append("payitem", this.titlecheck);
      fd.append("studentid", this.studentid);
      fd.append("studentname", this.studentname);
      fd.append("grade", this.grad);
      fd.append("acy", this.Acy);
      fd.append("datepay", this.datepay);
      fd.append("timepay", this.timepay);
      fd.append("amount", this.amount);
      fd.append("chance", this.chancebank);
      fd.append("bank", this.paybank);
      fd.append("imgexam", this.imgexam, this.imgexam.name);
      const response = await anyactivity.anyactivityform(
        fd,
        this.$store.getters.token
      );
      if (response.data.success) {
        confirm("บันทึกข้อมูลเรียบร้อยแล้วคะ");
        this.$router.push({
          name: "invoiceparent"
        });
      } else {
        confirm("เกิดข้อผิดพลาดกรุณาตรวจสอบใหม่อีกครั้งคะ");
      }
    }
  },
  watch: {
    amount: function(val) {
      const temp = val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.amount = temp;
    }
  }
};
</script>
