<template>
  <div class="anyactivity">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="3">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">
                ขั้นตอนการส่งหลักฐานการชำระเงิน
              </p>
              <div class="text--primary">
                กรอกข้อมูลเพื่อใช้ยืนยันหลักฐานในการชำระเงิน ตามกิจกรรมต่างๆที่เกิดขึ้น
                เพื่อรอการตรวจสอบจากทางเจ้าหน้าที่ อีกครั้งค่ะ 
              </div>
              <div class="text--primary">
                <br /><br />
                <h3>Hello : {{ $store.state.parent_name }}</h3>
                <h4>parent of : {{ $store.state.studant_name }}</h4>
                <h4>Level  : {{ $store.state.grade }}</h4>
              </div>
              <div>
                <p class=" text--primary">ขั้นตอนการส่งหลักฐาน</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="9">
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
import check from "../../components/home/anyactivity/checkanyactivity";


export default {
  components: {

    check,
  },
  name: "anyactivity",
  data: () => ({

  }),
};
</script>
