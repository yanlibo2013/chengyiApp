<template>
    <div>
        <vhead></vhead>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import vhead from '../common/head/index.vue'
   /* import vhead from '../common/head/index.vue';
    import vfoot from '../common/foot/index.vue';*/
    import store from '../../store/index'

    export default {
        components: {
            vhead
            /*vhead,
            vfoot*/
        },
       /* computed: mapGetters({
            list: 'homeList',
            searchList: "searchList",
            isShow: "isShow"
        }),*/
        created () {
            /*this.$store.dispatch("getSearchList", {
                'categoryId': "",
                'query': ""
            });*/
        },
        methods: mapActions([
            'showList'
        ]),
        mounted () {
            /*if (window.attachEvent) {
                document.getElementsByTagName("body")[0].attachEvent('click', function () {
                    store.dispatch("hideList",false);
                });
            }
            else {
                document.getElementsByTagName("body")[0].addEventListener('click', function () {
                    store.dispatch("hideList",false);
                },false);
            }*/

        },
    }
</script>
<style lang="stylus">
   /* @import './index.css';*/
</style>
