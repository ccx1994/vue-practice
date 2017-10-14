<template>
  <div class="home">
    <my-swiper ref="swiper" swiperid="swipe">
      <div v-for="banner in banners" class="swiper-slide" slot="banner">
        <img :src="banner.image">
      </div>
    </my-swiper>
    <div class="article-list" v-for="article in articleList">
      <div class="date">{{article.date.substring(0,4)+"/"+article.date.substring(4,6)+"/"+article.date.substring(6,8)}}</div>
      <div class="article" v-for="detail in article.stories" @click="jump">
        <img>
        <span>{{detail.title}}</span>
        <span @change-title = "changeTitle">{{title}}</span>
      </div>
    </div>
    <input v-model="article.newTitle">
    <receive v-bind="article"></receive>
  </div>
  
</template>

<script>
import api from '../api/index';

let receive = {
    template: '<div class="box1">{{newTitle}}{{newContend}}</div>',
    props:{
      newTitle:{
        type:String,
        default:"这才是新名字"
      },
      newContend:{
        type:String,
        default:"这才是新名字"
      }
    },
    data(){
        return {
            //newTitle:'',
            //newContend:''
        }
    },
    mounted: function() {
        let that = this;
        
        this.global.$on("change-title", function(name) {
            console.log(1111111111);
            console.log(name);
            that.newTitle = name.b;
        })

        this.global.$on("change-contend", function(contend) {
            
            that.newContend = contend;
        })
    }
}
export default {
  name: 'home',
  components:{
    receive
  },
  mounted: function() {
    this.getBanners();
    let swiper = this.$refs.swiper;
    console.log(swiper);
    if (swiper.mySwiper) {
      this.swiper = swiper.mySwiper; 

    };
  },
  // activated: function() {
  // 	if (this.swiper) {
  // 		this.swiper.startAutoplay();
  // 	}
  // },
  data() {
    return {
      banners: [],
      swiper: '',
      articleList:[],
      title:'',
      article:{
        newTitle:"这个名字很精彩",
        newContend:"这个内容更精彩"
      }
    }
  },
  methods: {
    getBanners() {
      let bannerList = this;
      api.requestBanner().then(function(data) {
        data.data.top_stories[0].image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506502508884&di=d3ac7d6d905c832bd3019168129a161f&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa08b87d6277f9e2f8a58a9c81630e924b999f385.jpg';
        data.data.top_stories[1].image = 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=87fee6a1fadeb48fe469a6dcc01e3aef/c9fcc3cec3fdfc03e8419f78dd3f8794a4c22630.jpg';
        data.data.top_stories[2].image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507097442&di=0fdb989a79f716b6a901966aabb02eb6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1011%2F112G6002358%2F16112F02358-1.jpg';
        data.data.top_stories[3].image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506502750047&di=e5282b81872e31e4087cd89ba8487041&imgtype=0&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_big%2F201503%2Fd8905515d1c046aeba51025f0ea842f0.jpg';
        data.data.top_stories[4].image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506502811691&di=4630e47bd2a01e47ad4e0bb9f65edbe6&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F061414100Z3%2F140614100Z3-4.jpg';
        bannerList.banners = data.data.top_stories;

        bannerList.articleList.push(data.data);
      }).catch(function(data) {

      })
    },
    jump() {
      this.$router.push({path:'/article'})
    },
    changeTitle(name){
      this.title = name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .home{
    overflow: auto;
    
    .article-list{
      position: relative;
      padding: 0 2.5rem;
      padding-top: 2rem;
      .date{
        width:50%;
        background-color: #ffd300;
        height: 2.5rem;
        font-size: 2rem;
        line-height: 2.5rem;
        border-radius: 5rem;
        position: absolute;
        top:-1.25rem;
        left: 5%;
        z-index: 22;
        box-shadow: 0 3px 10px 0 rgba(91,115,146,.15);
      }
    }
    .article{
      height: 8.125rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 3px 10px 0 rgba(91,115,146,.15);
      color:#5b7492;
    }
  }
</style>
