<template>
  <div class="outerp2">
    <div class="container">
      <div class="header1">
        <h1><img class="img1" src="/pink.jpg" alt="pinkguy" />#P!nkCORD</h1>
      </div>

      <div class="inputForm">
        <label>Username:</label>
        <input
          @keyup.enter="gohome"
          type="text"
          v-model="username"
          class="form-control"
        />
        <p v-if="errortext">{{ this.errortext }}</p>
        <button class="btn btn-primary" @click="gohome">Enter chat</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "p2",
  data() {
    return {
      username: "",
      errortext: "",
    };
  },
  props: { name: String },
  methods: {
    gohome() {
      if (this.username == "") {
        this.errortext = "Enter a name!!! ";
      } else {
        this.$router.push({ name: "p1", params: { username: this.username } });
      }
    },
  },
};
</script>

<style scoped>
.inputForm button {
  margin-top: 1rem;
}
.outerp2 {
  height: 100vh;
  background-color: hotpink;
}
h1,
label,
button {
  color: seashell;
  font-family: "Nerko One", cursive;
}
.img1 {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
}
.container {
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 30rem;
  /* position: absolute;
  
  top: 20%;
  left: auto;*/
  padding: 0;
  margin: 0%;
  border-radius: 1rem;
  box-shadow: 0px 0px 2px 2px #1d1b18;
  background: hotpink;
}

p {
  color: rgb(209, 40, 40);
}

.header1 {
  height: 10rem;
  padding-top: 0%;
  margin: 0%;
  background-color: rgb(182, 63, 128);
  text-align: center;
  border-radius: 1rem 1rem 0 0;
}

.inputForm {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}
</style>
