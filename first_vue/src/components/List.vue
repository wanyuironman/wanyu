<template>
  <div class="hello">
     33333
    
    
  </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
          num++;
            console.log(num ,'beforeRouteEnter' ,'List');
        next(vm => {
            num++;
            console.log(num ,'beforeRouteEnter --next' ,'List');
            // 通过 `vm` 访问组件实例
        })
    }   ,
  name: 'About',
  beforeCreate(){
      num++;
      console.log(num, 'beforeCreated','List');
  },
  created(){
      num++;
      console.log(num, 'created','List');
      this.$nextTick(()=>{
           num++;
      console.log(num, '$nextTick','List');
      });
  },
  beforeMount(){
      num++;
      console.log(num, 'beforeMount','List');
  },
  mounted(){
      num++;
      console.log(num, 'mounted','List');
  },
  beforeRouteLeave (to, from, next) {
     num++;
      console.log(num, 'beforeRouteLeave','List');
     next();
  },
  beforeRouteUpdate(to,from,next){
      num++;
      console.log(num, 'beforeRouteUpdate','List');


  },
  beforeDestroy(){
       num++;
      console.log(num, 'beforeDestroy','List');
  },
  destroyed() {
       num++;
      console.log(num, 'destroyed','List');
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
