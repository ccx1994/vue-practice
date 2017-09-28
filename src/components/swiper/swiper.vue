<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot name="banner"></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import './swiper.js'

    export default {
        name: 'my-swiper',
        data(){
            return{
                mySwiper:''
            }
        },
        mounted: function(){
            var that = this;
            that.mySwiper = new Swiper('.swiper-container',{
                autoplay : 5000,
                //speed:1000,
                autoplayDisableOnInteraction : false,
                loop : true,
                pagination : '.swiper-pagination'
            })
        },
    }
</script>
<style lang="scss">
    @import './swiper.css';
    .swiper-container{
        height:25rem;

        img{
            width:100%;
            height:100%;
        }
    }
</style>