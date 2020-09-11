<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Approve</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Select</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="3" sm="4" xs="12">
                    <v-select
                      :items="statelist2"
                      label="กิจกรรม"
                      dense
                      solo
                      v-model="stateadmission2"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3" sm="4" xs="12">
                    <v-select
                      :items="selectgrad"
                      label="Grade"
                      dense
                      solo
                      v-model="gradtoselect"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3" sm="4" xs="12">
                    <v-select
                      :items="Roundlist"
                      label="Round"
                      dense
                      solo
                      v-model="Roundselect"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3" sm="4" xs="12">
                    <v-select
                      :items="ACYlist"
                      label="Solo field"
                      dense
                      solo
                      v-model="Acyselect"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="getdata">Get Data</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn color="blue darken-1" text :href="'http://localhost:8083/'+item.img" target="_bank">
      <v-icon medium class="mr-2" >
        mdi-camera
      </v-icon>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <p>Not have DATA</p>
    </template>
  </v-data-table>
</template>

<script>
import getdataexam from "../../../services/admission";
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "REF1",
        align: "left",
        sortable: false,
        value: "refid1"
      },
      { text: "Frist name", value: "firstname" },
      { text: "Last name", value: "lastname" },
      { text: "Grad", value: "grad" },
      { text: "Amount", value: "amount" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    passstatus: "pass",
    showlink: {
      ref: "",
      fristname: "",
      lastname: "",
      grad: "",
      amount: "",
      status: "",
      link: ""
    },
    defaultItem: {
      ref: "",
      fristname: "",
      lastname: "",
      grad: "",
      amount: "",
      status: "",
      link: ""
    },
    gradtoselect: null,
    selectgrad: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
    Roundlist: ["Round 1", "Round 2", "Round 3"],
    Roundselect: null,
    ACYlist: ["2563", "2564", "2565"],
    Acyselect: "2563",
    statelist2: ["ค่าสมัครสอบ", "ค่าเทอม", "ค่ามูลนิธิ", "ค่าเรียนปรับพื้นฐาน"],
    stateadmission2: "ค่าสมัครสอบ"
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "SELECT" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.showlink = Object.assign({}, item);
      this.dialog = true;
    },
    aprove(item) {
      const index = this.desserts.indexOf(item);
      if (this.desserts[index].status === "wait") {
        console.log("done");
        this.desserts[index].status = this.passstatus;
      }
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    async getdata() {
    const response = await getdataexam.getdataapproved({
      titlecheck: this.stateadmission2,
      grad:this.gradtoselect,
      round:this.Roundselect,
      acy:this.Acyselect
      },this.$store.getters.token)
      .then(res=>{
        return res;
      })
      .catch(error=>{
        return error;
      });
      console.log(response);
      this.desserts = response.data.data;
      this.close();
    }
  }
};
</script>
