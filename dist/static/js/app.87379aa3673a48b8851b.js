webpackJsonp([1,2],Array(21).concat([function(t,e,i){"use strict";var a=i(2),s=i.n(a),o=i(137),n=i.n(o);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",redirect:"/index"},{path:"/index",component:i(117),children:[{path:"",redirect:"home"},{path:"home",component:i(116)},{path:"collect",component:i(115)},{path:"rank",component:i(120)},{path:"radio",component:i(119)},{path:"mv",component:i(118)}]},{path:"/search",component:i(121)}]})},function(t,e,i){"use strict";var a=i(2),s=i.n(a),o=i(8),n=i.n(o),l=i(27),r=(i.n(l),i(60));s.a.use(n.a);var _=new n.a.Store({state:{homeData:{banner:r.a.data.list[0].banner,radios:r.a.data.list[1].radios,collections:r.a.data.list[2].collections},player:{isShowPlayerDetail:!1}},getters:{homeData:function(t){return t.homeData},player:function(t){return t.player}},mutations:{togglePlayerDetail:function(t,e){t.player.isShowPlayerDetail=e}}});e.a=_},function(t,e){},function(t,e){},,function(t,e,i){i(104);var a=i(0)(i(47),i(135),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=i(20),i(89)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&a&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(14),s=i.n(a),o=i(112),n=i.n(o),l=i(114),r=i.n(l),_=i(8);i.n(_);e.default={data:function(){},computed:s()({},i.i(_.mapGetters)(["player"])),components:{playerBar:n.a,playerDetail:r.a}}},function(t,e){},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{prBufferedTime:50,prCurrentTime:50}},methods:{showPlayerDetail:function(){this.$store.commit("togglePlayerDetail",!0)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sub-header",props:{inset:{type:Boolean,default:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(14),s=i.n(a),o=i(8);i.n(o);e.default={data:function(){return{value2:50}},computed:s()({},i.i(o.mapGetters)(["player"]),{songList:function(){}}),methods:{hidePlayerDetail:function(){this.$store.commit("togglePlayerDetail",!1)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"精选集"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(107),s=(i.n(a),i(113)),o=i.n(s),n=i(110),l=i.n(n),r=i(111),_=i.n(r);e.default={data:function(){return{swiperOpt:{autoplay:3e3,pagination:".swiper-pagination"},swiperSlides:this.$store.getters.homeData.banner,radios:this.$store.state.homeData.radios,collections:this.$store.state.homeData.collections}},components:{swiper:a.swiper,swiperSlide:a.swiperSlide,subTitle:o.a,collectGrid:l.a,collectTile:_.a},filters:{formatCount:function(t){return t<9999?t:(t/1e4).toFixed(1)+"万"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{transitionName:"fade",activeTab:"home"}},created:function(){var t=this.$route.path.split("/");"index"===t[1]&&this.handleTabChange(t[2])},watch:{$route:function(t,e){var i=t.path,a=i.split("/");"index"===a[1]&&this.handleTabChange(a[2])}},methods:{handleTabChange:function(t){this.activeTab=t,this.$router.replace({path:"/index/"+t})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"mv"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"radio"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"rank"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"Hello world!"}}}},function(t,e,i){"use strict";e.a={state:0,message:"",request_id:"0ab51f3a14878368376224617e",data:{list:[{type:"1_normal",layout:1,banner:[{id:131,logo:"http://pic.xiami.net/images/common/uploadpic/32/1487817110232.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"家家《还是想念》",height:315,width:720,url:"xiami://open?url=https://alimusic.xiami.com/markets/xiami/jiajiastillmissing"},{id:129,logo:"http://pic.xiami.net/images/common/uploadpic/84/1487748531485.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"全英音乐奖",height:315,width:720,url:"xiami://collect/260912819"},{id:127,logo:"http://pic.xiami.net/images/common/uploadpic/60/1487731136760.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"1997经典",height:315,width:720,url:"xiami://collect/270436212"},{id:124,logo:"http://pic.xiami.net/images/common/uploadpic/41/1487675250941.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"Krystal首发",height:315,width:720,url:"xiami://open?url=http://h.xiami.com/music_buy.html?id=2102693732"},{id:121,logo:"http://pic.xiami.net/images/common/uploadpic/1/1487584477701.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"唱片封面上的男体",height:315,width:720,url:"xiami://open?url=https://alimusic.xiami.com/markets/xiami/artwork2"},{id:123,logo:"http://pic.xiami.net/images/common/uploadpic/9/1487645737509.jpg@1e_1c_0i_1o_100Q_720w_315h.jpg",title:"铁汉柔情",height:315,width:720,url:"xiami://collect/270731876"}]},{layout:16,type:"20_normal",radios:[{title:"猜你喜欢",sub_title:"",url:"xiami://radio/guess",logo:"http://img.xiami.net/images/common/uploadpic/27/14850787275182.png"},{title:"最新最热",sub_title:"",url:"xiami://radio/1174783",logo:"http://img.xiami.net/images/common/uploadpic/43/14869842433829.png"},{title:"心情巨好",sub_title:"",url:"xiami://radio/1167430",logo:"http://img.xiami.net/images/common/uploadpic/30/14850788304196.png"},{title:"听歌识曲",sub_title:"",url:"xiami://soundhound",logo:"http://img.xiami.net/images/common/uploadpic/29/14850787297104.png"}],radio_status:!0},{layout:10,type:"10_operation",collections:[{name:"每日推荐30首",logo:"http://pic.xiami.net/images/app/dailysong/logo/dailysonglogo_586_v3.png@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:0,author:" ",url:"xiami://dailysong",album_status:0,is_musician:!1},{name:"粤语中的孤独一人看",logo:"http://pic.xiami.net/images/collect_pic/05-06/1462536367_N44D.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:45356,author:"用户77510244",url:"xiami://collect/167537417",is_musician:!1,album_status:0},{name:"唱遍人间百态世事炎凉",logo:"http://pic.xiami.net/images/collect/157/57/186955157_575e4604ab7b6_FhDg_1465796100.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:5487,author:"ZERO.Z.A",url:"xiami://collect/186955157",is_musician:!1,album_status:0},{name:"听客日志☞粤听越难得",logo:"http://pic.xiami.net/images/collect/439/39/193673439_5781a3d702806_MYoW_1468113879.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:76568,author:"南华夜叔",url:"xiami://collect/193673439",is_musician:!1,album_status:0},{name:"必须真实地爱一次",logo:"http://pic.xiami.net/images/collect/401/1/208094401_1472709885_JEUd.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:23459,author:"盛夏君",url:"xiami://collect/208094401",is_musician:!1,album_status:0},{name:"港乐歌词更爱若宁.",logo:"http://pic.xiami.net/images/collect/437/37/242827437_58183d7060290_NJWA_1477983600.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",play_count:30026,author:"锋锋",url:"xiami://collect/242827437",is_musician:!1,album_status:0}],title:"为你推荐",source_title:"虾小米为您推荐",source_url:"xiami://collects/recommend"},{layout:18,type:"22_operation",title:"",sub_title:"",new_music:[{title:"不能错过的新女声苏诗丁，一听入耳",icon:"http://pic.xiami.net/images/common/uploadpic/56/14829058564269.png@1e_1c_0i_1o_100Q_219w_219h.jpg",logo:"http://pic.xiami.net/images/common/uploadpic/37/14878193371710.png@1e_1c_0i_1o_100Q_421w_421h.jpg",url:"xiami://hotsong"},{title:"欢乐好声音，好听又好看的动画片",icon:"http://pic.xiami.net/images/common/uploadpic/62/14829058622928.png@1e_1c_0i_1o_100Q_219w_219h.jpg",logo:"http://pic.xiami.net/images/common/uploadpic/32/14878195321444.jpg@1e_1c_0i_1o_100Q_421w_421h.jpg",url:"xiami://albums/new"},{title:"火星电台，一次寻找自我的旅行",icon:"http://pic.xiami.net/images/common/uploadpic/26/14829059266674.png@1e_1c_0i_1o_100Q_219w_219h.jpg",logo:"http://pic.xiami.net/images/common/uploadpic/53/14878194534942.jpg@1e_1c_0i_1o_100Q_421w_421h.jpg",url:"xiami://mvs"}]},{layout:10,type:"10_operation",collections:[{url:"xiami://album/2102671464",author:"家家",logo:"http://pic.xiami.net/images/album/img55/194/58ac66433ff9a_9741355_1487693379.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"还是想念",album_status:4,is_musician:!1},{url:"xiami://album/2102672537",author:"Easy Mind",logo:"http://pic.xiami.net/images/album/img77/119277/21026725371485721894.jpeg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"Cloudland",album_status:1,is_musician:!0},{url:"xiami://album/2102694785",author:"Alison Krauss",logo:"http://pic.xiami.net/images/album/img9/142/58a571ceb3850_7116309_1487237582.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"Windy City",album_status:1,is_musician:!1},{url:"xiami://album/2102697204",author:"陈粒",logo:"http://pic.xiami.net/images/album/img63/13/58ac0cbe09147_672063_1487670462.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"戏台",album_status:1,is_musician:!0},{url:"xiami://album/2102697689",author:"王野",logo:"http://pic.xiami.net/images/album/img34/188/58ae82d5cf11b_9404534_1487831765.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"不是过错的错过",album_status:1,is_musician:!1},{url:"xiami://album/2102697774",author:"Sunshine",logo:"http://pic.xiami.net/images/album/img28/172/58ad4dcbce891_8639328_1487752651.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"拜托！别黑我！",album_status:1,is_musician:!1}],title:"新碟首发",source_title:"新碟首发",source_url:"xiami://albums/new"},{layout:10,type:"10_operation",collections:[{url:"xiami://collect/23497813",author:"雪父",logo:"http://pic.xiami.net/images/collect/813/13/23497813_1487740916_gOSJ.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"情绪随着第一个音符流泄......吉他（I）",album_status:0,play_count:25920,is_musician:!1},{url:"xiami://collect/243015127",author:"OnePerson1/2",logo:"http://pic.xiami.net/images/collect/127/27/243015127_58941fcd28fcf_dPio_1486102477.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"Rock Goddess·那些摇滚史上独领风骚的女神燃曲",album_status:0,play_count:7693,is_musician:!1},{url:"xiami://collect/251418467",author:"果麦文化",logo:"http://pic.xiami.net/images/collect/467/67/251418467_1482197978_Ixwk.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"洗涤心灵的古典音乐——跟着傅雷品经典名曲",album_status:0,play_count:5251,is_musician:!1},{url:"xiami://collect/254724382",author:"荒诞的喜剧",logo:"http://pic.xiami.net/images/collect/382/82/254724382_1482923253_DOZF.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"音乐旅途之凯尔特民谣",album_status:0,play_count:5962,is_musician:!1},{url:"xiami://collect/264492219",author:"茶淡愁更浓酒消愁更愁",logo:"http://pic.xiami.net/images/appv5/common/4607/58a1206f837f0_m0gu_1486954607.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"2.2年轻人爱上男青年！告白篇",album_status:0,play_count:26705,is_musician:!1},{url:"xiami://collect/267446322",author:"TumiQ",logo:"http://pic.xiami.net/images/appv5/common/46567/589eb717ac336_37Qm_1486796567.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"我的滚石爱情故事",album_status:0,play_count:10283,is_musician:!1}],title:"小编推荐精选集",source_title:"更多",source_url:"xiami://collects/hot"},{layout:14,type:"14_operation",title:"",sub_title:"",url:"https://alimusic.xiami.com/markets/xiami/lalaland?wh_ttid=phone",logo:"http://img.xiami.net/images/common/uploadpic/22/14870443224529.jpg",tag:"",image_size:"960,396"},{layout:10,type:"10_operation",collections:[{url:"xiami://album/2102413795",author:"赵雷",logo:"http://pic.xiami.net/images/album/img87/181/585a3226db20e_9076087_1482306086.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"无法长大",album_status:0,is_musician:!0},{url:"xiami://album/2102654707",author:"郁可唯",logo:"http://pic.xiami.net/images/album/img67/64/585a22ab7d0db_3249367_1482302123.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"00:00",album_status:4,is_musician:!0},{url:"xiami://album/2102663399",author:"EXO",logo:"http://pic.xiami.net/images/album/img1/79/5856a42f91029_3991301_1482073135.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"For Life – Winter Special Album, 2016",album_status:4,is_musician:!1},{url:"xiami://album/2102675569",author:"林宥嘉",logo:"http://pic.xiami.net/images/album/img85/11/586c83e9cd43e_569285_1483506665.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"有时THE GREAT YOGA 有时口的形状 林宥嘉演唱会自选LIVE (上)",album_status:4,is_musician:!1},{url:"xiami://album/2102678548",author:"徐玄",logo:"http://pic.xiami.net/images/album/img44/106/587cd1d150a65_5329844_1484575185.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"Don't Say No",album_status:4,is_musician:!1},{url:"xiami://album/2102691288",author:"레미",logo:"http://pic.xiami.net/images/album/img1/108/589c851b38246_5447401_1486652699.jpg@1e_1c_0i_1o_100Q_180w_180h.jpg",name:"우주의 별이 O.S.T",album_status:1,is_musician:!1}],title:"手机唱片店",source_title:"手机唱片店",source_url:"http://h.xiami.com/music_store.html?playerBarMode=showPlayerBar"},{layout:12,type:"12_operation",source_title:"",source_url:"",mv:{mv_id:"K6YI1E",title:"MV - 如果 (What if I said)",mv_cover:"http://img.xiami.net/images/common/uploadpic/60/14878310603296.jpg",status:1,play_count:993,video:{url:"http://cloud.video.taobao.com/play/u/1748679248/p/2/e/3/t/1/51381289.m3u8",expire:0},artist:"鹿式情歌新作品，鹿晗的成长，叫勇敢！",url:"xiami://mv?mv_id=K6YI1E",mv_des:""}},{layout:9,type:"9_operation",source_title:"原创音乐推荐",source_url:"xiami://musicians",title:"原创音乐推荐",songs:[{song_id:1795559872,artist_id:106166809,song_name:"戏台",singers:"陈粒",album_id:2102697204,album_logo:"http://pic.xiami.net/images/album/img63/13/58ac0cbe09147_672063_1487670462.jpg@1e_1c_0i_1o_100Q_90w_90h.jpg",album_name:"戏台",flag:65,mv_id:"",pinyin:"xi tai",artist_name:"陈粒",url:"xiami://song/1795559872",length:224,song_status:1,thirdparty_url:"",need_pay_flag:2,purview_roles:[{quality:"e",filesize:928713,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!1}]},{quality:"f",filesize:1826941,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!1}]},{quality:"l",filesize:3592776,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!0,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!0,need_pay:!0}]},{quality:"h",filesize:8981942,is_exist:!0,operation_list:[{purpose:1,upgrade_role:4,need_vip:!0,need_pay:!0},{purpose:2,upgrade_role:4,need_vip:!0,need_pay:!0}]},{quality:"s",filesize:39914846,is_exist:!0,operation_list:[{purpose:1,upgrade_role:4,need_vip:!0,need_pay:!0},{purpose:2,upgrade_role:4,need_vip:!0,need_pay:!0}]}],pan_flag:0,artist_logo:"",album_logo_s:"http://pic.xiami.net/images/album/img63/13/58ac0cbe09147_672063_1487670462.jpg@1e_1c_0i_1o_100Q_90w_90h.jpg",bak_song_id:0,music_type:0,listen_files:[]},{song_id:1795556315,artist_id:79661,song_name:"恋曲2016",singers:"蜜糖先生乐队",album_id:2102696584,album_logo:"http://pic.xiami.net/images/album/img16/0/58aabb82ee8ed_41616_1487584130.png@1e_1c_0i_1o_100Q_90w_90h.jpg",album_name:"恋曲2016",flag:65,mv_id:"",pinyin:"lian qu 2 0 1 6",artist_name:"蜜糖先生乐队",url:"xiami://song/1795556315",length:236,song_status:1,thirdparty_url:"",need_pay_flag:0,purview_roles:[{quality:"e",filesize:976419,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:0,need_vip:!1,need_pay:!1}]},{quality:"f",filesize:1916470,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:0,need_vip:!1,need_pay:!1}]},{quality:"l",filesize:3777096,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:0,need_vip:!1,need_pay:!1}]},{quality:"h",filesize:9442742,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:0,need_vip:!1,need_pay:!1}]},{quality:"s",filesize:41632680,is_exist:!0,operation_list:[{purpose:1,upgrade_role:3,need_vip:!0,need_pay:!1},{purpose:2,upgrade_role:3,need_vip:!0,need_pay:!1}]}],pan_flag:0,artist_logo:"",album_logo_s:"http://pic.xiami.net/images/album/img16/0/58aabb82ee8ed_41616_1487584130.png@1e_1c_0i_1o_100Q_90w_90h.jpg",bak_song_id:0,music_type:0,listen_files:[]},{song_id:1795546790,artist_id:2110197675,song_name:"肉蛋蛋",singers:"海青",album_id:2102694816,album_logo:"http://pic.xiami.net/images/album/img75/2110197675/2419121487241913.jpg@1e_1c_0i_1o_100Q_90w_90h.jpg",album_name:"肉蛋蛋",flag:65,mv_id:"",pinyin:"rou dan dan",artist_name:"海青",url:"xiami://song/1795546790",length:537,song_status:1,thirdparty_url:"",need_pay_flag:1,purview_roles:[{quality:"e",filesize:2211713,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!1}]},{quality:"f",filesize:4355727,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!1}]},{quality:"l",filesize:8604524,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!0}]},{quality:"h",filesize:21511313,is_exist:!0,operation_list:[{purpose:1,upgrade_role:0,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:4,need_vip:!1,need_pay:!0}]},{quality:"s",filesize:97100190,is_exist:!0,operation_list:[{purpose:1,upgrade_role:1,need_vip:!1,need_pay:!1},{purpose:2,upgrade_role:1,need_vip:!1,need_pay:!1}]}],pan_flag:0,artist_logo:"",album_logo_s:"http://pic.xiami.net/images/album/img75/2110197675/2419121487241913.jpg@1e_1c_0i_1o_100Q_90w_90h.jpg",bak_song_id:0,music_type:0,listen_files:[]}]},{layout:20,type:"24_operation",title:"专题",sub_title:"",subjects:[{logo:"http://img.xiami.net/images/common/uploadpic/39/14878329394393.jpg",url:"https://alimusic.xiami.com/markets/xiami/globalmusicmapvol13"},{logo:"http://img.xiami.net/images/common/uploadpic/28/14871262282747.jpg",url:"https://alimusic.xiami.com/markets/xiami/collection201702"},{logo:"http://img.xiami.net/images/common/uploadpic/58/14850717582103.jpg",url:"https://alimusic.xiami.com/markets/xiami/7albums"}]}],more:!1},"data-version":"e71fead2c0a5ac4a128177298a32fe16"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,i){var a=i(0)(i(45),i(131),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(46),i(129),null,null);t.exports=a.exports},function(t,e,i){i(91);var a=i(0)(i(48),i(123),null,null);t.exports=a.exports},function(t,e,i){i(103);var a=i(0)(i(49),i(134),null,null);t.exports=a.exports},function(t,e,i){i(98),i(97);var a=i(0)(i(50),i(127),"data-v-21fa9021",null);t.exports=a.exports},function(t,e,i){i(99);var a=i(0)(i(51),i(128),null,null);t.exports=a.exports},function(t,e,i){i(95),i(94);var a=i(0)(i(52),i(125),"data-v-0e704b8a",null);t.exports=a.exports},function(t,e,i){i(102);var a=i(0)(i(53),i(133),null,null);t.exports=a.exports},function(t,e,i){i(93),i(92);var a=i(0)(i(54),i(124),"data-v-0db1eae8",null);t.exports=a.exports},function(t,e,i){i(90);var a=i(0)(i(55),i(122),"data-v-066e94ce",null);t.exports=a.exports},function(t,e,i){i(105);var a=i(0)(i(56),i(136),null,null);t.exports=a.exports},function(t,e,i){i(96);var a=i(0)(i(57),i(126),null,null);t.exports=a.exports},function(t,e,i){i(100);var a=i(0)(i(58),i(130),null,null);t.exports=a.exports},function(t,e,i){i(101);var a=i(0)(i(59),i(132),"data-v-480cd6f1",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"topbar-fix"},[i("mu-appbar",{attrs:{title:"虾米音乐"}},[i("mu-icon-button",{attrs:{icon:"menu"},slot:"left"}),t._v(" "),i("mu-icon-button",{attrs:{icon:"search"},slot:"right"})],1),t._v(" "),i("mu-tabs",{staticClass:"view-tabs",attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[i("mu-tab",{attrs:{value:"home",title:"首页"}}),t._v(" "),i("mu-tab",{attrs:{value:"collect",title:"精选集"}}),t._v(" "),i("mu-tab",{attrs:{value:"rank",title:"排行榜"}}),t._v(" "),i("mu-tab",{attrs:{value:"radio",title:"电台"}}),t._v(" "),i("mu-tab",{attrs:{value:"mv",title:"MV"}})],1)],1),t._v(" "),i("transition",{attrs:{name:t.transitionName}},[i("keep-alive",[i("router-view",{staticClass:"child-view"})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collect-grid"},[t._t("default"),t._v(" "),i("div",{staticClass:"collect-grid__bd"},[t._t("gridContent")],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{staticClass:"banner",attrs:{options:t.swiperOpt}},[t._l(t.swiperSlides,function(t){return i("swiper-slide",{staticClass:"banner-item"},[i("img",{attrs:{src:t.logo,alt:t.title}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),i("mu-flexbox",{staticClass:"radios"},t._l(t.radios,function(e){return i("mu-flexbox-item",{staticClass:"radio-item"},[i("img",{attrs:{src:e.logo,alt:"radio.title"}}),t._v(" "),i("span",[t._v(t._s(e.title))])])})),t._v(" "),i("collect-grid",{staticClass:"collections"},[i("sub-title",[i("span",[t._v("为你推荐")]),t._v(" "),i("router-link",{attrs:{to:{path:"collect"},replace:""},slot:"right"},[t._v("更多")])],1),t._v(" "),i("template",{slot:"gridContent"},t._l(t.collections,function(e){return i("collect-tile",[i("img",{attrs:{src:e.logo},slot:"cover"}),t._v(" "),e.play_count?i("span",{slot:"playCount"},[i("mu-icon",{attrs:{value:"hearing"}}),t._v("\n                    "+t._s(t._f("formatCount")(e.play_count))+"\n                ")],1):t._e(),t._v(" "),i("span",{slot:"title"},[t._v(t._s(e.name))]),t._v(" "),i("span",{slot:"author"},[t._v(t._s(e.author))])])}))],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player-detail"},[i("div",{staticClass:"player-detail__content"},[i("mu-appbar",[i("mu-icon-button",{attrs:{icon:"expand_more"},on:{click:t.hidePlayerDetail},slot:"left"})],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"process"},[i("mu-slider",{directives:[{name:"model",rawName:"v-model",value:t.value2,expression:"value2"}],staticClass:"demo-slider",domProps:{value:t.value2},on:{input:function(e){t.value2=e}}}),t._v(" "),t._m(1)],1),t._v(" "),i("div",{staticClass:"info"},[i("mu-icon-button",{attrs:{icon:"favorite_border"},slot:"left"}),t._v(" "),t._m(2),t._v(" "),i("mu-icon-button",{attrs:{icon:"chat_bubble_outline"},slot:"left"})],1),t._v(" "),i("div",{staticClass:"ctr"},[i("mu-icon-button",{attrs:{icon:"shuffle"},slot:"left"}),t._v(" "),i("mu-icon-button",{staticClass:"skip",attrs:{icon:"skip_previous"},slot:"left"}),t._v(" "),i("mu-icon-button",{staticClass:"play-pause",attrs:{icon:"play_arrow"},slot:"left"}),t._v(" "),i("mu-icon-button",{staticClass:"skip",attrs:{icon:"skip_next"},slot:"left"}),t._v(" "),i("mu-icon-button",{attrs:{icon:"more_horiz"},slot:"left"})],1)],1),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover"},[i("img",{attrs:{src:"//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"time"},[i("time",{attrs:{id:"cur"}},[t._v("1:20")]),t._v(" "),i("time",{attrs:{id:"total"}},[t._v("2:40")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"name"},[t._v("想自由")]),t._v(" "),i("div",{staticClass:"singer"},[t._v("林宥嘉")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mask"},[i("div",{staticClass:"album-cover",staticStyle:{"background-image":"url(//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400)"}}),t._v(" "),i("div",{staticClass:"cover-mask",staticStyle:{opacity:"0.6"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot"},[i("mu-bottom-nav",{staticClass:"player-bar"},[i("div",{staticClass:"player-bar__content"},[i("div",{staticClass:"cover",on:{click:t.showPlayerDetail}},[i("img",{attrs:{src:"//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400"}})]),t._v(" "),i("div",{staticClass:"info",on:{click:t.showPlayerDetail}},[i("div",{staticClass:"name"},[t._v("想自由")]),t._v(" "),i("div",{staticClass:"artist"},[t._v("林宥嘉")])]),t._v(" "),i("div",{staticClass:"ctr"},[i("mu-icon-button",{attrs:{icon:"play_arrow",iconClass:"icon-lg"}}),t._v(" "),i("mu-icon-button",{attrs:{icon:"skip_next",iconClass:"icon-lg"}})],1),t._v(" "),i("div",{staticClass:"pro"},[i("div",{staticClass:"pro-load proload",style:{"-webkit-transform":"translateX("+t.prBufferedTime+"%)"}}),t._v(" "),i("div",{staticClass:"pro-play proplay",style:{"-webkit-transform":"translateX("+t.prCurrentTime+"%)"}})])]),t._v(" "),i("div",{staticClass:"blur-bg"},[i("div",{staticClass:"o-bg",staticStyle:{"background-image":"url(//pic.xiami.net/images/album/img17/23517/4386281386439629.jpg@!c-400-400)"}}),t._v(" "),i("div",{staticClass:"mask"})])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-header",class:{inset:t.inset}},[t._t("default"),t._v(" "),i("span",{staticClass:"sub-header-right"},[t._t("right")],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collect-tile"},[i("div",{staticClass:"collect-tile__cover"},[t._t("cover"),t._v(" "),i("i",{staticClass:"collect-tile__play-count"},[t._t("playCount")],2)],2),t._v(" "),i("div",{staticClass:"collect-tile__title"},[t._t("title")],2),t._v(" "),i("div",{staticClass:"collect-tile__author"},[t._t("author")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[i("router-view")],1),t._v(" "),i("transition",{attrs:{name:"slide-delay"}},[i("player-bar",{directives:[{name:"show",rawName:"v-show",value:!t.player.isShowPlayerDetail,expression:"!player.isShowPlayerDetail"}]})],1),t._v(" "),i("transition",{attrs:{name:"slide"}},[i("player-detail",{directives:[{name:"show",rawName:"v-show",value:t.player.isShowPlayerDetail,expression:"player.isShowPlayerDetail"}]})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a),o=i(26),n=i.n(o),l=i(21),r=i(22),_=i(25),u=i.n(_),p=i(23),c=(i.n(p),i(24));i.n(c);s.a.use(u.a),new s.a({el:"#app",router:l.a,store:r.a,template:"<App/>",components:{App:n.a}})}]),[140]);
//# sourceMappingURL=app.87379aa3673a48b8851b.js.map