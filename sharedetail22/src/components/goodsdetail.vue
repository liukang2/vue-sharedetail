<template>
	<div class="mybody">
	 <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleBottomChange">
    <!-- <ul>
      <li v-for="n in 100">{{ n }}</li>
    </ul> -->
    <ul>
    	<li class="captionimg">
    		<img :src=item.cover alt="">
    	</li>
    	<li class="captiontxt">
    		<h3>
    			{{item.name}}

    		</h3>
    	
    		<div>
    			<star :size="36" :score="item.comment.score"></star>
    			<!-- <star2></star2> -->
    		</div>
    		<p>
				
    			{{item.comment.score}} 很好 来自{{item.comment.count}}条评论
    		</p>
    		<p v-show="price" style="color:red;">￥{{item.price}}/天</p>
    		<span v-show="price2" style="color:red;">￥{{item.hourly_price}}/小时</span>
    		<hr>
    		<p>
    			<label>详细地址:</label>
    			<span id="addre" v-show = "adr">{{item.region.address}}</span>
    			<i v-show="adr2">{{item.region.country_name}} - {{item.region.city_name}}</i>
    		</p>
    			
    		
    		<p>接受预定：{{item.reserve_start_date}} - {{item.reserve_end_date}}</p>
    		<p v-show="resinfo">游玩时间：{{item.reserve_start_time}}-{{item.reserve_end_time}},{{item.cost_hours}}小时</p>
    		<p v-show="resinfo2 && typeText && typeText2 && typeText3 && typeText4">附赠服务：
    			<i v-show = "typeText3.f">酒店、</i>
    			<i v-show = "typeText2.e">用车、</i>
    			<i v-show = "typeText4.g">翻译、</i>
				<span v-show = "typeText.a">早餐、</span>
				<span v-show = "typeText.b">午餐、</span>
				<span v-show = "typeText.c">晚餐、</span>
				<span v-show = "typeText.d">下午茶</span>
    		</p>
    		<p v-show="resinfo4">用餐时间：{{item.reserve_start_time}} - {{item.reserve_end_time}}，自主选择开始时间</p>
    		<p v-show="resinfo5">服务时间：{{item.reserve_start_time}} -  {{item.reserve_end_time}}</p>
    	</li>
    	<li class="mark">
    			<ul>
    				<li>*需要提前{{item.reserve_in_advance}}天预订</li>
    				<li v-show="resinfo3">房间可容纳2人</li>
    				<li v-show="resinfo6">车辆可容纳4人</li>
    			</ul>
    		<!-- <p></p>
    		<span></sapn> -->
    	</li>
    	<li class="intro">
    		<div class="border"></div>
    		<h3>详细介绍</h3>
    		<section>
    			<!-- <p>{{item.description}}</p> -->
    			<p v-html="item.description"></p>
    			
    		</section>
    		
    	</li>
    	<li>
    		<goodstab :myitem="item"></goodstab>
    	</li>
    </ul>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">↓</span>
      <span v-show="bottomStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
  </div>
</template>

