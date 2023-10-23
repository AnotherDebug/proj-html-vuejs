<script>
export default {
    name: 'CardLatest'
}
</script>


<template>
    <div class="col">
        <div class="card-container">
            <div class="card">
                <div class="front-content">
                    <img src="blog-post-134132600.jpg" alt="">
                </div>
                <div class="content">
                    <div class="retro">
                        <div class="menu d-flex ">
                            <div class="link">
                                <a href="#"><i class="fa-solid fa-link"></i></a>
                            </div>
                            <div class="search">
                                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                        </div>
                        <div class="title">
                            <h4>Florida Health Facility</h4>
                            <p>Commercial</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="bodyCard">
            <div class="titleBody">
                <h3>Redeveloping Florida’s Remote Southern Coast</h3>
                <p>December 7th, 2015</p>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, vero tempore
                        minus officiis facere repellat amet a fugit tenetur id quasi, quidem quos
                        voluptates esse? Quis natus quo officiis dolore.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;

.col {
                    height: 100%;
                    color: $dimgray-color;
                    margin: 50px 10px;

                    .card-container {
                        height: 100%;
                        position: relative;
                        overflow: hidden;

                        .card {
                            width: 100%;
                            height: 100%;

                            .front-content {
                                width: 300px;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: column;
                                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                                background-color: $whiteSmoke-color;

                                img {
                                    width: 100%;
                                }
                            }

                            .content {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 300px;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                text-align: center;
                                gap: 10px;
                                background-color: $yellow-color;
                                color: lighten($dimgray-color, $amount: 20%);
                                padding: 20px;
                                line-height: 1.5;
                                transform: translateY(100%);
                                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

                                .retro {
                                    width: 100%;
                                    height: 100%;

                                    .menu {
                                        justify-content: center;
                                        align-items: center;

                                        .link,
                                        .search {
                                            width: 50px;
                                            height: 50px;
                                            background-color: $whiteSmoke-color;
                                            line-height: 50px;
                                            border-radius: 50%;
                                            margin: 10px;
                                            cursor: pointer;

                                            &:hover {
                                                background-color: $white-color;
                                            }

                                            a {
                                                text-decoration: none;
                                                color: $yellow-color;
                                            }
                                        }
                                    }

                                    .title {
                                        width: 100%;
                                        margin: 0;
                                        color: $white-color;

                                        p {
                                            margin-top: 10px;
                                        }
                                    }
                                }
                            }

                            .front-content p {
                                line-height: 25px;
                                color: lighten($dimgray-color, $amount: 20%);
                                text-align: center;
                                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
                            }

                            &:hover .content {
                                transform: translateY(0);
                            }

                            &:hover .front-content {
                                transform: translateY(-30%);
                            }

                            &:hover .front-content p {
                                opacity: 0;
                            }

                            .content .heading {
                                text-transform: uppercase;
                            }
                        }
                    }

                    .bodyCard {
                        text-align: start;
                        background-color: $white-color;
                        width: 300px;

                        .titleBody {
                            color: lighten($dimgray-color, $amount: 20%);
                            padding: 20px;

                            h3 {
                                color: lighten($dimgray-color, $amount: 20%);
                                font-weight: 400;
                                margin: 20px 0;
                            }

                            p {
                                border-bottom: 1px solid lightgray;
                                padding-bottom: 20px;
                            }

                            .description {
                                p {
                                    line-height: 30px;
                                    margin-top: 20px;
                                    border: 0;
                                }
                            }
                        }
                    }
                }
</style>