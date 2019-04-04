import http from '@/utils/http.js';

export const searchHotInfo = ()=>http('get',"/api/sz/Products/ProductHotWordRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
export const searchPageInfo = ()=>http('get',"/api/sz/productSearch/defaultKeyword?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9");
