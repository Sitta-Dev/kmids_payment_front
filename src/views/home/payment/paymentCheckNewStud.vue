<template>
  <v-app id="home">
    <div class="paymentCheckNewStud">
      <v-container>
        <v-row wrap class="flex text-xs-center xs12 sm10 md9 lg9 xl7 offset-md1 mx-auto">
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
                    <p class="headline text--primary text-center">Payment New Admission</p>
                  </v-col>
                </v-row>

                <form>
                  <!-- สำหรับนักเรียน -->
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <p class="headline text--primary text-left">สำหรับนักเรียน</p>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple"
                        label="Student first name/ชื่อนักเรียน"
                        type="text"
                        v-model="stud_first_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple-outline"
                        label="Student last name/นามสกุลนักเรียน"
                        type="text"
                        v-model="stud_last_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-badge-horizontal"
                        label="Personal ID/เลขบัตรประชาชน 13 หลัก"
                        type="text"
                        v-model="stud_grade"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- สำหรับผู้ปกครอง -->
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <p class="headline text--primary text-left">สำหรับผู้ปกครอง</p>
                    </v-col>

                    <!-- บิดา -->
                    <v-col cols="12" sm="12" md="12">
                      <h3 class="text-left">บิดา</h3>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple"
                        label="Father first name/ชื่อบิดา"
                        type="text"
                        v-model="fathers_first_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple-outline"
                        label="Father last name/นามสกุลบิดา"
                        type="text"
                        v-model="fathers_last_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-badge-horizontal"
                        label="Personal ID/เลขบัตรประชาชน 13 หลัก"
                        type="text"
                        v-model="fathers_id"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-phone"
                        label="ระบุเบอร์โทรศัพท์ติดต่อกลับ"
                        type="text"
                        v-model="fathers_phone"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-email"
                        label="ระบุ E-Mail สำหรับติดต่อกลับ"
                        type="text"
                        v-model="fathers_email"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <!-- มารดา -->
                    <v-col cols="12" sm="12" md="12">
                      <h3 class="text-left">มารดา</h3>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple"
                        label="Mother first name/ชื่อมารดา"
                        type="text"
                        v-model="mothers_first_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-box-multiple-outline"
                        label="Mother last name/นามสกุลมารดา"
                        type="text"
                        v-model="mothers_last_name"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-badge-horizontal"
                        label="Personal ID/เลขบัตรประชาชน 13 หลัก"
                        type="text"
                        v-model="mothers_id"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-phone"
                        label="ระบุเบอร์โทรศัพท์ติดต่อกลับ"
                        type="text"
                        v-model="mothers_phone"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-email"
                        label="ระบุ E-Mail สำหรับติดต่อกลับ"
                        type="text"
                        v-model="mothers_email"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- ข้อมูลการชำระเงิน -->
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <p class="headline text--primary text-left">ข้อมูลการชำระเงิน</p>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-calendar-month-outline"
                        name="datepay"
                        label="Date pay/วันที่จ่ายเงิน"
                        type="date"
                        v-model="foundation_datepay"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-alarm"
                        name="timepay"
                        label="Time pay/เวลาที่่จ่ายเงิน ex.09.30 น."
                        type="text"
                        v-model="foundation_timepay"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-account-cash"
                        label="Amount/ยอดเงินที่จ่าย"
                        type="text"
                        v-model="foundation_amount"
                        prefix="฿"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-pencil-outline"
                        label="Remarks/หมายเหตุ"
                        type="text"
                        v-model="foundation_refid1"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <input
                        type="file"
                        style="display: none"
                        @change="onfileimgChange"
                        accept="image/png, image/jpeg, image/bmp"
                        ref="fileInput"
                        :rules="rules"
                      />
                      <v-btn
                        class="ma-2"
                        tile
                        outlined
                        color="success"
                        @click="$refs.fileInput.click()"
                      >
                        <v-icon left>mdi-camera</v-icon>upload image
                      </v-btn>
                      <p>File name/แนบเอกสารชำระเงิน : {{ nameimg }}</p>
                    </v-col>
                  </v-row>

                  <v-card-actions>
                    <v-col class="text-center" cols="12" sm="12" md="12">
                      <v-btn color="#2e3192" dark @click="anyactivity">ส่งหลักฐานการชำระเงิน</v-btn>
                    </v-col>
                  </v-card-actions>
                </form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import anyactivity from "../../../services/anyactivity";
