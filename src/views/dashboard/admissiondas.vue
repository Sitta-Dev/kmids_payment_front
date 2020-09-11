<template>
  <div class="admission">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                Admission
              </p>
              <div class="text--primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                debitis odio sed inventore quidem maiores fugiat quisquam nihil
                animi recusandae provident, possimus dolore obcaecati. Maiores
                quos molestiae excepturi. Ut, quia.
              </div>
              <v-row>
                <v-col cols="12" sm="3" md="3">
                  <v-select
                    v-model="stateadmission"
                    :items="statelist"
                    label="เลือกหัวข้อ"
                    prepend-icon="mdi-cash-register"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3" v-if="stateadmission === 'ตรวจสอบหลักฐาน'">
                  <v-select
                    v-model="stateadmission2"
                    :items="statelist2"
                    label="เลือกกิจกรรม"
                    prepend-icon="mdi-cash-register"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="stateadmission === 'ตรวจสอบหลักฐาน'">
          <v-col v-if="stateadmission2 === 'ค่าสมัครสอบ'">
            <check />
          </v-col>
          <v-col v-if="stateadmission2 === 'ค่ามูลนิธิ'">
            <checkdevelop />
          </v-col>
          <v-col v-if="stateadmission2 === 'ค่าเทอม'">
            <checktuituionfee />
          </v-col>
          <v-col v-if="stateadmission2 === 'ค่าเรียนปรับพื้นฐาน'">
            <checkfoundationdas />
          </v-col>
        </v-col>
        <v-col v-if="stateadmission === 'รายงานการชำระเงิน'">
          <apporoveadmission />
        </v-col>
        <v-col v-if="stateadmission === 'เพิ่มหลักฐานการจ่ายเงิน'">
          <addadmission />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import check from "../../components/dashboard/admission/checkadmissiondas";
import checkdevelop from "../../components/dashboard/admission/checkdevelopmentfeedas";
import checktuituionfee from "../../components/dashboard/admission/checktuituionfeedas";
import checkfoundationdas from "../../components/dashboard/admission/checkfoundationdas";
import apporoveadmission from "../../components/dashboard/admission/approveadmission";
import addadmission from "../../components/dashboard/admission/addcheck";

export default {
  components: {
    check,
    apporoveadmission,
    addadmission,
    checkdevelop,
    checktuituionfee,
    checkfoundationdas
  },
  data: () => ({
    statelist: [
      "ตรวจสอบหลักฐาน",
      "รายงานการชำระเงิน",
      "เพิ่มหลักฐานการจ่ายเงิน"
    ],
    stateadmission: "ตรวจสอบหลักฐาน",
    statelist2: ["ค่าสมัครสอบ", "ค่าเทอม", "ค่ามูลนิธิ", "ค่าเรียนปรับพื้นฐาน"],
    stateadmission2: "ค่าสมัครสอบ"
  })
};
</script>
