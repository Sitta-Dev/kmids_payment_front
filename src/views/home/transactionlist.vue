<template>
  <div class="transectionlist">
    <v-container>
      <v-row wrap
        class="flex text-xs-center xs12 sm10 md8 lg8 xl6 offset-md1 mx-auto">
        <v-col cols="12" sm="12" md="12">
          <v-card class="mx-auto">
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="4" md="4">
                  <v-select
                    v-model="stateadmission"
                    :items="statalist"
                    label="เลือกหัวข้อ"
                    prepend-icon="mdi-cash-register"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-col v-if="stateadmission === 'all Transactions'">
            <alltransection />
          </v-col>
          <v-col v-if="stateadmission === 'refund'">
            <refund />
          </v-col>
        </v-col>

        <!-- <v-col v-if="stateadmission === 'pay'">
          <pay />
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import alltransection from "../../components/home/anyactivity/getmyactivity";
import refund from "../../components/home/anyactivity/getstatusrefund";

export default {
  components: {
    alltransection,
    refund,
  },
  name: "transectionlist",
  data: () => ({
    stateadmission: "all Transactions",
    statalist: ["all Transactions","refund"],
  }),
};
</script>
