<template>
  <div class="container cont2">
    <div class="card cd shadow-lg">
      <div class="card-header">Crear Cover Letter</div>
      <div class="card-body">
        <form v-on:submit.prevent="save">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Trabajo</label>
            <input
              type="text"
              class="form-control"
              v-model="coverletter.trabajo"
            />
          </div>

          <div class="mb-3">
            <label class="form-check-label" for="exampleCheck1"
              >Contenido</label
            >
            <textarea
              class="form-control"
              placeholder="escribe aqui"
              id="contenido"
              style="height: 100px"
              v-model="coverletter.contenido"
            ></textarea>
          </div>
          <div class="mb-3 text-center row justify-content-around">
            <button type="submit" class="btn btn-primary col-4">Guardar</button>
            <button class="btn btn-primary col-4" v-on:click="goHome">
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverCreate",
  data: function () {
    return {
      coverletter: {
        trabajo: "",
        contenido: "",
        idUsuario: "1",
        idCover: "1",
      },
    };
  },
  methods: {
    save: async function () {
      setTimeout(() => {
        alert("Se registro exitosamente su cover letter");
      }, 1000);
      /*await this.$apollo.mutate({
                    mutation: gql`
                        mutation CreateCover($coverletter: CoverInput!) {
                            createCover(coverletter: $coverletter) {
                            }
                        }
                        `,
                variables: {
                    coverletter: this.coverletter
                }
                }
                )
                .then( (result) => { 
                    console.log(result)
                    this.$emit("completeCreateCover")
                })
                .catch((error) => { 
                    console.log(error)
                })*/
    },
    goHome: function () {
      this.$router.push({
        name: "home",
      });
    },
  },
  created: function () {},
};
</script>

<style>
.cont2 {
  margin-top: 5%;
  margin-bottom: 5%;
}
.cd {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
