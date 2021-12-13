<template>
  <div
    class="update container-fluid text-center row justify-content-around pt-3 m-0"
    v-if="!begin"
  >
    <button v-on:click="able" class="btn btn-primary col-md-2 col-4">
      Iniciar Actualizacion
    </button>
    <button class="btn btn-primary col-md-2 col-4" v-on:click="goHome">
      Volver
    </button>
  </div>
  <div class="update container-fluid" v-if="begin">
    <div class="row justify-content-around">
      <div class="col-md-5 col-11">
        <h2 class="text-center">¿Quien eres?</h2>
        <div class="form-group">
          <label for="">¿Que te gustaria contarnos de ti?</label>
          <textarea
            class="form-control"
            rows="4"
            v-model="userDetail.profile.descripcion"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="">¿Cuales son tus intereses?</label>
          <textarea
            class="form-control"
            rows="4"
            v-model="userDetail.profile.intereses"
          ></textarea>
        </div>
      </div>
      <div class="col-md-5 col-11">
        <h2 class="text-center">¿Cual es tu filosofia de trabajo?</h2>
        <div class="form-group">
          <label for="">¿En que trabajas (o te gustaría)?</label>
          <input type="text" class="form-control" v-model="metodologia.p1" />
        </div>
        <div class="form-group">
          <label for="">¿Cúal es tu estilo de trabajo?</label>
          <input type="text" class="form-control" v-model="metodologia.p2" />
        </div>
        <div class="form-group">
          <label for="">¿Que piensas acerca del trabajo?</label>
          <textarea
            class="form-control"
            rows="4"
            v-model="metodologia.p3"
          ></textarea>
        </div>
      </div>
    </div>

    <h2 class="text-center">¿Cuentanos tu trayectoria?</h2>
    <div class="row justify-content-around">
      <div class="col-md-5 col-11">
        <h3>Tus Estudios</h3>
        <div v-for="estudio in userDetail.profile.formacion" :key="estudio">
          <div class="form-group">
            <label for="">¿Dónde estudiaste?</label>
            <input
              type="text"
              class="form-control"
              v-model="estudio.institucion"
            />
          </div>
          <div class="form-group">
            <label for="">¿Qué estudiaste?</label>
            <input type="text" class="form-control" v-model="estudio.materia" />
          </div>
          <div class="form-group">
            <label for="">¿En que año realizaste tus estudios?</label>
            <input type="text" class="form-control" v-model="estudio.anio" />
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="addFormation">
            Agregar formacion
          </button>
        </div>
      </div>
      <div class="col-md-5 col-11">
        <h3>Tus Trabajos previos</h3>
        <div v-for="trabajo in userDetail.profile.trabajo" :key="trabajo">
          <div class="form-group">
            <label for="">¿Dónde trabajaste?</label>
            <input type="text" class="form-control" v-model="trabajo.empresa" />
          </div>
          <div class="form-group">
            <label for="">¿Cúales eran tus funciones?</label>
            <input
              type="text"
              class="form-control"
              v-model="trabajo.funciones"
            />
          </div>
          <div class="form-group">
            <label for="">¿Qué cargo ocupaste?</label>
            <input type="text" class="form-control" v-model="trabajo.cargo" />
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="addWork">
            Agregar trabajo
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-md-8 col-11">
        <h2 class="text-center">Perfil</h2>
        <div class="form-group">
          <label for="">¿Cual es tu nombre?</label>
          <input
            type="text"
            class="form-control"
            v-model="userDetail.user.nombre"
          />
        </div>
        <div class="form-group">
          <label for="">¿Cual es tu tipo de documento de identidad?</label>
          <select
            class="form-control"
            v-model="userDetail.user.tipoDocIdentidad"
          >
            <option value="CC">Cedula de Ciudadania</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CE">Cedula de extranjeria</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">¿Cual es tu número de documento de identidad?</label>
          <input
            type="number"
            class="form-control"
            v-model="userDetail.user.numeroDocumento"
          />
        </div>
        <div class="form-group">
          <label for="">¿Cual es tu correo electronico?</label>
          <input
            type="email"
            class="form-control"
            v-model="userDetail.user.correo"
          />
        </div>
        <div class="form-group">
          <label for="">¿Cual es tu número de telefono?</label>
          <input
            type="number"
            class="form-control"
            v-model="userDetail.user.telefono"
          />
        </div>
        <div class="form-group">
          <label for="">Ingresa tu contraseña para continuar</label>
          <input
            type="password"
            class="form-control"
            v-model="userDetail.user.contrasena"
          />
        </div>
      </div>
    </div>
    <div class="text-center row justify-content-around m-3">
      <button class="btn btn-primary col-md-2 col-4" v-on:click="update">
        <span v-if="!is_loading">Actualizar Datos</span>
        <div
          v-if="is_loading"
          class="spinner-border text-light"
          role="status"
        ></div>
      </button>
      <button class="btn btn-primary col-md-2 col-4" v-on:click="goHome">
        Volver
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "UpdateProfile",

  data: function () {
    return {
      correo: "",
      is_loading: false,
      userId: parseInt(localStorage.getItem("id")) || null,
      begin: false,
      metodologia: {
        p1: "",
        p2: "",
        p3: "",
      },
      userDetail: {
        user: {
          idUsuario: null,
          tipoDocIdentidad: null,
          numeroDocumento: null,
          nombre: null,
          correo: null,
          telefono: null,
          contrasena: null,
          idTipoEntidad: null,
        },
        profile: {
          usuario: null,
          descripcion: null,
          metodologia: null,
          formacion: [
            {
              institucion: null,
              materia: null,
              anio: null,
            },
          ],
          trabajo: [
            {
              empresa: null,
              funciones: null,
              cargo: null,
            },
          ],
          intereses: null,
        },
        id: null,
      },
    };
  },

  methods: {
    addWork: function () {
      this.userDetail.profile.trabajo.push({});
    },

    addFormation: function () {
      this.userDetail.profile.formacion.push({});
    },

    able() {
      let replacer = (key, value) => {
        if (key == "__typename") return undefined;
        else return value;
      };
      this.userDetail = JSON.parse(JSON.stringify(this.userDetail, replacer));
      console.log(this.userDetail);
      this.begin = true;
      this.correo = this.userDetail.user.correo;
      this.userDetail.user.contrasena = "";
      let fil = (this.userDetail.profile.metodologia || "").split("\n");
      if (fil.length > 0) this.metodologia.p1 = fil[0];
      if (fil.length > 1) this.metodologia.p2 = fil[1];
      if (fil.length > 2) this.metodologia.p3 = fil[2];
    },

    update: async function () {
      this.userDetail.profile.metodologia =
        this.metodologia.p1 +
        "\n" +
        this.metodologia.p2 +
        "\n" +
        this.metodologia.p3;
      this.is_loading = true;
      this.userDetail.id = this.userId;
      let logged = false;
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($credentials: CredentialsInput!) {
              login(credentials: $credentials) {
                exitoso
                mensajeError
                body {
                  id
                  token
                }
              }
            }
          `,
          variables: {
            credentials: {
              correo: this.correo,
              contrasena: this.userDetail.user.contrasena,
            },
          },
        })
        .then((result) => {
          this.is_loading = false;
          logged = true;
        })
        .catch((error) => {
          this.is_loading = false;
          console.log(error);
        });
      if (!logged) {
        alert("Contraseña incorrecta");
        return;
      }
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($user: UserUpdateInput!) {
              updateUser(user: $user) {
                user {
                  idUsuario
                  tipoDocIdentidad
                  correo
                  numeroDocumento
                  nombre
                  telefono
                  contrasena
                  idTipoEntidad
                }
                profile {
                  usuario
                  descripcion
                  metodologia
                  formacion {
                    institucion
                    anio
                    materia
                  }
                  trabajo {
                    empresa
                    cargo
                    funciones
                  }
                  intereses
                }
              }
            }
          `,
          variables: {
            user: this.userDetail,
          },
        })
        .then((result) => {
          console.log(result);
          this.is_loading = false;
          alert("Actualizacion exitosa");
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
          alert("Error en la actualizacion");
          this.is_loading = false;
        });
    },
    goHome: function () {
      this.$router.push({
        name: "home",
      });
    },
  },

  apollo: {
    userDetail: {
      query: gql`
        query ($userId: Int!) {
          userDetail(userId: $userId) {
            user {
              idUsuario
              tipoDocIdentidad
              numeroDocumento
              nombre
              correo
              telefono
              contrasena
              idTipoEntidad
            }
            profile {
              usuario
              descripcion
              metodologia
              formacion {
                institucion
                anio
                materia
              }
              trabajo {
                empresa
                cargo
                funciones
              }
              intereses
            }
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
      fetchPolicy: "no-cache",
    },
  },
};
</script>

<style>
.update {
  background-color: #000022;
  color: white;
}

h2 {
  padding-top: 30px;
  padding-bottom: 15px;
}
h3 {
  padding-top: 20px;
  padding-bottom: 10px;
}

.btn {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
