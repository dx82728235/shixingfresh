import http from '@/utils/http.js';

export const productsPageDetails = (id)=>http('get',"/api/sz/product/detail?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&ssuId=" + id);
export const ueserComment = (id)=>http('get',"/api/sz/productComment/inProductDetail?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&productId=" + id);
