<template>
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="risk-title">
					<p class="p1">动物百科</p>
					<p class="p2">倘若你徜徉在这片资讯丰富的地带<br>也一定能收获无穷欢乐！</p>
				</div>
				<div class="location">当前位置><router-link to="/index" tag="span">首页></router-link>
					<router-link to="animal" tag="span">动物百科</router-link>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="actives = keys" :class="{anActive:actives == keys}">
							<template v-if="keys == 0">动物课堂</template>
							<template v-if="keys == 1">保育救助</template>
							<template v-if="keys == 2">科普活动</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys == actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<template v-if="actives == 0">
						<div class="box">
							<div class="ani-title">哺乳类-鲸豚类</div>
							<div class="list clearDiv" v-for="(item,k) in 2" :class="{'noborder': k == 0}">
								<img :src="`../../../static/A${k+1}.png`" alt class="floatLeft">
								<div class="rights floatLeft">
									<div class="t">
										<template v-if="k == 0">瓶鼻海豚</template>
										<template v-if="k == 1">白鲸</template>
									</div>
									<template v-if="k == 0">
										<div class="p">身体为流线型，雌性身长为1.9-2.1米，体重为170-200千克，雄性体长为2.5-3.9米，体重为300-650千克...</div>
									</template>
									<template v-if="k == 1">
										<div class="p">躯体粗壮，呈白色或黄色，头圆、喙短，没有背鳍。体长平均3-5米，可达5.5米。体重雄性可达1500千克；雌性可达1350千克...</div>
									</template>
									<router-link :to="{name:'AnimalDetails',params:{id:k+1}}">查看详情>></router-link>
								</div>
							</div>

							<div class="ani-title">鳍脚类</div>
							<div class="list clearDiv" v-for="(item,k) in 2" :class="{'noborder': k == 0}">
								<img :src="`../../../static/AA${k+1}.png`" alt class="floatLeft">
								<div class="rights floatLeft">
									<div class="t">
										<template v-if="k == 0">海象</template>
										<template v-if="k == 1">南美海狮</template>
									</div>
									<template v-if="k == 0">
										<div class="p">身体呈圆筒形，粗壮而肥胖，雄兽体长3.3-4.5米，体重1200-3000千克，雌兽较小，体长一般为2.9-3.3米，体重600-900千克...</div>
									</template>
									<template v-if="k == 1">
										<div class="p">雄性2-2.5米，雌性平均2米。体重雄性200-350千克，雌性140-150千克......</div>
									</template>

									<router-link :to="{name:'AnimalDetails',params:{id:k+3}}">查看详情>></router-link>
								</div>
							</div>

							<div class="ani-title">海牛类</div>
							<div class="list clearDiv" v-for="(item,k) in 1" :class="{'noborder': k == 0}">
								<img :src="`../../../static/AAA${k+1}.png`" alt class="floatLeft">
								<div class="rights floatLeft">
									<div class="t">
										<template v-if="k == 0">西非海牛</template>
									</div>
									<div class="p">体型呈纺锤状，背部宽阔无背鳍，头部比例小。体长可达4.5米，体重200-500公斤......</div>
									<router-link :to="{name:'AnimalDetails',params:{id:k+5}}">查看详情>></router-link>
								</div>
							</div>
						</div>
					</template>
					<template v-if="actives == 1">
						<div class="box2">
							<ul>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'1',id:'1'}}" title="搁浅领航鲸救助(上)">
										<i></i>
										<span class="p1">搁浅领航鲸救助(上)</span>
										<span class="p2">海南海洋欢乐世界 | 2016-05-18</span>
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'1',id:'2'}}" title="搁浅领航鲸救助(下)">
										<i></i>
										<span class="p1">搁浅领航鲸救助(下)</span>
										<span class="p2">海南海洋欢乐世界 | 2016-05-18</span>
									</router-link>
								</li>
							</ul>
							<div class="pages">
								<!-- <el-pagination background layout="prev, pager, next" :total="totle" :current-page.sync="pageIndex" :page-size="pageSize"
								 @current-change="changePage"></el-pagination> -->
							</div>
						</div>
					</template>
					<template v-if="actives == 2">
						<div class="box2">
							<ul>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'2',id:'1'}}" title="携手 “净滩”，向海洋垃圾宣战">
										<i></i>
										<span class="p1">携手 “净滩”，向海洋垃圾宣战</span>
										<span class="p2">海南海洋欢乐世界 | 09.19</span>
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'2',id:'2'}}" title="海洋日系列活动-科普进校园暨世界">
										<i></i>
										<span class="p1">海洋日系列活动-科普进校园暨世界</span>
										<span class="p2">海南海洋欢乐世界 | 2018.07.08</span>
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'2',id:'3'}}" title="行动吧海洋小卫士">
										<i></i>
										<span class="p1">行动吧海洋小卫士</span>
										<span class="p2">海南海洋欢乐世界 | 2018.06.09</span>
									</router-link>
								</li>
							</ul>
							<div class="pages">
								<!-- <el-pagination background layout="prev, pager, next" :total="totle" :current-page.sync="pageIndex" :page-size="pageSize"
								 @current-change="changePage"></el-pagination> -->
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				actives: 0,
				pageSize: 10,
				pageIndex: 1,
				totle: 100,
			};
		},
		computed: {},
		components: {
			Header
		},
		methods: {
			//分页
			changePage(val) {
				this.GetList(0, this.pageSize, val);
			},
		},
		mounted() {
			let id = this.$route.query.type;
			if (id != undefined) {
				this.actives = id;
			}
		}
	};
