import {products,pages,categories,settings} from '@/lib/content';
export const dynamic='force-static';
export default function sitemap(){if(!settings.domain)return [];return ['','catalogo','novedades','colecciones','infantil',...categories.map(c=>c.id),...categories.filter(c=>c.kind==='collection').map(c=>'colecciones/'+c.id),...pages.map(p=>p.slug),...products.map(p=>'producto/'+p.slug)].map(p=>({url:settings.domain+'/'+(p?p+'/':'')}));}
