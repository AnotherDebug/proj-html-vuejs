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
                            <div class="place">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.995910386646!2d-0.21818932343597527!3d51.51323475292021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fe2d0cda3a1%3A0x9020e6e0f234ea4a!2sNotting%20Hill%2C%20London%2C%20UK!5e0!3m2!1sen!2sit!4v1698063993135!5m2!1sen!2sit" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
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