</script>
<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/theme-animal-bg.png) no-repeat top center;
		padding-top: 438px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			background: linear-gradient(180deg,
				rgba(15, 107, 234, 1),
				rgba(52, 142, 240, 1));
			box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);
			position: relative;

			.risk-title {
				position: absolute;
				top: -330px;
				right: 215px;
				width: 350px;
				color: #fff;

				.p1 {
					font-size: 48px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					margin-bottom: 30px;
					line-height: 48px;
				}

				.p2 {
					font-size: 20px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 30px;
				}
			}

			.location {
				//   height: 22px;
				height: 66px;
				line-height: 66px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				padding-left: 34px;
				background: url(../../assets/img/new-4.png) no-repeat 15px center;
				cursor: pointer;
			}
		}

		.content {
			width: 1200px;
			margin: 0 auto;

			.left {
				width: 250px;
				background: rgba(255, 255, 255, 0.2);
				padding-bottom: 30px;
				border-radius: 0 0 10px 10px;

				.ul {
					width: 213px;
					margin: 0 auto;
					background-color: rgba(255, 255, 255, 1);
					padding-top: 30px;

					.li {
						position: relative;
						height: 70px;
						line-height: 70px;
						text-align: center;
						font-size: 18px;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						cursor: pointer;

						img {
							position: absolute;
							width: 8px;
							height: 14px;
							margin-left: 10px;
							top: 50%;
							margin-top: -7px;
							right: 30px;
						}

						&:hover div {
							display: block;
						}

						div {
							display: none;
							left: 222px;
							top: 0;
							width: 370px;
							height: 114px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
							position: absolute;
							z-index: 10;
							padding: 25px;

							&:after {
								content: "";
								position: absolute;
								top: 50%;
								left: -4px;
								transform: translate(-50%, 0);
								border-right: 9px solid rgba(255, 255, 255, 1);
								/*此处将左右的边框设置为透明色*/
								border-top: 9px solid transparent;
								border-bottom: 9px solid transparent;
								margin-top: -32px;
							}

							ul {
								li {
									float: left;
									height: 28px;
									font-size: 14px;
									font-weight: 400;
									color: rgba(153, 153, 153, 1);
									line-height: 28px;
									padding: 0 10px;
								}

								.liActive {
									color: rgba(249, 126, 47, 1);
								}
							}
						}
					}

					.anActive {
						background: rgba(249, 126, 47, 1);
						color: rgba(255, 255, 255, 1);
					}
				}
			}

			.right {
				width: 908px;
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.08);
				border-radius: 0px 0px 10px 10px;
				padding-bottom: 44px;

				.box {
					width: 863px;
					min-height: 800px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;
					padding-top: 50px;

					.ani-title {
						font-size: 24px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						padding-left: 30px;
					}

					.box-top {
						position: relative;

						.img {
							width: 863px;
							height: 400px;
						}

						.top {
							position: absolute;
							top: 118px;
							left: 0;
							width: 422px;
							height: 184px;
							background: rgba(0, 0, 0, 0.8);
							font-weight: 400;
							color: rgba(255, 255, 255, 1);
							padding-left: 17px;

							.a-t {
								font-size: 18px;
								margin-top: 20px;
								margin-bottom: 20px;
							}

							.a-c {
								font-size: 14px;
								height: 89px;
								width: 386px;
								overflow: hidden;
							}
						}
					}

					.list {
						margin: 0 30px;
						padding: 30px 0;
						width: 800px;
						border-top: 1px solid rgba(153, 153, 153, 0.2);

						&.noborder {
							border-top: none;
						}

						img {
							width: 304px;
							height: 205px;
							border: 4px solid rgba(255, 255, 255, 1);
							box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.22);
							border-radius: 6px;
						}

						.rights {
							margin-left: 30px;

							.t {
								font-size: 24px;
								font-weight: bold;
								color: rgba(51, 51, 51, 1);
								margin-bottom: 25px;
								margin-top: 10px;
							}

							.p {
								font-size: 14px;
								font-weight: 400;
								color: rgba(102, 102, 102, 1);
								width: 420px;
								margin-bottom: 35px;
								line-height: 26px;
								overflow: hidden;
							}

							a {
								font-size: 14px;
								font-weight: 400;
								color: rgba(17, 109, 234, 1);
							}
						}
					}
				}

				.box2 {
					width: 863px;
					min-height: 1000px;
					padding: 50px 0;
					background: #fff;
					margin: 0 auto;

					ul {
						li {
							position: relative;
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
							width: 100%;
							height: 70px;
							line-height: 70px;
							padding: 0 40px 0 60px;
							border-bottom: 1px solid #D7D7D7;

							&:hover {
								background: #D5F1FF;
							}

							a {
								color: #333333;
							}

							i {
								display: block;
								position: absolute;
								top: 50%;
								left: 40px;
								transform: translateY(-50%);
								border-radius: 100%;
								background: #000;
								margin-right: 10px;
								width: 5px;
								height: 5px;
							}

							.p1 {
								display: inline-block;
								width: 550px;
								height: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							.p2 {
								display: inline-block;
								text-align: right;
								position: absolute;
								top: 0;
								right: 40px;
								width: 250px;
								height: 70px;
							}
						}
					}

					.pages {
						width: 100%;
						height: 32px;
						margin-top: 90px;
						margin-bottom: 60px;
						text-align: center;
					}

				}

			}
		}
	}
</style>
