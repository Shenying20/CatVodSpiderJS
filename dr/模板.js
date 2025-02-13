Object.assign = function () {
	var target = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var mubanDict = { // 模板字典
 mxpro:{
    title:'',
    host:'',
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage---.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.navbar-items li:gt(2):lt(8);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item","lists":".module-play-list:eq(#id) a"},
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
},
首图:{
    title:'',
    host:'',
    url:'/vodshow/fyclass--------fypage---/',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text","img":".myui-content__thumb .lazyload&&data-original","desc":".myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text","content":".content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
},
首图2:{
    title:'',
    host:'',
    url:'/list/fyclass-fypage.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
        // "Cookie": ""
    },
    // class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
    class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text","img":".stui-content__thumb .lazyload&&data-original","desc":".stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text","content":".detail&&Text","tabs":".stui-vodlist__head h3","lists":".stui-content__playlist:eq(#id) li"},
    搜索:'ul.stui-vodlist__media:eq(0) li,ul.stui-vodlist:eq(0) li,#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
    搜索1:'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
    搜索2:'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
},
vfed:{
    title:'',
    host:'',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a;a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.fed-list-info.fed-part-rows;li;a.fed-list-title&&Text;a&&data-original;.fed-list-remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.fed-list-info&&li;a.fed-list-title&&Text;a&&data-original;.fed-list-remarks&&Text;a&&href',
    二级:{"title":"h1.fed-part-eone&&Text;.fed-deta-content&&.fed-part-rows&&li&&Text","img":".fed-list-info&&a&&data-original","desc":".fed-deta-content&&.fed-part-rows&&li:eq(1)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(2)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(3)&&Text","content":".fed-part-esan&&Text","tabs":".fed-drop-boxs&&.fed-part-rows&&li","lists":".fed-play-item:eq(#id)&&ul:eq(1)&&li"},
    搜索:'.fed-deta-info;h1&&Text;.lazyload&&data-original;.fed-list-remarks&&Text;a&&href;.fed-deta-content&&Text',
},
海螺3:{
    title:'',
    host:'',
    searchUrl:'/v_search/**----------fypage---.html',
    url:'/vod_____show/fyclass--------fypage---.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_parse:'body&&.hl-nav li:gt(0);a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'明星|专题|最新|排行',
    limit:40,
    play_parse:true,
    lazy:'',
    推荐:'.hl-vod-list;li;a&&title;a&&data-original;.remarks&&Text;a&&href',
    double:true,
    一级:'.hl-vod-list&&.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
    二级:{"title":".hl-infos-title&&Text;.hl-text-conch&&Text","img":".hl-lazy&&data-original","desc":".hl-infos-content&&.hl-text-conch&&Text","content":".hl-content-text&&Text","tabs":".hl-tabs&&a","lists":".hl-plays-list:eq(#id)&&li"},
    搜索:'.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
},
海螺2:{
    title:'',
    host:'',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**/',
    url:'/index.php/vod/show/id/fyclass/page/fypage/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_parse:'#nav-bar li;a&&Text;a&&href;id/(.*?)/',
    limit:40,
    play_parse:true,
    lazy:'',
    推荐:'.list-a.size;li;a&&title;.lazy&&data-original;.bt&&Text;a&&href',
    double:true,
    一级:'.list-a&&li;a&&title;.lazy&&data-original;.list-remarks&&Text;a&&href',
    二级:{"title":"h2&&Text;.deployment&&Text","img":".lazy&&data-original","desc":".deployment&&Text","content":".ec-show&&Text","tabs":"#tag&&a","lists":".play_list_box:eq(#id)&&li"},
    搜索:'.search-list;a&&title;.lazy&&data-original;.deployment&&Text;a&&href',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
},


};

export var muban = JSON.parse(JSON.stringify(mubanDict));