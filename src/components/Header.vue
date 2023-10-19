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
                <button>get quote</button>
            </div>
        </div>
        <div class="jumbotron">
            <img src="../assets/images/home-slider-62528242.jpg" alt="">
            <div class="centeredText">
                <h1>building inspiring spaces</h1>
                <p>we build inspiring residential & commercial spaces</p>
                <div class="buttonJumbo">
                    <button>explore recent work</button>
                    <button>get a quote today</button>
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

    .button {
        button {
            padding: 10px 20px;
            background-color: $yellow-color;
            color: $dimgray-color;
            border: none;
            cursor: pointer;
            text-transform: uppercase;

            &:hover {
                background-color: $dimgray-color;
                color: $white-color;
                text-transform: uppercase;
            }
        }
    }

    .jumbotron {
        position: relative;
        text-transform: uppercase;
        text-align: center;
        width: 100%;

        img {
            width: 100%;
        }

        .centeredText {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            p {
                text-transform: capitalize;
                margin: 20px 0;
                color: $yellow-color;
            }

            .buttonJumbo {
                button:first-child {
                    padding: 15px 35px;
                    background-color: $dimgray-color;
                    color: $white-color;
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                    margin: 7px;

                    &:hover {
                        background-color: $yellow-color;
                        color: $dimgray-color;
                        text-transform: uppercase;
                    }
                }
                button:last-child {
                    padding: 15px 35px;
                    background-color: $yellow-color;
                    color: $dimgray-color;
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                    margin: 7px;

                    &:hover {
                        background-color: $dimgray-color;
                        color: $white-color;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}</style>