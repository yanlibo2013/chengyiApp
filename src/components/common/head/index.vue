<template>
    <div class="head-container">
        <div class="head-content">
            <div class="head-left">
                <img  src="../../../assets/img/index_logo.png" class="logo_img" alt="诚壹财富顾问，壹财富" />
                <div class="title">
                    <div>诚壹理财顾问</div>
                    <div>重新定义理财师</div>
                </div>
            </div>
            <div class="head-center">
                <ul class="">
                    <li>
                        <router-link to="/index.html">首页</router-link>
                    </li>

                    <li v-for="el in navList">
                        <router-link :to="el.path">
                            <span  v-text="el.categoryName"></span>
                        </router-link>
                    </li>

                </ul>
                <div class="head-search-input">
                    <img src="../../../assets/img/search.png" alt="诚壹财富顾问，壹财富">
                    <input type="text" placeholder="搜索您想要的产品"/>
                </div>
            </div>
            <div class="head-right">
                <router-link to="/index.html"  class="right-login">
                    登录
                </router-link>
                <router-link to="/index.html"  class="right-reg">
                    注册
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">
    @import './index.less';
</style>

<script>
    import {mapGetters, mapActions} from 'vuex';
    /*import { Message } from 'element-ui'*/
    export default {
         computed: mapGetters({
         navList: 'navList'
         }),
        methods: {
        }

    }

</script>