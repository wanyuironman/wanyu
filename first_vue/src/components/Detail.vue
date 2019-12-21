<template>
  <div class="hello">
     33333 master1
    
    
  </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
          num++;
            console.log(num ,'beforeRouteEnter的' ,'detail');
        next(vm => {
            num++;
            console.log(num ,'beforeRouteEnter --next' ,'detail');
            // 通过 `vm` 访问组件实例
        })
    }   ,
  name: 'About',
  beforeCreate(){
      num++;
      console.log(num, 'beforeCreated','detail');
  },
  created(){
      num++;
      console.log(num, 'created','detail');
      this.$nextTick(()=>{
           num++;
      console.log(num, '$nextTick','detail');
      });
  },
  beforeMount(){
      num++;
      console.log(num, 'beforeMount','detail');
  },
  mounted(){
      num++;
      console.log(num, 'mounted','detail');
  },
  beforeRouteLeave (to, from, next) {
     num++;
      console.log(num, 'beforeRouteLeave','detail');
     next();
  },
  beforeRouteUpdate(to,from,next){
      num++;
      console.log(num, 'beforeRouteUpdate','detail');


  },
  beforeDestroy(){
       num++;
      console.log(num, 'beforeDestroy','detail');
  },
  destroyed() {
       num++;
      console.log(num, 'destroyed','detail');
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
