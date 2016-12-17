<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemclasses" :class="itemClass" class="star-item" :key="itemClass.id"></span>
	</div>
</template>


<script>
	const LENGTH = 5
	const CLS_ON = 'on'
	const CLS_HALF = 'half'
	const CLS_OFF = 'off'

	export default {
		props:{
			size:{
				type:Number	
			},
			score:{
				type:Number
			}
			
		},
		computed:{
			starType() {
				console.log(this.size)
				return 'star-' + this.size

			},
			itemclasses() {
				let result = []
				// console.log(this.score)
				let score = Math.floor(this.score * 2) / 2
				let hasDecimal = score % 1 !== 0
				// console.log(hasDecimal)
				let integer = Math.floor(score)
				// console.log(integer)
				for (let i = 0;i< integer;i++){
					result.push(CLS_ON)
				}
				if (hasDecimal) {
					result.push(CLS_HALF)
				}
				while (result.length < LENGTH) {
					result.push(CLS_OFF)
				}
				// console.log(result)
				return result

			}
		}
	}

</script>

<style>

    .star{
    	font-size:0px;
    }
    .star .star-item{
    	display:inline-block;
    	background-repeat:no-repeat;
    }
    .star.star-36 .star-item{
		width:15px;
		height:15px;
		margin-right:6px;
		background-size:15px 15px;
    }
    .star.star-36 .star-item:last-child{
    	margin-right:0;
    }
    .star.star-36 .star-item.on{
    	background-image:url(../assets/star.png);
    }
 	.star.star-36 .star-item.half{
    	background-image:url(../assets/star-half.png);
    }
    .star.star-36 .star-item.off{
    	background-image:url(../assets/star.png);
    }
</style>
