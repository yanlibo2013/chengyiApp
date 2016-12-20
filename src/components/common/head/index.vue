<template>

    <div id="header">
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
                    <div id="head_login">
                        <div class="head_loginReg">
                            <div class="login_outer">

                                <el-button class="login_outer_btn" type="primary">登 录</el-button>
                                <!-- 登录框 -->
                                <div class="login_bg">
                                    <!-- 登录框头部 -->
                                    <div class="login_head">
                                        <div class="head_title">欢迎回来，
                                            <a href="javascript:void(0)">请登录</a>
                                        </div>
                                    </div>

                                    <!-- 登录主体 -->
                                    <div class="login_content" style="margin-top:15px;">

                                        <el-form  label-width="">
                                            <el-form-item prop="tel">

                                                <el-input type="text" placeholder="手机号"
                                                          auto-complete="off"class="head_pwd_input"
                                                >
                                                    <template slot="prepend">
                                                        <img style="margin-right: 4px"src="../../../assets/img/icon_phone.png" alt="诚壹财富顾问，壹财富">
                                                    </template>
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item prop="pwd">

                                                <el-input type="password" placeholder="密码"
                                                          auto-complete="off"class="head_pwd_input">
                                                    <template slot="prepend">
                                                        <img src="../../../assets/img/icon_password.png" alt="诚壹财富顾问，壹财富">
                                                    </template>
                                                </el-input>
                                            </el-form-item>

                                            <el-form-item>
                                                <el-button type="primary"
                                                           class="login_btn"
                                                           @click="headLogin()">登 录</el-button>

                                            </el-form-item>
                                        </el-form>

												<span style="float:right;margin-top: -10px;margin-right: 5px">
													<router-link to="/hwtz.html" >
														忘记密码?
													</router-link>
												</span>
                                        <span class="clearfix"></span>
                                    </div>
                                </div>
                                <!-- 登录框END -->
                            </div>
                            <router-link to="/hwtz.html">
                                <el-button class="login_outer_btn reg" type="primary">注 册</el-button>

                            </router-link>
                        </div>
                        <div class="head_loginReg">

                            <div style="display: inline-block;margin-left: 10px">
                                <router-link to="/hwtz.html">
                                    <span  style="color: #f6762b"></span>
                                </router-link>

                            </div>
                            <el-button class="login_outer_btn reg" type="primary" @click="goBack()">退出</el-button>

                        </div>
                    </div>
                </div>
        </nav>
    </div>
</template>
<style lang="stylus">
    @import './index.css';
</style>

<script>
    export default {

    }

</script>