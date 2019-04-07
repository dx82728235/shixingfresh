import http from '@/utils/http.js';

export const productsPageList = (id)=>http('get',"/api/sz/ProductRequests/ProductMultiConditionRequest?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&json=%7B%22CategoryIds%22:["+ id +"],%22PageIndex%22:1,%22PageSize%22:20,%22OrderDirectionType%22:0,%22OrderFieldType%22:0,%22sourcetype%22:%229%22%7D");