function paper(obj) {

    //分页盒子
    this.paperBox = obj.paperName;
    //第几页
    this.page = obj.page;
    //每页渲染条数
    this.iDisplayLength = obj.iDisplayLength;
    //ajax(url)
    this.ajaxUrl = obj.url;
    //数据渲染
    this.dataRender = obj.Render;
    //传入数据
    this.param = obj.param;
    //获取数据方式
    this.type = obj.type ? obj.type : 'get';
    //开始条数
    this.iDisplayStart = 0;
    //当前页的数据
    this.aaData = '';
    //一共有多少条数据
    this.iTotalRecords = '';
    //最大页数
    this.maxPages = '';
    // token验证
    this.token = window.storage.get('token', false);

}

//注册
paper.prototype.init = function () {

    var _this = this;

    this.param.iDisplayStart = this.iDisplayStart;
    this.param.iDisplayLength = this.iDisplayLength;

    //初始化数据
    $.ajax({
        url: _this.ajaxUrl,
        type: _this.type,
        data: _this.param,
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", _this.token);
        },
        success: function (response) {
            var data = response;
            //设置数据
            _this.aaData = data.aaData;
            //设置最多条数
            _this.iTotalRecords = data.iTotalRecords;
            //设置当前盒子
            _this.paperBox = $('#' + _this.paperBox);
            //生成翻页控制器
            // 最大页数
            _this.maxPages = Math.ceil(_this.iTotalRecords / _this.iDisplayLength);
            _this.pageRender();
        }
    });

}

//数据获取
paper.prototype.getData = function () {

    var _this = this;
    this.param.iDisplayStart = (this.page - 1) * this.iDisplayLength;
    //获取数据
    $.ajax({
        url: _this.ajaxUrl,
        type: _this.type,
        data: _this.param,
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", _this.token);
        },
        success: function (response) {
            var data = response;
            //设置最多条数
            _this.aaData = data.aaData;
            _this.iTotalRecords = data.iTotalDisplayRecords;
            //渲染数据
            _this.render();
        }
    });
}

//数据渲染
paper.prototype.render = function () {
    this.dataRender(this.aaData);
}

//分页器生成
paper.prototype.pageRender = function () {

    var _this = this;
    //清空分页盒子
    this.paperBox.empty();

    if (this.maxPages == 1) {
        var str = '';
        str += '<a class="active" href="javascript:;">1</a>';
    } else if (this.maxPages > 1 && this.page <= 5) {
        var length = this.maxPages >= 5 ? 5 : this.maxPages;
        var str = '';
        str += '<a href="javascript:;">首页</a><a href="javascript:;">上一页</a>';
        for (var i = 1; i <= length; i++) {
            if (i == this.page) {
                str += '<a class="active" href="javascript:;">' + i + '</a>';
            } else {
                str += '<a href="javascript:;">' + i + '</a>';
            }
        }
        str += '<a href="javascript:;">下一页</a><a href="javascript:;">尾页</a>';
    } else if (this.maxPages > 1 && this.page > 5) {
        var start = this.maxPages - 4 >= this.page ? this.page - 2 : this.maxPages - 4;
        var over = this.maxPages - 4 >= this.page ? this.page + 2 : this.maxPages;
        var str = '';
        str += '<a href="javascript:;">首页</a><a href="javascript:;">上一页</a>';
        for (var i = start; i <= over; i++) {
            if (i == this.page) {
                str += '<a class="active" href="javascript:;">' + i + '</a>';
            } else {
                str += '<a href="javascript:;">' + i + '</a>';
            }
        }
        str += '<a href="javascript:;">下一页</a><a href="javascript:;">尾页</a>';
    }

    this.paperBox.append(str);

    //分页器翻页
    var aBtns = this.paperBox.find('a');
    //事件绑定
    $(aBtns).each(function (e, i) {

        if ($(i).text() == '首页') {
            $(i).click(function () {
                //把当前页设置为第一页
                _this.page = 1;
                //重新获取当前页数据
                _this.getData();
                _this.pageRender();
            })
        } else if ($(i).text() == '上一页') {
            $(i).click(function () {
                //把当前页数减一
                _this.page = _this.page - 1;
                //判断是否已经小于1
                if (_this.page <= 0) {
                    _this.page = 1;
                    return
                }
                //重新获取当前页数据    
                _this.getData();
                _this.pageRender();
            })
        } else if ($(i).text() == '下一页') {
            $(i).click(function () {
                //把当前页数加一
                _this.page = Number(_this.page) + 1;
                //判断是否超过最大页数
                if (_this.page > _this.maxPages) {
                    _this.page = _this.maxPages;
                    return
                }
                //重新获取当前页数据
                _this.getData();
                _this.pageRender();
            })
        } else if ($(i).text() == '尾页') {
            $(i).click(function () {
                //设置当前页为最后一页
                _this.page = _this.maxPages;
                //重新获取当前页数据
                _this.getData();
                _this.pageRender();
            })
        } else {
            $(i).click(function () {
                //翻到当前页
                _this.page = Number($(i).text());
                //重新获取当前页数据
                _this.getData();
                _this.pageRender();
            })
        }
    })
}