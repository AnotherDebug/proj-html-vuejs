<script>
export default {
    name: 'Main'
}
</script>


<template>
    <main>
        <section class="jumbotron">
            <img src="../assets/images/home-slider-62528242.jpg" alt="">
            <div class="centeredText">
                <h1>building inspiring spaces</h1>
                <p>we build inspiring residential & commercial spaces</p>
                <div class="buttonJumbo">
                    <button>explore recent work</button>
                    <button>get a quote today</button>
                </div>
            </div>
        </section>

        <section class="constructionProject">
            <h2>Do You Have A Construction Project We Can Help With?</h2>
            <div class="button">
                <button>get a free quote</button>
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

main {
    height: 100%;
    margin-top: 100px;

    .jumbotron {
        position: relative;
        text-transform: uppercase;
        text-align: center;

        img {
            width: 100%;
            margin-bottom: -5px;
        }

        .centeredText {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $white-color;

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
                    transition: all 0.3S;

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
                    transition: all 0.3S;

                    &:hover {
                        background-color: $dimgray-color;
                        color: $white-color;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    .constructionProject {
        position: relative;
        text-align: center;
        line-height: 100px;
        height: 100px;
        background-color: $yellow-color;

        .button {
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translate(-50%, -50%);
            button {
                padding: 10px 20px;
                background-color: $dimgray-color;
                color: $white-color;
                border: none;
                cursor: pointer;
                text-transform: uppercase;
                transition: all 0.3S;

                &:hover {
                    background-color: $yellow-color;
                    color: $dimgray-color;
                    text-transform: uppercase;
                }
            }
        }
    }
}
</style>