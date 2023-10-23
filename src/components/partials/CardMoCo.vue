<script>
export default {
    name: 'CardMoCo',
    props: {
        cardMc: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="card-container">
            <div class="card">
                <div class="front-content">
                    <i :class="cardMc.icon"></i>
                    <h1>{{ cardMc.title }}</h1>
                    <p>{{ cardMc.text }}</p>
                </div>
                <div class="content">
                    <h3 class="heading">{{ cardMc.backTitle }}</h3>
                    <p>{{ cardMc.backText }}</p>
                    <div class="button">
                        <button>{{ cardMc.buttonText }}</button>
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
    color: $dimgray-color;

    .card-container {
        height: 100%;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        .card {
            width: 100%;
            height: 100%;
            border-radius: inherit;

            .front-content {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                background-color: $whiteSmoke-color;
                padding: 20px;

                i {
                    width: 70px;
                    height: 70px;
                    border: 1px solid lighten($dimgray-color, $amount: 20%);
                    border-radius: 50%;
                    line-height: 70px;
                    margin-bottom: 20px;
                    color: lighten($dimgray-color, $amount: 20%);
                }

                h1 {
                    font-weight: 500;
                    margin-bottom: 10px;
                }
            }

            .content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
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
                border-radius: 5px;
                transform: translateY(100%);
                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

                .button {
                    button {
                        padding: 10px 20px;
                        background-color: lighten($yellow-color, $amount: 15%);
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

                h3 {
                    color: $dimgray-color;
                }

                p {
                    line-height: 30px;
                    margin-bottom: 10px;
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
}
</style>