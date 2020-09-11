<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>ค่าปรับพื้นฐาน : Pending </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-img
                    class="white--text align-end"
                    height="300px"
                    :src="'http://localhost:8083/' + showlink.img"
                  ></v-img>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn color="blue darken-1" text :href="'http://localhost:8083/'+item.img" target="_bank">
      <v-icon medium class="mr-2" >
        mdi-file-image
      </v-icon>
      </v-btn>
      <v-icon medium class="mr-2" @click="aprove(item)">
        mdi-check-outline
      </v-icon>
      <v-icon medium @click="deleteItem(item)">
        mdi-delete
      </v-icon>
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
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
     async aprove(item) {
      confirm("คุณต้องการยืนยันใช่ไหม");
     const response = await getdataexam.putdatafoundation({uuid:item.uuid},this.$store.getters.token)
      .then(res=>{
        return res;
      })
      .catch(error=>{
        return error;
      });
       const index = this.desserts.indexOf(item);
      if (response.data.massage === "Sucessfuly") {
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.showlink);
      } else {
        this.desserts.push(this.showlink);
      }
      this.close();
    }
  },
  async mounted() {
    try {
      const response = await getdataexam
        .getdatafoundation(this.$store.getters.token)
        .then(res => {
          return res;
        });
      this.desserts = response.data.data;
      console.log(response.data.data);
      console.log(response.message)
    } catch (error) {
      return error;
    }
  }
};
</script>
