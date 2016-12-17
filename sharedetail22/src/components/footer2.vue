<template>
	<section class='footer'>
		<div style="height:50px;"></div></p><p>
		<!--fixed悬浮出来的footer-->
		<div id="fixedwp">
			 <div class="fixedwpa"></div>
			        <div class="fixedcon">
				        <img src="" alt="">
						<div class="yaoke">
							<h3>要客•旅游</h3>
				        	<p>境外高端生活方式预约预定平台</p>
						</div>
				        
				        <mt-button class="unload" size="normal" @click.native="handleClick">点击下载</mt-button>
			        </div>
            </div>
       </div>
  


	</section>
</template>

<script>
	import {Button} from 'mint-ui'
</script>
<style scoped>
	/*.footer{ background-color:#096; z-index:9; position:fixed; bottom:0; left:0; width:100%;height:50px;}
	#fixedwp{overflow:hidden;text-align:left;position:relative;}
	#fixedwp .fixedwpa{height:50px; background:#CFEB88;filter:alpha(opacity=60);-moz-opacity:0.6;-kHTML-opacity: 0.6;opacity: 0.8;line-height:50px;}
	#fixedwp .fixedcon{position:absolute; z-index:99; height:29px;top:3px; left:10px;}
	#fixedwp .fixedcon .main{width:100%;margin:0 auto;}*/
	#fixedwp{
		background-color:#fff;opacity:0.6; z-index:99; position:fixed; bottom:0; left:0; width:100%;height:50px;
	}
	#fixedwp img{
		width:38px;
		height:38px;
		position:absolute;
		left:1%;
		top:-10%;
	}
	.yaoke{
		width:168px;
		padding-left:48px;
	}
	.yaoke h3{
		padding-top:5px;
		text-align:left;
		color:#333;
		font-weight:bold;
	}
	.yaoke p{
		margin:5px 0;
		font-size:12px;
		color:#999;
	}
	.unload{
		background: #D3AB5E;
		border-radius: 4px;
		color:#fff;
		position:absolute;
		right:1%;
		bottom:5px;
		z-index:111;
	}

</style>