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
                  label="หัวข้อการจ่ายเงิน"
                  prepend-icon="mdi-account-badge-horizontal"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-checkbook"
                  name="Refid"
                  label="Ref ID 1 or ID 2"
                  type="text"
                  v-model="Refid"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-card-details"
                  name="firstname"
                  label="First name"
                  type="text"
                  v-model="firstname"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-card-details-outline"
                  name="lastname"
                  label="Last name"
                  type="text"
                  v-model="lastname"
                  outlined
                >
                </v-text-field>
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
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-alarm"
                  name="timepay"
                  label="เวลาจ่ายเงิน ex.09.30 น."
                  type="text"
                  v-model="timepay"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-cash"
                  label="Amount"
                  type="text"
                  v-model="money"
                  prefix="฿"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="ส่งรูปภาพ"
                  outlined
                  v-model="img"
                ></v-file-input>
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
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-alarm"
                  name="timepaydevelop"
                  label="เวลาจ่ายเงินค่ามูลนิธิ ex.09.30 น."
                  type="text"
                  v-model="timepaydevelop"
                  outlined
                >
                </v-text-field>
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
                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="รูปภาพมูลนิธิ"
                  outlined
                  v-model="imgdevelop"
                ></v-file-input>
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
                    chancebankdevelop === 'E-banking'
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
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#2e3192" dark>
                submit
              </v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "checkadmission",
  data: () => ({
    Refid: null,
    firstname: null,
    lastname: null,
    grad: null,
    selectgrad: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
    datepay: null,
    timepay: null,
    money: null,
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    img: null,
    chance: ["Bar Code", "E-banking", "Counter Service (7/11)"],
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
    titlechecklist: ["ค่าสมัครสอบ", "ค่าเทอม","ค่าเรียนปรับพื้นฐาน"],
    titlecheck: null,
    Roundlist: ["Round 1", "Round 2", "Round 3"],
    Round: null,
    ACYlist: ["2563", "2564", "2565"],
    Acy: "2563",
    datedevelop: null,
    timepaydevelop: null,
    amountdevelop: null,
    imgdevelop: null,
    chancebankdevelop: null,
    paybankdevelop: null,
  }),
  methods: {
    onUpload() {
      console.log(this.img);
    }
  }
};
</script>
