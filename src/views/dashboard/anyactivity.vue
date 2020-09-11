<template>
  <div class="anyactivity">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                Payment Check
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
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="stateadmission === 'ตรวจสอบหลักฐาน'">
          <checkanyactivity />
        </v-col>
        <v-col v-if="stateadmission === 'รายงานการชำระเงิน'">
          <approvedataanyacitvity />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import checkanyactivity from "../../components/dashboard/anyactivity/checkactivitydas";
import approvedataanyacitvity from "../../components/dashboard/anyactivity/approveanyactivity";


export default {
  name:"anyactivity",
  components: {
    checkanyactivity,
    approvedataanyacitvity,
  },
  data: () => ({
    statelist: [
      "ตรวจสอบหลักฐาน",
      "รายงานการชำระเงิน",
    ],
    stateadmission: "ตรวจสอบหลักฐาน"
  })
};
</script>
