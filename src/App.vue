<template>
  <div id="app">
    <div class="header shadow">
      <div>
        <img src="./assets/tuportafolioLogo.png" />
        </div>
      <div class="buttons">
        <button>Ingresar</button>
        <button>Registro</button>
        <button>Cerrar Sesión</button>
      </div>
    </div>
    <div class="footer">
      <div class="p1"><p>Desarrollado por:  </p></div>
      <div class="p1"><p>Jaider Andrés Pinto Pinto</p><p>jaanpipi11@gmail.com</p></div>
      <div class="p1"><p>Cristhian Leonardo Torres Bernal</p><p>leoleo981113@gmail.com</p></div>
      <div class="p1"><p>Henry Niño</p><p>ing.davidnino@gmail.com</p></div>
      <div class="p1"><p>Jorge Gutierrez Palacios</p><p>gutierrez.jorge681@gmail.com</p></div>
      <div class="p1"><p>Sebastian Muñoz</p><p>SEBASRS22@gmail.com</p></div>
    </div>
    <div><router-view></router-view></div>
  </div>
  
</template>

<script>
    export default{
        name: "App",
        data: function () {},
        methods: {
          loadSignUp(){
            this.$router.push({name: "signUp"})
          }
        },
        created: function () {
          this.loadSignUp();
        },
    }
</script>

<style>
  .id {
    position: relative;
    min-height: 100vh;
  }
  .header{
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
  body{
    margin: 0;
    font-family: 'Times New Roman';
  }
  .header button{
    background: transparent;
    color: #864241;
    border: none;
  }
  .footer{
    position: absolute;
    left: 0;
    bottom: 0;
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
