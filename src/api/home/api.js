import http from '@/utils/http.js';


//banner下注意事项
export const mattersNeed = ()=>http('get',"/api/sz/Home/DefaultHomeV2Request?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&NowVersion=1");
//中上部导航按钮
export const anotherUrlList = ()=>http("get","api/sz/Home/ShortcutIconRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
//限时抢购
export const rushToPay = ()=>http("get","api/sz/Home/FlashSaleRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
//搜索栏信息
export const searcgInfo = ()=>http("get","api/sz/productSearch/defaultKeyword?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
//banner
export const bannerSwpier = ()=>http("get",'api/sz/Home/AdvertisementPhotoshootRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&json=%7B%22TypeCode%22:1011,%22PlatForm%22:1500%7D');
//新人大礼
export const newUserGift = ()=>http("get",'api/sz/members/newMemberLevel?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9');
//猜你喜欢
export const guessInfo = (id)=>http("get",'api/sz/floors/recommendFloor?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&CustomerGuid=9bbf8846-cc45-4de7-95fa-50667861aa8c&PageIndex='+id);
