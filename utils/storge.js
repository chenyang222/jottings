/**
* 存储工具
*/
window.storage = {
        /**
         * 保存
         * @param key
         * @param value
         * @param session 是否sessionStorage
         */
        set: function (key, value, session) {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            if (session) {
                window.sessionStorage.setItem(key, value);
            }
            else {
                window.localStorage.setItem(key, value);
            }
            console.log(1111111)
        },
        /**
         * 读取
         * @param key
         * @param json
         * @param session 是否sessionStorage
         * @returns {*}
         */
        get: function (key, json, session) {
            var str;
            if (session) {
                str = window.sessionStorage.getItem(key);
            }
            else {
                str = window.localStorage.getItem(key);
            }
    
            if (json) {
                str = JSON.parse(str);
            }
            return str;
        },
    
        /**
         * 删除
         * @param key
         * @param session
         */
        remove: function (key, session) {
            if (session) {
                window.sessionStorage.removeItem(key);
            }
            else {
                window.localStorage.removeItem(key);
            }
        },
        clear: function () {
            window.sessionStorage.clear();
            window.localStorage.clear();
        }
    };


    //获取
    function GetQueryString(name){	
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");	
        var r = window.location.search.substr(1).match(reg);	
        if (r != null) return unescape(r[2]);	
        return null;
    }