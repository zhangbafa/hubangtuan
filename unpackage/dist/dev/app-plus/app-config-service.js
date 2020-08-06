
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/detail","pages/about/about","pages/about/xieyi","pages/about/ys","pages/feedback/index","pages/member/user","pages/member/myworks","pages/member/renwu","pages/member/renwushuoming","pages/member/wallet","pages/member/tixian","pages/member/chongzhi","pages/member/setting","pages/fabu/fabu","pages/fabu/fabu2","pages/login/login","pages/login/forget","pages/login/register","pages/help/index","pages/shop/shop","pages/message/message","pages/qian/qian","pages/message/sys"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"小钉耙","navigationBarBackgroundColor":"#fff","backgroundColor":"#F8F8F8","backgroundColorTop":"#FFFFFF","bounce":"none","animationType":"slide-in-left","animationDuration":300,"titleNView":{"splitLine":{"color":"#E7E7E9","height":"0.5px"}}},"tabBar":{"color":"#666","selectedColor":"#282828","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/home.png","selectedIconPath":"static/home1.png"},{"pagePath":"pages/shop/shop","text":"商城","iconPath":"static/shop.png","selectedIconPath":"static/shop1.png"},{"pagePath":"pages/fabu/fabu","text":"发布","iconPath":"static/fabu.png","selectedIconPath":"static/fabu1.png"},{"pagePath":"pages/qian/qian","text":"赚钱","iconPath":"static/wallet.png","selectedIconPath":"static/wallet1.png"},{"pagePath":"pages/member/user","text":"我的","iconPath":"static/my.png","selectedIconPath":"static/my1.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"小钉耙","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小钉耙","navigationStyle":"custom"}},{"path":"/pages/index/detail","meta":{},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/about/about","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/about/xieyi","meta":{},"window":{"navigationBarTitleText":"用户协议"}},{"path":"/pages/about/ys","meta":{},"window":{"navigationBarTitleText":"隐私政策","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/feedback/index","meta":{},"window":{"navigationBarTitleText":"意见反馈","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/member/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom"}},{"path":"/pages/member/myworks","meta":{},"window":{"navigationBarTitleText":"我的接单","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/member/renwu","meta":{},"window":{"navigationBarTitleText":"我的任务","navigationBarBackgroundColor":"#FFFFFF","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"text":"任务说明","fontSize":"12px","fontWeight":"normal","colorPressed":"#ddd","width":"120upx"}]}}},{"path":"/pages/member/renwushuoming","meta":{},"window":{"navigationBarTitleText":"任务说明","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/member/wallet","meta":{},"window":{"navigationBarTitleText":"我的钱包","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/member/tixian","meta":{},"window":{"navigationBarTitleText":"提现","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/member/chongzhi","meta":{},"window":{"navigationBarTitleText":"充值","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/member/setting","meta":{},"window":{"navigationBarTitleText":"设置中心","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/fabu/fabu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"任务发布","navigationBarBackgroundColor":"#FFFFFF","navigationStyle":"custom","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"text":"任务教程","fontSize":"12px","fontWeight":"normal","colorPressed":"#ddd","width":"100px"}]}}},{"path":"/pages/fabu/fabu2","meta":{},"window":{"navigationBarTitleText":"任务说明","navigationBarBackgroundColor":"#FFFFFF","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"text":"任务教程","fontSize":"12px","fontWeight":"normal","colorPressed":"#ddd","width":"100px"}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"autoBackButton":"false"}}},{"path":"/pages/login/forget","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/help/index","meta":{},"window":{"navigationBarTitleText":"帮助中心","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/message/message","meta":{},"window":{"navigationBarTitleText":"消息","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/qian/qian","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"赚钱","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/message/sys","meta":{},"window":{"navigationBarTitleText":"系统公告","navigationBarBackgroundColor":"#fff"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
