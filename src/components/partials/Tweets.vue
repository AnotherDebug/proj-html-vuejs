<script>
export default {
    name: 'Tweets'
}
</script>


<template>
    <!-- SINGOLO TWEET -->
    <div class="boxTweet d-flex ">
        <div class="Logo">
            <img src="3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
        </div>
        <div class="infoTweet">
            <div class="tweet ">
                <div class="title d-flex ">
                    <h5>ThemeFusion</h5>
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <h5>@Theme_Fusion</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit suscipit nam
                    mollitia
                    ut
                    consequuntur. Eaque itaque officiis et ratione, porro sapiente quidem atque
                    ipsam
                    mollitia
                    illo, magni, iste optio dolore.</p>
                <div class="img">
                    <img src="En2TRxLW4AEiWUN.jpeg" alt="img">
                </div>
                <div class="tweetMenu d-flex ">
                    <div class="likeShare d-flex">
                        <div class="like">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="share">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                    </div>
                    <div class="time">
                        <p>22h</p>
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