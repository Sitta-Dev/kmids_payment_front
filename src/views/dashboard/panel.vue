<template>
  <div class="welcome">
    <v-container>
      <v-row class="flex mx-auto lg9" >
        <v-col cols="12" md="4" sm="6" xs="12" >
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              :elevation="hover ? 20 : 8"
              to="/dashboard/invoice/lsit"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>สร้างใบ Invoice</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div><h3>สร้างใบ Invoice</h3></div>

                <div>
                  - list invoice ของฉัน<br>
                  - สร้างใบ invoice และ gen ใบให้ user
                </div>
              </v-card-text>

              <v-card-actions class="justify-center">

              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" xs="12" >
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              :elevation="hover ? 20 : 8"
              to="/dashboard/payment"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Payment</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div><h3>Payment</h3></div>

                <div>
                  - ตรวจสอบหลักฐานการชำระเงิน<br>
                  - ยืนยันการชำระเงิน
                </div>
              </v-card-text>

              <v-card-actions class="justify-center">

              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>


        <v-col cols="12" md="4" sm="6" xs="12" >
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              :elevation="hover ? 20 : 8"
              to="/dashboard/refund"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Refund</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div><h3>Refund</h3></div>

                <div>
                    - รายงานการร้องของคืนเงิน<br>
                    - ยืนยันการร้องขอคืนเงิน<br>
                    
                </div>
              </v-card-text>

              <v-card-actions class="justify-center">

              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4" sm="6" xs="12" >
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              :elevation="hover ? 20 : 8"
              to="/dashboard/report"
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Report</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>Report</div>

                <div>
                    - รายชื่อที่มีการเรียกเก็บและยอดรวม<br>
                    - รายชื่อของนักเรียนที่มีการชำระเงินเรียบร้อยแล้ว<br>
                    - รายชื่อที่ยังค้างการชำระเงิน
                </div>
              </v-card-text>

              <v-card-actions class="justify-center">

              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4" sm="6" xs="12" >
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              :elevation="hover ? 20 : 8"
              to="/#"
              disabled
            >
              <v-img
                class="white--text align-end"
                height="250px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Add user</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>Add user</div>

                <div>
                    - ชำระเงินค่าสมัครเรียนรด<br>
                    - ชำระเงินค่าเข้าค่ายเขาชนไก่<br>
                    - ชำระเงินค่าเครื่องแต่งกาย
                </div>
              </v-card-text>

              <v-card-actions class="justify-center">

              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
p.textcolor{
    color: black;
}
</style>
