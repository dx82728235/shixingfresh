import http from '@/utils/http.js';

export const rushToPay = ()=>http('get',"/api/sz/Home/DefaultHomeV2Request?accesstoken=bd6bad018fe97304&customerguid=9bbf8846-cc45-4de7-95fa-50667861aa8c&sourcetype=9&NowVersion=1");