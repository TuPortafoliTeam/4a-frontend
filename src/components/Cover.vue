<template>
    <div class="container cont1"> 
        <h1 class="title">COVER LETTER</h1>
        <div class="row">
            <div class="col m-2">
                <img src="https://cdn-icons.flaticon.com/png/512/3033/premium/3033143.png?token=exp=1639344795~hmac=d2e2c30d6f190aba817cd4d516ad9405" class="img-thumbnail shadow-lg img" alt="..."> 
            </div>
            <div class="col-12 col-md-6 m-2">
                <div class="card shadow-lg">
                    <div class="card-body">
                       
                    </div>
                </div>
                <button class="btn btn-light edit mt-3" title="Crear Cover Latter" v-on:click="CoverCreate"> <img src="https://cdn-icons-png.flaticon.com/512/3532/3532861.png" alt="" class="imgedit"> </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Cover",
        data: function () {
            idCover: "1" //localStorage.getItem("") || "none",
            return {
                coverByIdCover: {
                    trabajo: "",
                    contenido: "",
                    idUsuario: ""
                }
            }
        },
        apollo: {
            coverByIdCover: {
               /**
                query: gql`
                    query CoverByIdCover($idCover: Int!) {
                        coverByIdCover(idCover: $idCover) {
                            idUsuario
                            trabajo
                            contenido
                        }
                    }
                `,
                variables() {
                    return{ idCover: this.idCover}
                }
                */
            }
        },
        methods: {
            CoverCreate(){
                this.$router.push({name:"coverCreate"});
            },

        },
        created: function () {
            //this.$apollo.query.coverByIdCover.refetch();
        }
    }

</script>

<style>
.cont1{
    margin-top: 10px;
    margin-bottom: 20px;
}
.title{
    margin: 2%;
    color: #864241;
}
.col{
     text-align: center;
}
.img{
     width: 50%;
     
}
.imgedit{
    width: 20px;
}


</style>