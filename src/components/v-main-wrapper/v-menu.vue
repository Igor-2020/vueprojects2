<template>
    <div class="v-menu">
        <ul class="menu">
            <li><a href="#"><router-link :to="{name:'Home'}">Доставка</router-link></a></li>
            <li><a href="#"><router-link :to="{name:'Home'}">Контакты</router-link></a></li>
            <li><a href="#"><router-link :to="{name:'Home'}">О нас</router-link></a></li>
            <div class="v-menu__icon_shopping_cart">
                <i class ="material-icons">
                    shopping_cart
                </i>
            </div>
        </ul>


    </div>


</template>

<script>

    export default {
        name: "v-menu"
    }
</script>

<style lang="scss">

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        list-style: none;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color:#5c832f;
        border-color:black;
        border-style: ridge;
    }

    .menu li {
        width: 125px;
        height: 50px;
        transition: background-position-x 0.9s linear;
        text-align: center;

    a {
        font-size: 22px;
        color: #ffffff;
        text-decoration: none;
        transition: all 0.45s;
    }

    &:hover {
         background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
         animation: line 3s;
     }

    &:hover a {
         color: #ffffff;//#d94f5c;
     }

    &:not(:last-child) {
         margin-right: 80px;
        margin-bottom: -20px;
     }
    }

    @keyframes line {
        0% {
            background-position-x: 390px;
        }
    }
    .v-menu{
        &__icon_shopping_cart{
            position: absolute;
            right: 20px;
            &:hover {
                cursor: pointer;
            }
        }
    }

</style>