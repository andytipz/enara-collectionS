import {settings} from '@/lib/content';
export const dynamic='force-static';
export default function robots(){return {rules:{userAgent:'*',...(settings.indexable&&!settings.demo?{allow:'/'}:{disallow:'/'})},...(settings.domain?{sitemap:settings.domain+'/sitemap.xml'}:{})};}
