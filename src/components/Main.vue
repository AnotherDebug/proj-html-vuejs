<script>
import CardCount from './partials/CardCount.vue'
import CardLatest from './partials/CardLatest.vue'
import CardMoCo from './partials/CardMoCo.vue'
import CardPartner from './partials/CardPartner.vue'
import CardValues from './partials/CardValues.vue'
import CardWork from './partials/CardWork.vue'
import HomeOwner from './partials/HomeOwner.vue'
import { store } from '../data/store'
export default {
    name: 'Main',
    components: {
        CardMoCo,
        CardCount,
        CardWork,
        CardValues,
        CardLatest,
        CardPartner,
        HomeOwner
    },
    data() {
        return {
            store
        }
    }
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


        <section class="modernCostruction">
            <div class="title">
                <h2>Specialists In Modern Construction</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error natus,
                    aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
            </div>
            <div class="container-big">
                <div class="row d-flex ">

                    <CardMoCo v-for="(cardMc, index) in store.cardsModernConstr" :key="index" :cardMc="cardMc" />

                </div>
            </div>
        </section>


        <section class="counterResults">
            <div class="counters d-flex ">

                <CardCount v-for="(count, index) in store.cardsCounter" :key="index" :count="count" />

            </div>
        </section>


        <section class="work">
            <div class="title">
                <h2>Explore Recent Work</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error natus,
                    aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
            </div>

            <div class="row d-flex ">

                <CardWork v-for="(cardWork, index) in store.cardsWork" :key="index" :cardWork="cardWork" />

            </div>

            <div class="footerWork">
                <p>VIEW ALL PROJECTS</p>
            </div>

        </section>


        <section class="Values">
            <div class="container-small">
                <div class="title">
                    <h2>Our Core Values</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error
                        natus,
                        aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
                </div>
                <div class="row d-flex ">

                    <CardValues v-for="(item, index) in store.cardsValues" :key="index" :item="item" />

                </div>
            </div>
        </section>


        <section class="feedback">


            <HomeOwner />

            <!-- <div class="homeOwner d-flex ">
                <h2>Our Home Owners Say</h2>
                <div class="testimonial">
                    <img src="home-testimonial-113165296.jpg" alt="">
                </div>
                <p>"No man but feels more of a man in the world if he have but a bit of ground that he can call his own.
                    However small it is on the surface, it is four thousand miles deep; and that is a very handsome
                    property."</p>
                <div class="nameTestimonial">
                    <p>harry smith &bull; new home owner</p>
                </div>
                <div class="testimonials d-flex ">
                    <p class="first"></p>
                    <p class="second"></p>
                </div>
            </div>

            <div class="homeOwner hide d-flex ">
                <h2>Our Home Owners Say</h2>
                <div class="testimonial">
                    <img src="home-testimonial-84268399.jpg" alt="">
                </div>
                <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda pariatur laudantium distinctio labore magnam id molestias harum, nobis iure laboriosam, cum a, perspiciatis ex eaque. Ab repellendus eaque facere?."</p>
                <div class="nameTestimonial">
                    <p>harry smith &bull; new home owner</p>
                </div>
                <div class="testimonials d-flex ">
                    <p class="first"></p>
                    <p class="second"></p>
                </div>
            </div> -->

        </section>


        <section class="latestNews">
            <div class="container-small">
                <div class="title">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error
                        natus,
                        aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
                </div>

                <div class="row d-flex ">

                    <CardLatest v-for="(cardL, index) in store.cardsLatest" :key="index" :cardL="cardL" />

                </div>
                <div class="footerNews">
                    <p>VIEW ALL PROJECTS</p>
                </div>
            </div>


        </section>


        <section class="trustedPartners">
            <div class="container-small">
                <div class="title">
                    <h2>Trusted Partners</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error
                        natus,
                        aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
                </div>
                <div class="partners d-flex ">

                    <CardPartner v-for="(itemP, index) in store.iconPartners" :key="index" :itemP="itemP" />

                </div>
            </div>
        </section>


        <section class="inspiring">
            <div class="container-small d-flex ">
                <div class="title d-flex ">
                    <h2>Building Inspiring Spaces</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur perspiciatis error
                        natus,
                        aperiam veritatis officiis eius quibusdam quo soluta quaerat dolores?</p>
                </div>
                <div class="getFree">
                    <div class="button">
                        <button>get a free quote</button>
                    </div>
                    <p>Only takes a few seconds!</p>
                </div>
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
                padding: 10px 30px;
                background-color: $dimgray-color;
                color: $whiteSmoke-color;
                border: 2px solid $white-color;
                cursor: pointer;
                text-transform: uppercase;
                transition: all 0.3S;
                font-size: 12px;

                &:hover {
                    background-color: $yellow-color;
                    color: $dimgray-color;
                    text-transform: uppercase;
                    border: 2px solid $black-color;
                }
            }
        }
    }

    .modernCostruction {
        text-align: center;
        margin-top: 100px;

        .title {
            margin: 0 300px;

            h2 {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-color: $yellow-color;
                    width: 150px;
                    height: 2px;
                    top: 150%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            p {
                margin-top: 50px;
                line-height: 30px;
            }
        }

        .container-big {
            .row {
                justify-content: space-around;
                margin-top: 80px;
            }
        }
    }

    .counterResults {
        position: relative;
        overflow: hidden;
        height: 600px;
        background-image: url('home-244125289.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &:after,
        &:before {
            content: '';
            background: white;
            position: absolute;
            top: -170px;
            left: -120px;
            width: 120%;
            height: 300px;
            border-radius: 0 0 50% 50%;
        }

        &:after {
            top: auto;
            bottom: -120px;
            border-radius: 50% 50% 0 0;
        }

        .counters {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .work {
        text-align: center;
        margin-bottom: 80px;

        .title {
            margin: 0 300px;

            h2 {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-color: $yellow-color;
                    width: 150px;
                    height: 2px;
                    top: 150%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            p {
                margin-top: 50px;
                line-height: 30px;
            }
        }

        .row {
            justify-content: center;
            margin: 50px 0;
        }

        .footerWork {
            position: relative;
            max-width: 500px;
            margin: 100px auto;
            text-align: center;

            p {
                color: $dimgray-color;

                &::before {
                    content: " ";
                    display: block;
                    height: 2px;
                    width: 300px;
                    position: absolute;
                    top: 50%;
                    left: 84%;
                    background: $whiteSmoke-color;
                }

                &::after {
                    content: " ";
                    height: 2px;
                    width: 300px;
                    background: $whiteSmoke-color;
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 84%;
                }
            }
        }
    }

    .Values {
        text-align: center;
        background-color: $whiteSmoke-color;
        padding: 50px 0;

        .container-small {
            .title {

                h2 {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        background-color: $yellow-color;
                        width: 150px;
                        height: 2px;
                        top: 150%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                p {
                    margin-top: 50px;
                    color: lighten($dimgray-color, $amount: 20%);
                    line-height: 30px;
                }
            }

            .row {
                justify-content: center;
                justify-content: space-around;
            }
        }
    }

    .feedback {
        position: relative;
        overflow: hidden;
        height: 600px;
        background-image: url('home-parallax-144609983.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 20%;
        text-align: center;
        color: $whiteSmoke-color;

        &:after,
        &:before {
            content: '';
            background: $whiteSmoke-color;
            position: absolute;
            top: -200px;
            left: -120px;
            width: 120%;
            height: 300px;
            border-radius: 0 0 50% 50%;
        }

        &:after {
            top: auto;
            bottom: -200px;
            border-radius: 50% 50% 0 0;
        }
    }

    .latestNews {
        text-align: center;
        background-color: $whiteSmoke-color;
        padding-bottom: 80px;

        .container-small {
            .title {


                h2 {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        background-color: $yellow-color;
                        width: 150px;
                        height: 2px;
                        top: 150%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                p {
                    margin-top: 50px;
                    line-height: 30px;
                }
            }


            .row {
                justify-content: center;
            }

            .footerNews {
                position: relative;
                text-align: center;

                p {
                    color: $dimgray-color;

                    &::before {
                        content: " ";
                        display: block;
                        height: 2px;
                        width: 300px;
                        position: absolute;
                        top: 50%;
                        left: 70%;
                        background: $white-color;
                    }

                    &::after {
                        content: " ";
                        height: 2px;
                        width: 300px;
                        background: $white-color;
                        display: block;
                        position: absolute;
                        top: 50%;
                        right: 70%;
                    }
                }
            }
        }
    }

    .trustedPartners {
        text-align: center;
        margin: 80px 0;

        .container-small {
            .title {


                h2 {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        background-color: $yellow-color;
                        width: 150px;
                        height: 2px;
                        top: 150%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                p {
                    margin-top: 50px;
                    line-height: 30px;
                }
            }

            .partners {
                justify-content: center;
                justify-content: space-evenly;
                margin-top: 50px;
            }
        }
    }

    .inspiring {
        height: 400px;
        overflow: hidden;
        position: relative;
        background-image: url('about-call-to-action-57862405.jpg');
        background-repeat: no-repeat;
        background-position: 0 80%;
        background-size: cover;

        .container-small {
            align-items: center;
            justify-content: space-between;
            margin-top: 100px;

            .title {
                flex-direction: column;
                color: $white-color;
                width: 60%;

                h2 {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        background-color: $yellow-color;
                        width: 150px;
                        height: 2px;
                        top: 150%;
                        left: 0;

                    }
                }

                p {
                    margin-top: 50px;
                    line-height: 20px;
                }
            }

            .getFree {
                text-align: center;

                .button {

                    button {
                        padding: 15px 35px;
                        background-color: $yellow-color;
                        color: lighten($dimgray-color, $amount: 20%);
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

                p {
                    color: $white-color;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
