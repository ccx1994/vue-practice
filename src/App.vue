<template>
  <div id="app">
    <header>
      <span class='iconfont icon-ic_menu' @click="openAside"></span>
    </header>
    <aside class="aside" :class="{open:isClicked,delay:delayFlag}"   @click="openAside">
      <ul>
        <li @click="chooseTheme(1)" :class="themeNum == 1?'chooseTheme':''">
          <span>首页</span>
          <i class='iconfont' :class="themeNum == 1?'icon-ic_star_black':'icon-ic_star'"></i>
        </li>
        <li v-for="(theme,index) in themes" @click="chooseTheme(index + 2)" :class="themeNum == (index + 2)?'chooseTheme':''">
          <span>{{theme.name}}</span>
          <i class='iconfont' :class="themeNum == (index + 2)?'icon-ic_star_black':'icon-ic_star'"></i>
        </li>
        <li>
          <span>项目地址</span>
          <i class='iconfont icon-github'></i>
        </li>
      </ul>
      <div class='cover'></div>
    </aside>
    <keep-alive>
      <router-view class="app-view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import api from './api/index';
export default {
    name: 'app',
    mounted: function(){
      let vm = this;
      api.getThemes().then(function(data){
        vm.themes = data.data.others;
        console.log(vm.themes);
        this.chooseTheme(1);
      }).catch(function(err){
        //console.log(err);
      });
    },
    data() {
      return{
        isClicked : false,
        themes:[],
        themeNum:1,
        delayFlag: false
      }
    },
    methods: {
      openAside(){
        if(this.isClicked){
          this.isClicked = false;
          setTimeout(function(){
            this.delayFlag = false;
          },300)
        }else{
          this.isClicked = true;
          this.delayFlag = true;
        }
      },
      chooseTheme(index){
        this.themeNum = index;
      }
    }
}
</script>

<style lang="scss">
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  

  header{
	  width: 100%;
	  height: 4.8rem;
	  z-index: 9;
	  padding-left: 5%;
	  position: fixed;
	  background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.51) 95%);
	  text-align:left;
	  line-height:4.8rem;

	  .iconfont{
		  font-size:2.5rem;
	  }
  }

  .aside{
	  height:100%;
	  width:100%;
	  position:absolute;
	  left:0;
	  top:0;
    z-index:11;
    visibility: hidden;
    
	  
	  .cover{
	  	background-color:rgba(172,185,201,.4);
	  	display:none;
	  	height:100%;
	  	width:100%;
	  	position:absolute;
	  	left:0;
	  	top:0;
	  	z-index:-1;
	  }

	  ul{
	  	height:100%;
	  	width:60%;
	  	list-style:none;
	  	margin:0;
	  	padding:4rem 1.5rem 2rem;
	  	overflow:auto;
	  	background-color:rgba(91,116,146,.75);
      transform:translate(-100%,0);
  	  transition:transform 0.3s ease;
	  }

	  ul::-webkit-scrollbar {
	    display: none;
	  }

	  li{
  		height:2rem;
  		font-size:1.5rem;
 		  margin-top:1.8rem;
  		text-align:left;

  		.iconfont{
		    float:right;
		  }
	  }

	  .chooseTheme{
	    color:#ffd300;
	  }


  }

  .open.aside{
  	ul{
  	  transform:translate(0,0);
      transition:transform 0.3s ease;
    
  	}
    
    .cover{
      display:block;
    }
  }


  .delay.aside{
    visibility: visible;
  }

  .app-view{
    position: absolute;
    width: 100%;
  }

  
}




</style>
