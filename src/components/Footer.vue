<script>
import Tweets from './partials/Tweets.vue';
export default {
    name: 'Footer',
    components: {
        Tweets
    }
}
</script>


<template>
    <footer>
        <div class="footerTop">
            <div class="container-big">
                <div class="row d-flex ">

                    <!-- LEARN MORE -->
                    <div class="col learnMore">
                        <div class="logo">
                            <img src="../assets/images/footer-logo.png" alt="logo">
                        </div>
                        <div class="text">
                            <p>We are specialists in the construction of unique and exclusive properties. Our work inspires.
                                We pride ourselves on delivering outstanding quality and design for leading clients across
                                the world.</p>
                        </div>
                        <div class="button">
                            <button>learn more</button>
                        </div>
                    </div>

                    <!-- LATEST TWEETS -->
                    <div class="col latestTweets">

                        <div class="titleCol">
                            <h3>latest tweets</h3>
                        </div>

                        <div class="boxTweets d-flex">


                            <!-- SINGOLO TWEET -->
                            <tweets />
                            <!-- /SINGOLO TWEET -->


                            <!-- SINGOLO TWEET -->
                            <tweets />
                            <!-- /SINGOLO TWEET -->


                            <!-- SINGOLO TWEET -->
                            <tweets />
                            <!-- /SINGOLO TWEET -->
\

                        </div>

                    </div>

                    <!-- CONTACT US -->
                    <div class="col contactUs">

                        <div class="titleCol">
                            <h3>contact us today</h3>
                        </div>

                        <div class="menuContactUs">
                            <ul>
                                <li class="d-flex">
                                    <i class="fa-solid fa-globe"></i>
                                    <p>Corporate Location
                                        1600 Amphitheatre Parkway
                                        London WC1 1BA</p>
                                </li>
                                <li class="d-flex">
                                    <i class="fa-solid fa-house-chimney"></i>
                                    <p>Residential Location
                                        9521 Broadsberry Avenue
                                        Paddington RC7 9ZA</p>
                                </li>
                                <li class="d-flex">
                                    <i class="fa-solid fa-phone-flip"></i>
                                    <p>1.800.458.556 / 1.800.532.2112</p>
                                </li>
                                <li class="d-flex">
                                    <i class="fa-regular fa-envelope"></i>
                                    <p>info@your-domain.com</p>
                                </li>
                                <li class="d-flex">
                                    <i class="fa-regular fa-clock"></i>
                                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                                </li>
                                <li class="d-flex">
                                    <i class="fa-regular fa-clock"></i>
                                    <p>Saturday – Sunday: 9:00 AM – 12:00 PM</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- FIND US -->
                    <div class="col findUs">

                        <div class="titleCol">
                            <h3>find us</h3>
                        </div>

                        <div class="map">
                            <img src="../assets/images/staticmap.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBottom">
            <div class="container-big d-flex ">
                <div class="copyright">
                    <p>&copy; COPYRIGHT 2012 - 2023 | AVADA THEME BY <a href="#">ANOTHERDEBUG</a> | ALL RIGHTS RESERVED |
                        POWERED BY
                        <a href="#">VITE</a>
                    </p>
                </div>
                <div class="social">
                    <ul class="d-flex">
                        <li>
                            <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Twitter"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

footer {
    background-color: $black-color;
    padding-top: 50px;
    border-top: 8px solid lighten($dimgray-color, $amount: 10%);
    ;

    .footerTop {
        padding-bottom: 50px;

        h3 {
            text-transform: uppercase;
        }

        .row {
            justify-content: space-between;

            .col {
                width: 100%;
            }

            .learnMore {
                padding: 10px;

                .text {
                    margin-top: 20px;

                    p {
                        color: lighten($dimgray-color, $amount: 20%);
                        line-height: 25px;
                    }
                }

                .button {
                    margin-top: 20px;

                    button {
                        padding: 10px 20px;
                        background-color: $yellow-color;
                        color: $dimgray-color;
                        border: none;
                        cursor: pointer;
                        text-transform: uppercase;
                        transition: all 0.3S;

                        &:hover {
                            background-color: $dimgray-color;
                            color: $white-color;
                            text-transform: uppercase;
                        }
                    }
                }
            }

            .latestTweets {
                padding-left: 20px;

                .boxTweets {
                    height: 300px;
                    overflow-y: auto;
                    flex-direction: column;

                    &::-webkit-scrollbar {
                        width: 0 !important
                    }

                    &:hover {
                        background-color: #000;
                    }

                    padding-top: 30px;

                }

            }

            .contactUs {
                padding-left: 30px;

                .menuContactUs {
                    padding-top: 30px;
                    padding-right: 30px;

                    ul {
                        list-style: none;

                        li {
                            color: lighten($dimgray-color, $amount: 20%);
                            margin-bottom: 10px;

                            i {
                                padding-right: 15px;
                            }
                        }
                    }
                }
            }

            .findUs {
                padding-left: 30px;

                .map {
                    padding-top: 30px;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .footerBottom {
        align-items: center;
        justify-content: space-between;
        height: 80px;
        background-color: black;
        color: $white-color;

        .container-big {
            justify-content: space-between;
            line-height: 80px;

            .copyright {
                color: lighten($black-color, $amount: 20%);

                a {
                    color: lighten($dimgray-color, $amount: 20%);
                    text-decoration: none;

                    &:hover {
                        color: $yellow-color;
                        transition: 0.5s;
                    }
                }
            }

            .social {
                ul {
                    li {
                        list-style: none;

                        a {
                            position: relative;
                            margin-left: 20px;
                            color: lighten($dimgray-color, $amount: 20%);

                            &:hover {
                                color: lighten($black-color, $amount: 10%);
                                transition: 0.5s;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>