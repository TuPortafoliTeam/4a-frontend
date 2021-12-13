<template>
  <div>
    <div class="background"></div>
    <div class="inputs">
      <form v-on:submit.prevent="processSignUp">
        <p>Nombre de Usuario</p>
        <input v-model="user.nombre" type="text" />
        <p>Tipo de Documento</p>
        <select v-model="user.tipoDocIdentidad" name="Documento">
          <option value="Cedula de Ciudadanía">Cedula de Ciudadanía</option>
          <option value="Cedula de Extranjería">Cedula de Extranjería</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        <p>Numero de Documento</p>
        <input v-model="user.numeroDocumento" type="text" />
        <p>Correo Electronico</p>
        <input v-model="user.correo" type="text" />
        <p>Telefono</p>
        <input v-model="user.telefono" type="text" />
        <p>Contraseña</p>
        <input v-model="user.contrasena" type="password" />
        <p class="errors" v-if="show_error">Datos Incompletos</p>
        <button>Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "SignUp",
  data: function () {
    return {
      show_error: false,
      user: {
        nombre: "",
        contrasena: "",
        tipoDocIdentidad: "",
        numeroDocumento: "",
        correo: "",
        idTipoEntidad: 1,
        telefono: "",
      },
    };
  },
  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation RegistUser($user: UserInput!) {
              registUser(user: $user) {
                exitoso
                mensajeError
                body
              }
            }
          `,
          variables: {
            user: this.user,
          },
        })
        .then((result) => {
          alert("Su registro ha sido existoso, ingrese sus credenciales");
          this.$emit("completedSignUp");
        })
        .catch((error) => {
          this.show_error = true;
        });
    },
  },
  created: function () {},
};
</script>

<style>
.background {
  background-color: #000022;
  height: calc(85vh);
}
.inputs {
  top: 60%;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 45px;
  background-color: #864241;
  padding: 48px 24px;
}
.inputs form {
  display: flex;
  flex-direction: column;
}
.inputs p {
  color: #eaf9d9;
  margin: unset;
  line-height: 23px;
  padding: 3px;
}
.inputs p.errors {
  color: #c3a1a0;
}
.inputs input {
  background-color: #9e6867;
  border-radius: 10px;
  border: none;
  width: 300px;
  padding: 3px;
  color: #eaf9d9;
}
.inputs select {
  background-color: #9e6867;
  border-radius: 10px;
  border: none;
  width: 300px;
  padding: 3px;
  color: #eaf9d9;
}
.inputs button {
  background-color: #9e6867;
  border-radius: 10px;
  border: none;
  width: 98px;
  position: relative;
  left: 50%;
  top: 20px;
  transform: translate(-50%, -50%);
  margin: 16px 0px 0px 0px;
  color: #eaf9d9;
  cursor: pointer;
}
</style>
