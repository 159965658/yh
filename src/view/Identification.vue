<template>
    <div>
    		<div>体质辨识</div>
    		<div class="card">
    			<div class="left fl active">
    				<i class="icon"></i>
    				<h2>普通人群</h2>
    				<div class="left-q"></div>
    			</div>
    			<div class="right fr">
    				<i class="icon"></i>
    				<h2>老年人群</h2>
    				<div class="right-q"></div>
    			</div>
    		</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card{
	width: 1718px;
	margin: 0 auto;
	margin-top: 100px;
	.left,.right{
		width: 765px;
		height: 1155px;
		background: #fff;
		box-shadow: -1px 1px 30px #cacaca;
		border-radius:50px;
		h2{
			text-align: center;
			font-size: 60px;
			color: #282828;
			padding-top: 55px;
		}
		.left-q,
		.right-q{
			width: 465px;
			height: 720px;
			background: url(../assets/left-q.png) no-repeat;
			background-size:100% ;
			margin: 0 auto;
			margin-top: 200px;
		}
		.right-q{
			background: url(../assets/right-q.png) no-repeat;
			background-size:100% ;
		}
	}
	.left.active,.right.active{
		border: 1px solid #3ba6dd;
		box-shadow: -1px 1px 30px #abbbdd;
		i.icon{
			width: 68px;
			height: 68px;
			background: url(../assets/xuanzhong.png) no-repeat;
			background-size: 100%;
			float: right;
			margin-top: 20px;
			margin-right: 20px;
		}
	}
}
</style>
