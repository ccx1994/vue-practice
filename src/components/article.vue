<template>
    <div class="article">
        <input v-model="title">
        <input v-model="contend">
        <input v-model="allWord">

        <div class="back" @click="goBack">返回</div>
        
        <send></send>
    </div>
</template>

<script>
import Vue from 'vue'

//let event = new Vue();
console.log(this);



let send = {
    template: '<div class="box2" @click="sendTitle">点击开始通信</div>',
    methods: {
        sendTitle() {
            var newTitle = {a:"我的新名字很厉害",b:"其实这个名字才是真的厉害"};
            var newContend = "我心情很不好";
            this.global.$emit("change-title", newTitle);
            this.global.$emit("change-contend", newContend);
            this.$router.push({path:'/home'})
        }
    }
}

export default {
    name: 'article',
    components: {
        'send': send
    },
    data() {
        return {
            title: "这是示例标题",
            contend: "这里没有什么实质性内容"
        }
    },
    methods: {
        goBack() {
            
            this.$emit('change-title', this.title);
            //window.history.back();
            
        }
    },
    computed: {
        allWord: {
            get: function() {
                return this.title + "." + this.contend
            },
            set: function(newValue) {
                this.title = newValue.split('.')[0];
                this.contend = newValue.split('.')[1]
            }
        }
    }
}
</script>

<style>
input {
    margin-top: 10rem;
    font-size: 3rem;
    color: black;
}


.back {
    width: 50%;
    height: 4rem;
    background-color: red;
    line-height: 4rem;
    font-size: 3rem;
    margin: auto;
}

.box1,.box2{
    margin-top: 3rem;
    font-size: 3rem;
    color: black;
}
</style>