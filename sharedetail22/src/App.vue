<template>
  <div id="app">
  
    <!-- <section></section> -->
    <!-- <section>
        <star :size="36"></star>
    </section> -->
    <section>
        <!-- <router-link to="/index/43">11</router-link> -->
         <!-- <router-link to="/index/76">22</router-link> -->
    </section>
    <!-- <goodsdetail></goodsdetail> -->
    <!-- <hello></hello> -->
    <!-- <footer2></footer2> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import footer2 from './components/footer2'
import goodsdetail from './components/goodsdetail'

export default {
  name: 'app',
  components: {
    // Hello,
    // star,
    footer2,
    goodsdetail
  }
}
</script>

<style>
ul,li{list-style:none;}
ul,menu,dir{
  -webkit-padding-start:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  padding:0 0px;

}
/*section{
  height:100px;
}*/
</style>
