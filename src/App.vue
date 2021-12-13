<template>
  <div id="app">
    <header class="header shadow">
      <div>
        <img src="./assets/tuportafolioLogo.png" />
      </div>
      <div class="buttons">
        <button v-on:click="loadLogIn">Ingresar</button>
        <button v-on:click="loadSignUp">Registro</button>
        <button v-on:click="signOut">Cerrar Sesión</button>
      </div>
    </header>
    <div class="body" v-on:completedSignUp="loadLogIn">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="p1"><p>Desarrollado por:</p></div>
      <div class="p1">
        <p>Jaider Andrés Pinto Pinto</p>
        <p>jaanpipi11@gmail.com</p>
      </div>
      <div class="p1">
        <p>Cristhian Leonardo Torres Bernal</p>
        <p>leoleo981113@gmail.com</p>
      </div>
      <div class="p1">
        <p>Henry Niño</p>
        <p>ing.davidnino@gmail.com</p>
      </div>
      <div class="p1">
        <p>Jorge Gutierrez Palacios</p>
        <p>gutierrez.jorge681@gmail.com</p>
      </div>
      <div class="p1">
        <p>Sebastian Muñoz</p>
        <p>SEBASRS22@gmail.com</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "App", // NOmbre del componente
  data: function () {
    return {
      is_auth: false,
    };
  }, // Variables que se usan
  methods: {
    verifyAuth() {
      this.is_auth = localStorage.getItem("is_auth") || false;
      if (!this.is_auth) {
        this.loadLogIn();
      }
    },
    loadLogIn() {
      this.$router.push({ name: "login" });
    },
    signOut() {
      this.is_auth = false;
      localStorage.clear();
      this.loadLogIn();
    },
    loadSignUp() {
      this.$router.push({ name: "signUp" });
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
.body {
  flex-grow: 1;
  overflow: auto;
  min-height: 2em;
}

.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.header {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ccc7b9;
  padding: 10px;
}
.header img {
  width: auto;
  height: 100px;
}
body {
  margin: 0;
  font-family: "Times New Roman";
}
.header button {
  background: transparent;
  color: #864241;
  border: none;
}
.footer {
  flex-shrink: 0;
  width: 100%;
  background-color: #ccc7b9;
  padding: 10px;
}
.p1 {
  line-height: 0;
  display: flex;
  justify-content: space-between;
  color: #864241;
  font-size: 12px;
}
</style>
