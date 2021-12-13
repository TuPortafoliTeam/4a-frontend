<template>
  <div class="container-fluid text-center">
    <button v-on:click="goUpdate" class="btn btn-primary">
      Actualizar Datos de Potafolio
    </button>
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

<style></style>
