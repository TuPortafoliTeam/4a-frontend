<template>
    <div>
        <div class="background"></div>
        <div class="inputs">
            <p>Nombre de Usuario</p>
            <input type="text">
            <p>Contraseña</p>
            <input type="password">
            <p>Confirmar Contraseña</p>
            <input type="password">
            <button>Registrarse</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: "SignUp",
        data: function () {},
        methods: {},
        created: function () {},
    }
</script>

<style>
    .background{
        position: fixed;
        background-color: #000022;
        height: calc(100vh - 235px);
        width: 100vw;
    }
    .inputs{
        top: 50%;
        position: absolute;
        display: flex;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        border-radius: 45px;
        background-color: #864241;
        padding: 48px 24px;
    
    }
    .inputs p{
        color: #EAF9D9;
        margin: unset;
        line-height: 23px;
        padding: 3px;
    }
    .inputs input {
        background-color: #9E6867;
        border-radius: 10px;
        border: none;
        width: 300px;
        padding: 3px;
        color: #EAF9D9;
    }
    .inputs button {
        background-color: #9E6867;
        border-radius: 10px;
        border: none;
        width: 98px;
        position: relative;
        left: 50%;
        top: 20px;
        transform: translate(-50%, -50%);
        margin: 16px 0px 0px 0px;
        color: #EAF9D9;
    }
</style>