// import invoice from "../../../services/invoice";

export default {
  name: "paymentCheckNewStud",

  data: () => ({
    stud_first_name: null,
    stud_last_name: null,
    stud_grade: null,

    fathers_first_name: null,
    fathers_last_name: null,
    fathers_id: null,
    fathers_phone: null,
    fathers_email: null,

    mothers_first_name: null,
    mothers_last_name: null,
    mothers_id: null,
    mothers_phone: null,
    mothers_email: null,

    foundation_datepay: null,
    foundation_timepay: null,
    foundation_amount: null,
    foundation_refid1: null,
    foundation_img: null,

    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],

    imgexam: null,
    nameimg: null,
  }),

  async mounted() {
    // try {
    // const response = await invoice.parentshowdetailinvoice(
    //   {
    //     uuid: this.$route.params.uuids,
    //   },
    //   this.$store.getters.token
    // );
    // if (response.data.success) {
    // this.titlecheck = response.data.data[0].subject;
    // this.subject = response.data.data[0].subject;
    // this.detail = response.data.data[0].description;
    // this.invoiceno = response.data.data[0].invoiceno;
    // this.studentid = response.data.data[0].studentid;
    // this.studentname = response.data.data[0].studentname;
    // this.grad = response.data.data[0].grade;
    // this.Acy = response.data.data[0].acy;
    // this.amount = response.data.data[0].amount;
    // this.uuidinvicebill = response.data.data[0].uuid_invoice_billed;
    // }
    // } catch (error) {
    //   // return error;
    // }
  },

  methods: {
    onfileimgChange(event) {
      this.imgexam = event.target.files[0];
      this.nameimg = event.target.files[0].name;
      // console.log("imgexam : ", event.target.files[0]);
    },
    async anyactivity() {
      let fd = new FormData();
      fd.append("stud_first_name", this.stud_first_name);
      fd.append("stud_last_name", this.stud_last_name);
      fd.append("stud_grade", this.stud_grade);

      fd.append("fathers_first_name", this.fathers_first_name);
      fd.append("fathers_last_name", this.fathers_last_name);
      fd.append("fathers_id", this.fathers_id);
      fd.append("fathers_phone", this.fathers_phone);
      fd.append("fathers_email", this.fathers_email);

      fd.append("mothers_first_name", this.mothers_first_name);
      fd.append("mothers_last_name", this.mothers_last_name);
      fd.append("mothers_id", this.mothers_id);
      fd.append("mothers_phone", this.mothers_phone);
      fd.append("mothers_email", this.mothers_email);

      fd.append("foundation_datepay", this.foundation_datepay);
      fd.append("foundation_timepay", this.foundation_timepay);
      fd.append("foundation_amount", this.foundation_amount);
      fd.append("foundation_refid1", this.foundation_refid1);

      let dup = await anyactivity.autoGenFileName({ refId: this.stud_grade });

      let idx = this.imgexam.name.lastIndexOf(".");
      const file_type = idx < 1 ? "" : this.imgexam.name.substr(idx + 1);

      const genName = `${dup.data.data}.${file_type}`;
      fd.append("imgexam", this.imgexam, genName);

      const response = await anyactivity.anyactivityNewStudform(fd);
      if (response.data.success) {
        confirm("บันทึกข้อมูลเรียบร้อยแล้วคะ");
        this.$router.push({
          name: "loginparent",
        });
      } else {
        confirm("เกิดข้อผิดพลาดกรุณาตรวจสอบใหม่อีกครั้งคะ");
      }
    },
  },

  watch: {
    amount: function (val) {
      const temp = val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.amount = temp;
    },
  },
};
</script>

