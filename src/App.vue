<template>
  <router-view />
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
    completedLogin(data) {
      this.is_auth = true;
      localStorage.setItem("is_auth", true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      this.verifyAuth();
    },
    signOut() {
      this.loadLogIn();
      this.is_auth = false;
      localStorage.clear();
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style></style>
