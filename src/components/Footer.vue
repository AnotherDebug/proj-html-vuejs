<script>
import ContactsFooter from './partials/ContactsFooter.vue';
import SocialIcons from './partials/SocialIcons.vue';
import Tweets from './partials/Tweets.vue';
import { store } from '../data/store'; 
export default {
    name: 'Footer',
    components: {
        Tweets,
        ContactsFooter,
        SocialIcons
    },
    data() {
        return {
            store
        }
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
                            <tweets v-for="(tweet, index) in store.tweetsList"
                            :key="index"
                            :tweet="tweet"/>
                            <!-- /SINGOLO TWEET -->

                        </div>

                    </div>

                    <!-- CONTACT US -->
                    <div class="col contactUs">

                        <div class="titleCol">
                            <h3>contact us today</h3>
                        </div>

                        <div class="menuContactUs">
                            <ul>
                                <ContactsFooter v-for="(contact, index) in store.contactsMenu"
                                :key="index"
                                :contact="contact"/>

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

                        <SocialIcons v-for="(icon, index) in store.socialIcons"
                        :key="index"
                        :icon="icon"/>
    
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
                        background-color: $indigo-color;
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
        }
    }
}
</style>