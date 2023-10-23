<script>
export default {
    name: 'Tweets',
    props: {
        tweet: Object
    }
}
</script>


<template>
    <!-- SINGOLO TWEET -->
    <div class="boxTweet d-flex ">
        <div class="Logo">
            <img :src="tweet.logo" alt="">
        </div>
        <div class="infoTweet">
            <div class="tweet ">
                <div class="title d-flex ">
                    <h5>{{ tweet.title }}</h5>
                    <i :class="tweet.icon"></i>
                </div>
                <h5>{{ tweet.ashTitle }}</h5>
                <p>{{ tweet.bodyText }}</p>
                <div class="img">
                    <img :src="tweet.image" alt="img">
                </div>
                <div class="tweetMenu d-flex ">
                    <div class="likeShare d-flex">
                        <div class="like">
                            <i :class="tweet.like"></i>
                        </div>
                        <div class="share">
                            <i :class="tweet.share"></i>
                        </div>
                    </div>
                    <div class="time">
                        <p>{{ tweet.bodyDate }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /SINGOLO TWEET -->
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
.boxTweet {
    margin-bottom: 15px;

    .Logo {
        margin-left: 10px;

        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }

    .infoTweet {

        .tweet {
            padding: 10px;
            color: lighten($dimgray-color, $amount: 20%);

            p {
                color: $white-color;
            }

            .img {
                img {
                    width: 100%;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }
            }

            .title {
                justify-content: space-between;
                color: $white-color;

                i {
                    color: lighten($dimgray-color, $amount: 20%);
                    cursor: pointer;

                    &:hover {
                        color: #1d9bf0;
                        transition: 0.5s;
                    }
                }
            }

            .tweetMenu {
                justify-content: space-between;

                .time {
                    p {
                        color: lighten($dimgray-color, $amount: 20%);
                    }
                }

                .likeShare {
                    .like {
                        margin-right: 20px;
                    }

                    i {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>