<template>
  <div>
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Iniciar sesión</h3>
      <form v-on:submit.prevent="processLogIn">
        <input
          v-model="credentials.correo"
          class="form-control"
          placeholder="Usuario"
        />
        <input
          v-model="credentials.contrasena"
          type="password"
          class="form-control"
          placeholder="Contraseña"
        />
        <p v-if="show_error" class="error">Usuario o contraseña incorrecta</p>
        <button class="btn btn-primary">
          <span v-if="!is_loading">Ingresar</span>
          <div
            v-if="is_loading"
            class="spinner-border text-light"
            role="status"
          ></div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LogIn",
  data: function () {
    return {
      is_loading: false,
      show_error: false,
      credentials: {
        correo: "",
        contrasena: "",
      },
    };
  },
  methods: {
    processLogIn: async function () {
      this.is_loading = true;
      console.log("Entra");
      console.log(this.$apollo);
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($credentials: CredentialsInput!) {
              login(credentials: $credentials) {
                exitoso
                mensajeError
                body
              }
            }
          `,
          variables: {
            credentials: this.credentials,
          },
        })
        .then((result) => {
          console.log(result);
          let data = {
            username: this.credentials.username,
            token: result.data.login.body,
          };
          this.is_loading = false;
          this.is_auth = true;
          localStorage.setItem("is_auth", true);
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          this.$router.push({ name: "update" });
        })
        .catch((error) => {
          console.log(error);
          this.is_loading = false;
          this.show_error = true;
        });
    },
  },
  created: function () {},
};
</script>

<style>
.background {
  height: calc(100vh - 57px);
}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 50px;
}

.form form {
  display: flex;
  flex-direction: column;
}

.form input {
  margin-bottom: 25px;
}

.form h3 {
  text-align: center;
  margin-bottom: 30px;
}

.error {
  color: red;
  font-size: 15px;
}

@media (max-width: 500px) {
  .form {
    padding: 40px 25px;
    width: 85%;
  }
}
</style>
