<template>
    <div>
        <vhead></vhead>
        <div class="body">
            <div class="index_main">
                <div class="index_search">
                    <div class="index_logo">
                        <img src="../../assets/img/index_logo.png" class="logo_img" alt="诚壹财富顾问，壹财富">
                        <span class="logo_text">诚壹财富顾问</span>

                    </div>
                    <div class="index_search_input">
                        <div class="index_search_input_bg">
                            <img src="../../assets/img/search.png" alt="诚壹财富顾问，壹财富">
                            <input type="text" placeholder="搜索您想要的产品" id="index_query"
                                   @click.stop="showList(true)"
                                   @keypress.enter=""/>
                            <button @click="search()">搜索</button>
                            <div class="select-group" v-show="isShow">
                                <ul id="selectModel" class="selectModel">
                                    <li class="item-hot">热门推荐</li>
                                    <li @hover="searchFocus()" class="item" value="1" v-for="el in searchList">
                                        <div v-html="el.sug" @click="goDetail(el.platform, el.productId)"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">

                <div class="row index_img">
                    <div class="index_mark"><img src="../../assets/img/index_mark.png" alt=""/></div>

                    <div class="col-md-3 item" v-for="el in list">

                        <a :href='"/detail/" + el.productId + ".html"' target="_blank">
                            <div class="img_item">
                                <img src="../../assets/img/index_banner2.jpg" width="100%" alt=""/>
                            </div>
                            <div class="img_bg"></div>
                        </a>
                    </div>

                </div>
                <div class="row index_img">
                    <div class="col-md-12 item_bottom">
                        <div class="img_item">
                            <img src="../../assets/img/index_banner_top.jpg" width="100%" alt=""/>
                        </div>
                        <div class="img_bg_bootom"></div>
                    </div>
                </div>
            </div>
        </div>

        <vfoot></vfoot>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import vhead from '../common/head/index.vue';
    import vfoot from '../common/foot/index.vue';
    import store from '../../store/index'

    export default {
        components: {
            vhead,
            vfoot
        },
        computed: mapGetters({
            list: 'homeList',
            searchList: "searchList",
            isShow: "isShow"
        }),
        created () {
            this.$store.dispatch("getSearchList", {
                'categoryId': "",
                'query': ""
            });
        },
        methods: mapActions([
            'showList'
        ]),
        mounted () {
            if (window.attachEvent) {
                document.getElementsByTagName("body")[0].attachEvent('click', function () {
                    store.dispatch("hideList",false);
                });
            }
            else {
                document.getElementsByTagName("body")[0].addEventListener('click', function () {
                    store.dispatch("hideList",false);
                },false);
            }

        },
    }
</script>
<style lang="stylus">
    @import './index.css';
</style>
