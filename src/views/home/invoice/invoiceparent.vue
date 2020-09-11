<template>
  <div class="invoicepaarent">
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="3">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="display-1 text--primary">Invoice List</p>
              <div class="text--primary">
                รายการ invoice ทั้งหมดของคุณ
                ทางเราได้มีการรวบรวมรายการค่าใช้จ่ายๆต่างๆออก
                มาเพื่ออำนวยความสะดวกในการชำระเงินของทางท่านผู้ปกครอง
              </div>
              <div class="text--primary">
                <br />
                <br />
                <h3>Hello : {{ $store.state.parent_name }}</h3>
                <h4>parent of : {{ $store.state.studant_name }}</h4>
                <h4>Level : {{ $store.state.grade }}</h4>
                <h4>E-mail : {{ email }}</h4>
                <h4>Phone Number : {{ phonenumber }}</h4>
              </div>
              <div class="text--primary">
                <br />
                <h3>ช่องทางการชำระเงิน</h3>
                <br />
                <p>
                  1.กรณีชำระเงินที่เคาร์เตอร์ธนาคาร
                  ท่านสามารถนำเงินเข้าบัญชีตามที่ปรากฎในใบแจ้งหนี้(Invoice)
                  บัญชีกระแสรายวัน ธนาคารไทยพาณิชย์ ชื่อบัญชี
                  โรงเรียนสาธิตนานาชาติ
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                  เลขที่บัญชี 088 300 5805
                </p>

                <p>
                  2.กรณีชำระเงินโดย Internet banking ท่านสามารถโอนเงินไปที่
                  บัญชีออมทรัพย์ ธนาคารไทยพาณิชย์ ชื่อบัญชี
                  โรงเรียนสาธิตนานาชาติสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                  เลขที่บัญชี 088 260 7701
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="9">
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-card class="mx-auto" max-width="400" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-3">INVOICE</div>
                    <v-list-item-title class="title mb-1">Tuition Fee</v-list-item-title>
                    <v-list-item-subtitle>Tuition fee and Service Fees for Academic Year 2020-2021</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    outlined
                    :href="'http://localhost:8083/pdf/' + pdfpath"
                    target="_bank"
                  >Download Invoice</v-btn>
                  <v-btn outlined to="/anyactivity">Payment</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6" v-for="item in listinvoice" :key="item.subject">
              <v-card class="mx-auto" max-width="400" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-3">INVOICE NO.: {{ item.invoiceno }}</div>
                    <v-list-item-title class="title mb-1">
                      {{
                      item.subject
                      }}
                    </v-list-item-title>
                    <div class="overline mb-3">amount: {{ item.amount }}</div>
                    <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    outlined
                    target="_bank"
                    :to="{
                      name: 'detailinvoiceparent',
                      params: {
                        uuids: item.uuid_invoice_billed,
                      },
                    }"
                  >show details</v-btn>
                  <v-btn
                    outlined
                    target="_bank"
                    :to="{
                      name: 'paymentcheck',
                      params: {
                        uuids: item.uuid_invoice_billed,
                      },
                    }"
                  >Payment</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import inovice from "../../../services/invoice";
import refund from "../../../services/refund";
export default {
  name: "invoicepaarent",
  data: () => ({
    listinvoice: [],
    pdfpath: null,
    urlpath: null,
    phonenumber: null,
    email: null
  }),
  async mounted() {
    try {
      const response = await inovice.parentlistinvoice(
        {
          studentid: this.$store.getters.studentid
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        this.listinvoice = response.data.data;
      } else {
        // confirm("ไม่มีข้อมูล  invocie");
      }
      const response2 = await inovice.parentdownloadinvoice(
        {
          studentid: this.$store.getters.studentid
        },
        this.$store.getters.token
      );
      if (response2.data.success) {
        this.pdfpath = response2.data.data[0].file;
      } else {
        // confirm("ไม่มีข้อมูล  invocie");
      }
      const responsedataparnet = await refund.getdataparent(
        {
          studentid: this.$store.state.studentid,
          parentname: this.$store.state.parent_name
        },
        this.$store.getters.token
      );
      // console.log(responsedataparnet);
      if (responsedataparnet.data.success) {
        this.phonenumber = responsedataparnet.data.data.phone;
        this.email = responsedataparnet.data.data.email;
      }
    } catch (error) {
      return error;
    }
  }
};
</script>
