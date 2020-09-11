<template>
  <div class="detailinvoiceparent">
    <v-container>
      <v-row
        wrap
        class="flex text-xs-center xs12 sm10 md9 lg9 xl7 offset-md1 mx-auto"
      >
        <v-col clos="12" md="12" sm="12" xs="12">
          <v-card class="mx-auto" elevation="15">
            <v-card-text>
              <v-row>
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
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <p class=" text--primary body-2 font-weight-bold ">
                    King Mongkut's Institute of Technology Ladkrabang
                  </p>
                  <p class=" text--primary body-2 font-weight-bold">
                    International Demonstration School
                  </p>
                  <p class=" text--primary caption font-weight-bold">
                    1 Khwang Ladkrabang,Khet Ledkrabang
                  </p>
                  <p class=" text--primary caption font-weight-bold">
                    Bangkok 10520 (Tel. 061-415-2444)
                  </p>
                  <p class=" text--primary overline font-weight-bold">
                    Tax ID. 0994001395896
                  </p>
                </v-col>
                <v-col cols="12" xs="12" sm="4" md="4" lg="4">
                  <p
                    class="display-1 text--primary font-weight-bold text-right mx-7"
                  >
                    INVOICE
                  </p>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <p class="text--primary subtitle-2 mx-7">
                    SUBJECT: {{ subject }}
                  </p>
                  <br />
                  <p class="text--primary  mx-7">
                    {{ description }}
                  </p>
                </v-col>
                <v-row justify="center">
                  <v-col cols="12" sm="12" md="10" lg="10">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">No.</th>
                            <th class="text-center">
                              item Description
                            </th>
                            <th class="text-right">AMOUNT(THB)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in dataoptionone"
                            :key="item.Descri"
                          >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.item }}</td>
                            <td align="right">{{ item.amount }}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td></td>
                            <td align="right"><h3>TOTAL AMOUNT:</h3></td>
                            <td align="right">
                              <h3>{{ totalitem }}</h3>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td align="right"><h1>Due Date:</h1></td>
                            <td align="right">
                              <h1>{{ due_date }}</h1>
                            </td>
                          </tr>
                        </tfoot>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" sm="12" md="10" lg="10">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">No.</th>
                            <th class="text-center">
                              studentid
                            </th>
                            <th class="text-center">
                              studentname
                            </th>
                            <th class="text-center">
                              grade
                            </th>
                            <th class="text-center">
                              acy
                            </th>
                            <th class="text-center">
                             status
                            </th>
                            <th class="text-right">AMOUNT(THB)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in datageninvoice"
                            :key="item.Descri"
                          >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.studentid }}</td>
                            <td>{{ item.studentname }}</td>
                            <td>{{ item.grade }}</td>
                            <td>{{ item.acy }}</td>
                            <td>{{ item.status }}</td>
                            <td align="right">{{ item.amount }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>
              </v-row>

              <div>
                <v-row justify="center">
                  <v-btn
                    class="mx-2"
                    color="orange darken-2"
                    dark
                    to="/dashboard/invoice/lsit"
                  >
                    <v-icon dark left>mdi-arrow-left</v-icon>back
                  </v-btn>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import invoice from "../../../services/invoice";
export default {
  name: "detailinvoiceparent",
  data: () => ({
    dataoptionone: [],
    totalitem: null,
    due_date: null,
    subject: null,
    description: null,
    datageninvoice: [],
  }),
  async mounted() {
    try {
      const response = await invoice.detailinvoice(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (response.data.success) {
        var getdetail = response.data.data[0].item_invoice;
        var todataoption = JSON.parse(getdetail);
        this.dataoptionone = todataoption.data;
        this.totalitem = response.data.data[0].totalitem;
        this.due_date = response.data.data[0].due_date;
        this.subject = response.data.data[0].subject;
        this.description = response.data.data[0].description;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
      const responsegen = await invoice.detailgenereate(
        {
          uuid: this.$route.params.uuids,
        },
        this.$store.getters.token
      );
      if (responsegen.data.success) {
        this.datageninvoice = responsegen.data.data;
      } else {
        confirm("ดึงข้อมูลไม่สำเร็จ");
      }
    } catch (error) {
      return error;
    }
  },
};
</script>
