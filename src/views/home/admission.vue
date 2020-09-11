<template>
  <div class="admission">
    <v-container>
      <v-row wrap class="flex text-xs-center xs12 md9 offset-md1 mx-auto">
        <v-col cols="12" sm="12" md="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                Admission Payment
              </p>
              <div class="text--primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                debitis odio sed inventore quidem maiores fugiat quisquam nihil
                animi recusandae provident, possimus dolore obcaecati. Maiores
                quos molestiae excepturi. Ut, quia.
              </div>
              <div>
                <p class=" text--primary">ขั้นตอนการส่งหลักฐาน</p>
              </div>
              <!-- <v-col cols="12" sm="12" md="12">
                <v-radio-group v-model="stateadmission" row>
                  <v-radio
                    label="ต้องการชำระเงิน Pay ?  (Yes or No)"
                    value="pay"
                    disabled
                  ></v-radio>
                  <v-radio
                    label="ต้องการส่งหลักฐานการชำระเงิน (Yes or no)"
                    value="check"
                  ></v-radio>
                  <v-radio
                    label="ต้องการส่งทำเรื่องขอผ่อนผัน (Yes or no)"
                    value="test"
                    disabled
                  ></v-radio>
                </v-radio-group>
              </v-col> -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col >
          <check />
        </v-col>
        <!-- <v-col v-if="stateadmission === 'pay'">
          <pay />
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import pay from "../../components/home/admission/payadmission.vue";
import check from "../../components/home/admission/checkadmission";

export default {
  components: {
    // pay,
    check
  },
  name: "admission",
  data: () => ({
    stateadmission: "check"
  })
};
</script>
