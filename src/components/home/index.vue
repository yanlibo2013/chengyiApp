<template>
    <div>
	<!-- 头部-->
    <nav id="index_nav" class="navbar navbar-fixed-top">
        <div class="container" >
            <ul class="nav navbar-nav" >
                <li style="margin-left:41px;">
                    <router-link to="/jhxt.html"><span>集合信托</span></router-link>
                </li>
                <li style="margin-left:41px;">
                    <router-link to="/zgjh.html"><span>资管计划</span></router-link>
                </li>
                <li style="margin-left:41px;">
                    <router-link to="/zqjj.html"><span>证券基金</span></router-link>
                </li>
                <li style="margin-left:41px;">
                    <router-link to="/gqjj.html"><span>股权基金</span></router-link>
                </li>
                <li style="margin-left:41px;">
                    <router-link to="/hwtz.html"><span>海外投资</span></router-link>
                </li>
            </ul>
            <div class="index_login_reg">
                <div  class="login_outer" >
                               <span class="login_reg_common">
                                   登录
                               </span>

                    <!-- 登录框 -->
                    <div class="login_bg" >
                        <!-- 登录框头部 -->
                        <div class="login_head">
                            <p>欢迎回来，<a href="">请登录</a></p>
                        </div>

                        <!-- 登录主体 -->
                        <div class="login_content" style="margin-top:15px;">


                            <el-form :model="loginIndexObj" :rules="rule" ref="loginIndexObj" label-width="">
                                <el-form-item prop="tel">

                                    <el-input type="text" placeholder="手机号"v-model="loginIndexObj.tel" auto-complete="off"class="head_pwd_input"
                                    >
                                        <template slot="prepend">
                                            <img style="margin-right: 4px"src="../../assets/img/icon_phone.png" alt="诚壹财富顾问，壹财富">
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item prop="pwd">

                                    <el-input type="password" placeholder="密码"v-model="loginIndexObj.pwd" auto-complete="off"class="head_pwd_input">
                                        <template slot="prepend">
                                            <img src="../../assets/img/icon_password.png" alt="诚壹财富顾问，壹财富">
                                        </template>
                                    </el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary"
                                               size="mini"
                                               class="login_btn"
                                               v-text="loginName"
                                               :disabled="loginDisabled"
                                               :style="{background:loginBackGround}"
                                               @click="loginBtn()">登 录</el-button>

                                </el-form-item>
                            </el-form>

                            <span style="float:right;margin-top: -10px;margin-right: 5px">
													<router-link :to="{name:'findPwd'}" >
														忘记密码?
													</router-link>
												</span>
                            <span class="clearfix"></span>
                        </div>
                    </div>
                    <!-- 登录框END -->
                </div>
        </div>
    </nav>
	</div>
</template>

<script>

	export default {
		mounted() {
		},
		methods: {
		}
	}
</script>
<style lang="stylus">
	@import './index.css';
</style>
