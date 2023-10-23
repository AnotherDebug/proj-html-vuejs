<script>
export default {
    name: 'CardWork',
    props: {
        cardWork: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="container">
            <div class="card">
                <div class="front">
                    <img :src="cardWork.image" alt="">
                </div>
                <div class="back">
                    <div class="menu d-flex ">
                        <div class="link">
                            <a :href="cardWork.href"><i :class="cardWork.firstIcon"></i></a>
                        </div>
                        <div class="search">
                            <a :href="cardWork.href"><i :class="cardWork.secondIcon"></i></a>
                        </div>
                    </div>
                    <div class="title">
                        <h4>{{ cardWork.title }}</h4>
                        <p>{{ cardWork.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.col {
    padding: 10px;

    .container {
        height: 300px;
        width: 300px;
        color: white;
        perspective: 800px;

        .card {

            height: 100%;
            background: black;
            position: relative;
            transition: transform 1500ms;
            transform-style: preserve-3d;

            .front,
            .back {
                height: 100%;
                width: 100%;
                position: absolute;
                backface-visibility: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

            }

            .front {
                img {
                    width: 100%;
                }
            }

            .back {
                background-color: $yellow-color;
                transform: rotateX(180deg) rotateZ(-180deg);

                .menu {

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
                            color: $black-color;
                        }
                    }
                }

                .title {
                    width: 100%;

                    h3 {
                        color: $white-color;
                    }

                    p {
                        margin-top: 10px;
                    }
                }
            }
        }

        &:hover>.card {
            transform: rotateX(180deg) rotateZ(-180deg);
        }
    }
}
</style>