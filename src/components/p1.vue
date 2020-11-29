<template>
  <div class="outerp1">
    <div class="container">
      <!--header -->
      <div class="header1">
        <h1><img class="img1" src="pink.jpg" alt="pinkguy" />#P!nkCORD</h1>
        <button @click="gop2" id="leavechat" class="btn btn-danger">
          Leave Chat
        </button>
      </div>
      <!--show messages -->
      <div class="chat-body">
        <div :key="id" v-for="(y, id) in messages" class="newMsg">
          <div>
            <div class="name-date">
              <h3>{{ y.name }}</h3>
              <h6>{{ y.date }}</h6>
            </div>
            <div class="y.msg" style="padding-top:20px">
              <h4>{{ y.message }}</h4>
            </div>

            <!--  <button @click="del(y.id)">x</button>-->
          </div>
        </div>
      </div>

      <!--show messages -->
      <div class="msg-add">
        <H1>Hello!!! @{{ this.username }}</H1>
        <textarea
          style="resize: none;"
          placeholder="message"
          class="form-control"
          @keyup.enter="addtodb"
          v-model="message"
          rows="4"
          cols="50"
        >
Enter text here...</textarea
        >
        <button @click="addtodb" class="btn btn-primary">SEND</button>
      </div>
    </div>
  </div>
</template>

<script>
//import { use } from "vue/types/umd";
import moment from "moment";
//import db from "../components/firebase/init";
import firebase from "../components/firebase/init";
const db = firebase.firestore();
export default {
  name: "p1",
  data() {
    return {
      name: "",
      num: 0,
      user: "",
      messages: [],
    };
  },
  props: { username: String },
  methods: {
    gop2() {
      this.$router.push({
        name: "p2",
        params: { name: this.name },
      });
    },
    add() {
      this.num = this.num + 2;
    },
    addtodb() {
      if (this.message != "") {
        db.collection("tess")
          .add({
            name: this.username,
            message: this.message,
            timestamp: Date.now(),
          })
          .then((this.message = ""));
      }
    },
    del(id) {
      console.log("=>" + id);
      db.collection("tess")
        .doc(id)
        .delete();
    },
  },

  created() {
    let ref = db.collection("tess").orderBy("timestamp");
    let x = [];
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          x.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            date: moment(doc.data().timestamp).format("LTS"),
          });
        }
      });
      console.log(x);
      return x;
    });
    this.messages = x;
    /*
    let x = [];
    db.collection("tess")
      .orderBy("timestamp", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          x.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            date: moment(doc.data().timestamp).format("LTS"),
          });
          //console.log(doc.id, " => ", doc.data());
        });
        console.log(x);
        return x;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    this.messages = x; */
  },
};
</script>

<style scoped>
.name-date {
  display: flex;
  justify-content: space-between;
}

.img1 {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
}

h3 {
  color: rgb(95, 121, 225);
}

h6 {
  color: #686060;
}

h1,
label,
button {
  color: seashell;
  font-family: "Nerko One", cursive;
}
.msg-add {
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
}
.chat-body {
  padding: 2rem 2rem;
  overflow: auto;
  height: 60vh;
  background-color: indigo;
}
.header1 {
  padding: 3rem 5rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.newMsg {
  font-family: "Nunito", sans-serif;
  border-radius: 20px;
  padding: 2rem 2rem;
  height: auto;
  width: auto;
  padding: 10px auto;
  margin: 10px auto;
  background-color: rgb(216, 224, 242);
}

.container {
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  /*
  top: 10%;
  left: 20%;
  height: 80vh;
  position: absolute; */
  display: flex;
  flex-direction: column;
  background-color: hotpink;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 5px #1d1b18;
}
.outerp1 {
  height: 100vh;
  background-color: hotpink;
}
</style>
