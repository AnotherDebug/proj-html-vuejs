<script>
import Navbar from './partials/Navbar.vue'
export default {
    name: 'Header',
    components: {
        Navbar
    }
}
</script>


<template>
    <header>
        <div class="container-big d-flex">
            <div class="logo">
                <img src="../assets/images/construction_logo.png" alt="">
            </div>
           <Navbar />
            <div class="button">
                    <button>GET QUOTE</button>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>

@use '../scss/partials/variables' as *;

header {
    height: 120px;

    .container-big {
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .button {
        button {
            padding: 10px 20px;
           background-color: $yellow-color;
           color: $dimgray-color;
           border: none;
           cursor: pointer;
           &:hover {
            background-color: $dimgray-color;
            color: $white-color;
           }
        }
    }
}
</style>