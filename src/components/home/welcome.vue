<template>
  <div class="welcome" id="welcome">
    <v-container>
      <v-row wrap class="flex text-xs-center xs12 md9 lg8 xl10 mx-auto">
        <v-col cols="12" md="6" sm="6" xs="12" align="center" justify="center">
          <v-img src="../../assets/img/SVG/undraw_mobile_pay_9abj.svg" aspect-ratio="1" contain></v-img>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="12" align-self="center" class="mb-4">
          <h1 class="font-italic font-weight-medium display-2 mr-2">KMIDS Payment Platform</h1>
          <blockquote class="blockquote">
            <p
              class="font-weight-light"
            >เป็นช่องทางการรับรู้ยอดที่ต้องชำระเงิน และยืนยันการชำระเงิน ผ่านระบบออนไลน์สำหรับท่านผู้ปกครอง KMIDS ที่สะดวก รวดเร็วและง่ายต่อการใช้งาน</p>
          </blockquote>
        </v-col>
      </v-row>
      <panel />
    </v-container>
  </div>
</template>

<script>
import panel from "../home/panel";
export default {
  name: "welcome",
  components: {
    panel
  },
  data: () => ({})
};
</script>

<style>
</style>
