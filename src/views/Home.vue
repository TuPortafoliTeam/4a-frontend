<template>
  <div class="container-fluid text-center">
    <div class="row justify-content-around">
      <div
        class="col col-md-4 col-8 shadow my-3 p-0 btnTP"
        v-on:click="goUpdate"
      >
        <div class="card-body">
          <div class="iconTP">
            <i class="bi bi-person-plus-fill"></i>
          </div>
          <span class="bt"> Actualizar Datos de Potafolio</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data: function () {
    return {
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
      userId: parseInt(localStorage.getItem("id")),
    };
  },

  methods: {
    goUpdate: function () {
      this.$router.push({
        name: "update",
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
    },
  },
};
</script>

<style>
.iconTP {
  font-size: 150px;
}

.btnTP {
  background-color: #b3504e;
}

.btnTP:hover {
  background-color: #864241;
  cursor: pointer;
}

.bt {
  font-size: 30px;
}
</style>
