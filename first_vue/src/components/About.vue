<template>
  <div class="hello">
      <Alert>An info prompt</Alert>
         <Detail></Detail>
      <DetailFront></DetailFront>
    <Button type="primary" @click="test">点击测试</Button>
    <p> <router-link to='/list'>toList</router-link>速度</p>
    <p> <router-link :to='{path:"about",query:{aaa:"323"}}'>toUpdate</router-link></p>
     
    
  </div>
</template>

<script>
import Detail from '@/components/Detail';
import DetailFront from '@/components/DetailFront';
export default {
    components:{
        Detail,
        DetailFront,
    },
    beforeRouteEnter (to, from, next) {
          num++;
            console.log(num ,'beforeRouteEnter');
        next(vm => {
            num++;
            console.log(num ,'beforeRouteEnter --next');
            // 通过 `vm` 访问组件实例
        })
    }   ,
  name: 'About',
  beforeCreate(){
      num++;
      console.log(num, 'beforeCreated','about');
  },
  created(){
      num++;
      console.log(num, 'created','about');
      this.$nextTick(()=>{
           num++;
      console.log(num, '$nextTick','about');
      });
  },
  beforeMount(){
      num++;
      console.log(num, 'beforeMount','about');
  },
  mounted(){
      num++;
      console.log(num, 'mounted','about');
  },
  beforeRouteLeave (to, from, next) {
     num++;
      console.log(num, 'beforeRouteLeave' ,'about');
     next();
  },
  beforeRouteUpdate(to,from,next){
      num++;
      console.log(num, 'beforeRouteUpdate' ,'about');


  },
  beforeDestroy(){
       num++;
      console.log(num, 'beforeDestroy' ,'about');
  },
  destroyed() {
       num++;
      console.log(num, 'destroyed' ,'about');
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test() {
    
	
	/* 	const p1 = new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error('fail')), 3000)
		})

		const p2 = new Promise(function (resolve, reject) {
		setTimeout(() => resolve(p1), 1000)
		})

		p2
		.then(result => console.log(result))
		.catch(error => console.log(error)) */
		
				
		
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
