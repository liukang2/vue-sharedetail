<template>
	<div class=goodtab>
		<mt-navbar v-model="selected" class="state">
		  <mt-tab-item id="1">预定说明</mt-tab-item>
		  <mt-tab-item id="2">费用说明</mt-tab-item>
		  <mt-tab-item id="3">退订说明</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <section v-html="myitem.reserve_notice"><section/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <section v-html="myitem.cost_notice"></section>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <section v-html="myitem.return_notice"></section>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
	
</template>

<script>
	export default{
		props:['myitem'],
		data (){
			return {
				selected:'1',
				// myitem:{}
			}
		}
	}
</script>

<style>
	.goodtab{
		padding:0 10px;
	}
/*	.firsttab{
		display:block;
	}*/
	.state{
		height:42px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		
		
		margin-bottom:3px;
		font-family: MicrosoftYaHei;
		font-size: 14px;
		color: #D3AB5E;
		letter-spacing: 0;
		line-height: 14px;
		border-bottom:3px solid #D3AB5E;
	}
	section p{
		text-align:left;
	}
</style>