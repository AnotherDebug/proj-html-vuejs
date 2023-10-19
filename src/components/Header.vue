<script>
export default {
    name: 'Header'
}
</script>


<template>
    <header>
        <div class="container-big d-flex ">
            <div class="logo">
                <img src="../assets/images/construction_logo.png" alt="">
            </div>
            <div class="navBar d-flex ">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">WORK</a></li>
                    <li><a href="#">ARTICLES</a></li>
                </ul>
                <div class="button">
                    <button>GET QUOTE</button>
                </div>
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

    .navBar{
        align-items: center;
        ul {
            list-style: none;
            padding-right: 15px;
            li {
                display: inline-block;
                padding: 0 15px;
                a{
                    text-decoration: none;
                    color: $dimgray-color;
                }
            }
        }
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