<script>
export default {
    name: 'Footer'
}
</script>


<template>
    <footer>
        <div class="footerTop">
            <div class="container-big">
                <div class="row d-flex ">
                    <div class="col learnMore debug">
                        <div class="logo">
                            <img src="" alt="logo">
                        </div>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos nemo, unde consequuntur
                                aspernatur reprehenderit hic laboriosam nulla quia magni obcaecati molestias itaque sed
                                tempora voluptatum quam deserunt laudantium quis?</p>
                        </div>
                        <div class="button">
                            <button>learn more</button>
                        </div>
                    </div>
                    <div class="col latestTweets d-flex  debug">
                        <div class="footerLogo debug">logo</div>
                        <div class="tweets">
                            <!-- Singolo tweet "elemento dinamico" -->
                            <div class="tweet debug">
                                <div class="title">
                                    <h5>ThemeFusion</h5>
                                </div>
                                <h5>@Theme_Fusion</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit suscipit nam mollitia
                                    ut
                                    consequuntur. Eaque itaque officiis et ratione, porro sapiente quidem atque ipsam
                                    mollitia
                                    illo, magni, iste optio dolore.</p>
                                <div class="img">
                                    <img src="" alt="img">
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div class="col contactUs debug">d</div>
                    <div class="col findUs debug">f</div>
                </div>
            </div>
        </div>
        <div class="footerBottom"></div>
    </footer>
</template>


<style lang="scss" scoped>
footer {
    .footerTop {
        .row {
            justify-content: space-between;

            .col {
                width: 100%;
                // da eliminare
                height: 200px;
            }

            .latestTweets {          
                .tweets {
                    overflow-y: auto;
                    &::-webkit-scrollbar{ width: 0 !important}
                }
            }
        }
    }
}</style>