<script>
	import axios from 'axios'
	import goodstab from './goodstab'
	import star from './star'

  export default {
    data() {
      return {
        bottomStatus: '',
        // loadBottom:'',
        allLoaded:'',
        name:'',
        item:{
        	region:{

        	},
        	comment:{

        	}
        },
        resinfo:false,
        resinfo2:false,
        resinfo3:false,
        resinfo4:false,
        resinfo5:false,
        resinfo6:false,
        price:true,
        price2:false,
        adr:true,
        adr2:false,
        typeText:{},
        typeText2:{},
        typeText3:{},
        typeText4:{}
      };
    },
    components:{
    	goodstab,
    	star
    },

    created(){
    	// this.getProId(43)
    	let vm = this;
    	vm.getListData()
    } ,
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
   		loadBottom(id) {
		 
		  this.allLoaded = true;
		  this.$refs.loadmore.onBottomLoaded(id);
		
		},
		// getProId(product_id) {
	 //    	var that = this
	 //    	// var product_id = 43
	 //    	// function getProId(product_id){
	 //    	// 	return type_id
	 //    	// }
	 //    	// var type_id = getProId(43)
	 //    	var url = 'https://api.lixiangguo.tech/v1/product/'+product_id
	 //    		console.log(url);
	 //    	///api.lixiangguo.tech/v1/product/43'
	 //    	axios.get('https://bird.ioliu.cn/v1/?url=' + url).then(function (response) {
	 //  			// console.log(response)

		// 	    console.log(JSON.parse(response.request.response).item)
			 
		// 	    response = JSON.parse(response.request.response)
		// 	    // this.name=
		// 	    // this.item = response.item

		// 	    that.item =Object.assign({},that.item,response.item)
		// 	    console.log(  that.item );
		// 	    // console.log(that.item)
		// 	    // console.log(this.item)
		// 	    if(that.item.type_id=='2'){
		// 	    		//这里面咋写
		// 	    		// product_id = 43  3 76  30 游玩  73用车 
		// 	    		// console.log(url)
		// 	    		that.resinfo2 = true
		// 	    }
		// 	  })
		// 	  .catch(function (error) {
		// 	    console.log(error)
		// 	  })
		// 	}
	    getListData(){
	    	let vm = this;
	    	let new_id = `https://api.lixiangguo.tech/v1/product/${vm.$route.params.id}`
	    	let url = `https://bird.ioliu.cn/v1/?url=${new_id}`
	    	axios.get(url).then((response)=>{
						response = JSON.parse(response.request.response)
						// console.log(response.item)
						vm.item = response.item
						// vm.item =Object.assign({},vm.item,response.item)
						// console.log(vm.item)
						if(vm.item.type_id=='1'){
							let pick = vm.item.has_pickup
							 let hotel = vm.item.has_hotel
							 let preter = vm.item.has_interpreter
							let [a1,b1,c1,d1] =vm.item.has_catering
							vm.typeText = {a:a1,b:b1,c:c1,d:d1}
							vm.typeText2 ={e:pick}
							vm.typeText3 = {f:hotel}
							vm.typeText4 = {g:preter}
							console.log(vm.item)
							vm.resinfo = true
							vm.resinfo2 = true

						} else if(vm.item.type_id=='4'){
							console.log(vm.item)
							vm.resinfo4 =true
						} else if(vm.item.type_id=='3'){
							console.log(vm.item)
							vm.resinfo5 = true
							vm.resinfo6 = true
							vm.price = false
							vm.price2 = true
							vm.adr =false
							vm.adr2 = true
						}
	    	}).catch((error)=>{
	    		console.log(error)
	    	})
    	}
   },

 			};
</script>

<style scoped>

	.captionimg{
		width:100%;
		height:209px;
		
		margin-bottom:18px;

	}
	.captionimg img{
		height:209px;
		width:100%;
	}
	.captiontxt{
		min-height:208px;
		height:208px;
		height:auto !important;
		padding:0 10px;
	}
	.captiontxt h3{
		line-height:20px;
		font-size: 16px;
		color: #333333;
	}
	.captiontxt div{
		
		padding-left:30px;
		
		height:30px;
		float:left;
		/*background:#999;*/
	}
	#addre{
		width:100px;
		height:200px;
	}
	.captiontxt p:nth-of-type(1){
		font-size:12px;
		line-height:20px;
		/*float:left;*/
	}
	.captiontxt p:nth-of-type(2){
		font-size:12px;
		line-height:20px;
	}
	.captiontxt p:nth-of-type(3){
		background:url(../assets/details_ad.png) no-repeat left 5px;
		background-size:6%;
		/*background-size:cover;*/
		height:20px;
		min-height:20px;
		height:auto !important;

	}



	.captiontxt p:nth-of-type(4){
		background:url(../assets/details_jieshouyuding.png) no-repeat left center;
		background-size:6%;
	}
	.captiontxt p:nth-of-type(5){
		background:url(../assets/details_shijian.png) no-repeat left center;
		background-size:6%;
	}
	.captiontxt p:nth-of-type(6){
		background:url(../assets/details_fuzengfuwu.png) no-repeat left center;
		background-size:6%;
	}
	.captiontxt p:nth-of-type(7){
		background:url(../assets/details_shijian.png) no-repeat left center;
		background-size:6%;
	}
	.captiontxt p:nth-of-type(8){
		background:url(../assets/details_shijian.png) no-repeat left center;
		background-size:6%;
	}
	.captiontxt hr~p{
		padding-left:25px;
		text-align:left;
		min-height:20px;
		height:20px;
		height:auto !important;
		font-size:14px;
		line-height:30px;
	}

	.mark{
		display:flex;
		box-sizing:border-box;
		width:100%;
		height:54px;
		background:#fdf9f6;
		border-bottom:10px solid #ccc;
		text-align:left;
		padding:10px 10px;
	}
	.mark li{
		font-size:12px;
		color:#999;
		line-height:15px;
	}
	
	.intro .border{
		height:21px;
		border-bottom:1px solid #ccc;
		margin:0 10px;
	}

	.intro {
		position:relative;
	}
	.intro h3{
		background:#fff;
		width:82px;
		height:20px;
		font-size:14px;
		font-family:PingFangSC-Medium;
		line-height:20px;
		position:absolute;
		left:38%;
		top:-2px;

	}
	.intro section{
		padding-top:10px;
		height:240px;
		min-height:240px;
		height:auto !important;
	}

</style>