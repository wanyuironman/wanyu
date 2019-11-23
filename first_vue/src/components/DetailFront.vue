<template>
  <div class="hello">
     33333
    
    
  </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
          num++;
            console.log(num ,'beforeRouteEnter' ,'DetailFront');
        next(vm => {
            num++;
            console.log(num ,'beforeRouteEnter --next' ,'DetailFront');
            // 通过 `vm` 访问组件实例
        })
    }   ,
  name: 'About',
  beforeCreate(){
      num++;
      console.log(num, 'beforeCreated','DetailFront的');
  },
  created(){
      num++;
      
      console.log(num, 'created','Detai的lFront');
      this.$nextTick(()=>{
           num++;
      console.log(num, '$nextTick','DetailFront');
      });
  },
  beforeMount(){
      num++;
      console.log(num, 'beforeMount','DetailFront');
  },
  mounted(){
      num++;
      console.log(num, 'mounted','DetailFront');
  },
  beforeRouteLeave (to, from, next) {
     num++;
      console.log(num, 'beforeRouteLeave','DetailFront');
     next();
  },
  beforeRouteUpdate(to,from,next){
      num++;
      console.log(num, 'beforeRouteUpdate','DetailFront');


  },
  beforeDestroy(){
       num++;
      console.log(num, 'beforeDestroy','DetailFront');
  },
  destroyed() {
       num++;
      console.log(num, 'destroyed','DetailFront');
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
