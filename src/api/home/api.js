import http from '@/utils/http.js';

export const mattersNeed = ()=>http('get',"/api/sz/Home/DefaultHomeV2Request?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&NowVersion=1");
export const anotherUrlList = ()=>http("get","api/sz/Home/ShortcutIconRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
export const rushToPay = ()=>http("get","api/sz/Home/FlashSaleRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
export const searcgInfo = ()=>http("get","api/sz/productSearch/defaultKeyword?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");