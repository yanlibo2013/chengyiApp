/*
 * @Author: henry yan
 * @Date:   2016-10-21 10:20:39
 * @Desc: ajax 统一封装
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-21 10:20:39
 */

import axios from 'axios';

export default function(opt){
    axios({
        method: opt.method,
        url: 'http://ydjr.dev.chengyiwm.com/goldman-api/'+opt.url,
        data: {
            head:{
                userId: "",
                skey: "",
                platform: "pcweb",
                imei: "",
                appVersion: "",
                cityId: "",
                platformVersion: "",
                deviceId: "",
                channel: "",
                protoVersion: 1,
                isPreview: 2
            },
            body:opt.body
        }
    }).then(function (response) {
        opt.successFun(response);
    }).catch(function (error) {
        opt.errorFun(error);
    });
}

