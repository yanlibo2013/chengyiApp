import * as types from './mutation-types';
import ajax from 'src/common/ajax'

export const getSearchList = ({commit}, body)=> {
    ajax({
        url: "getSearchSug", method: "post", body: body, successFun: function (response) {
            /* Message({
             message: '操作成功!',
             type: 'success'
             });*/
            commit(types.GET_SREACH_LIST, {result: response.data.body.list});

        }, errorFun: function (error) {
            /*Message({
             message: '操作失败!',
             type: 'error'
             });*/
        }
    });
}


export const hideList = ({commit}, data)=> {
    commit(types.HIDE_SEARCH_LIST, {result: data});
}

export const showList = ({commit}, data)=>
{
    commit(types.SHOW_SEARCH_LIST, {result: data});
}

export const login = ({commit}, data)=> {
    ajax({
        url: "getSearchSug", method: "post", body: body, successFun: function (response) {
             Message({
             message: '操作成功!',
             type: 'success'
             });
            commit(types.SET_LOGIN, {result: response.data.body});

        }, errorFun: function (error) {
            Message({
             message: '操作失败!',
             type: 'error'
             });
        }
    });

}


