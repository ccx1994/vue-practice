<template>
  <div>{{title}}</div>
</template>
<script>
export default {
  name:'receive',
  data(){
      return {
          title:''
      }
  },
  mounted(){
      this.$on("change-title",function(newTitle) {
          this.title = newTitle;
      })
  },
  methods:{
      
  }
}
</script>
