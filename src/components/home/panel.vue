<template>
  <div class="panel">
    <v-container>
      <v-row wrap class="flex text-xs-center xs12 md10 lg10 xl10 offset-md1">
        <v-col clos="12" md="12" sm="12" xs="12">
          <center>
            <h1>Payment</h1>
          </center>
        </v-col>
      </v-row>
      <v-row class="flex xs12 md10 lg10 xl10 mx-auto" justify="center">
        <v-col cols="12" md="4" sm="6" xs="12">
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              raised
              :elevation="hover ? 20 : 8"
              to="/invoiceparent"
            >
              <center>
                <v-icon size="170">mdi-file-document-outline</v-icon>
              </center>

              <v-card-text class="text--primary">
                <div>
                  <center>
                    <h2>Invoice</h2>
                  </center>
                </div>
                <br />
                <div>
                  - List รายการ invoice
                  <br />- Detail invoice ต่างๆ
                  <br />
                </div>
              </v-card-text>

              <v-card-actions class="justify-center"></v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4" sm="6" xs="12">
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              raised
              :elevation="hover ? 20 : 8"
              to="/transaction"
            >
              <center>
                <v-icon size="170">mdi-cash</v-icon>
              </center>

              <v-card-text class="text--primary">
                <div>
                  <center>
                    <h2>Payment</h2>
                  </center>
                </div>
                <br />

                <div>
                  - เลือกช่องทางการจ่ายเงิน
                  <br />- ส่งหลักฐานการชำระเงิน
                  <br />
                </div>
              </v-card-text>

              <v-card-actions class="justify-center"></v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4" sm="6" xs="12">
          <v-hover v-slot:default="{ hover }" close-delay="50">
            <v-card
              class="mx-auto"
              max-width="350"
              raised
              :elevation="hover ? 20 : 8"
              to="/transaction"
            >
              <center>
                <v-icon size="170">mdi-cash-refund</v-icon>
              </center>

              <v-card-text class="text--primary">
                <div>
                  <center>
                    <h2>Refund</h2>
                  </center>
                </div>
                <br />

                <div>
                  - กรอกแบบฟอร์มร้องขอคืนเงิน
                  <br />- ตรวจสอบสถานะการคืนเงิน
                  <br />
                </div>
              </v-card-text>

              <v-card-actions class="justify-center"></v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "panel",
  data: () => ({})
};
</script>

<style>
p.textcolor {
  color: black;
}
</style>
