import {categories,settings} from '@/lib/content';
import {Catalog} from '@/components/catalog';
import {notFound} from 'next/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return categories.filter(c=>c.kind==='collection').map(c=>({slug:c.id}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(c=>c.id===slug);return {title:c?.name,description:c?.description,alternates:settings.domain?{canonical:settings.domain+'/colecciones/'+slug+'/'}:undefined};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(c=>c.id===slug&&c.kind==='collection');if(!c)notFound();return <Catalog title={c.name} description={c.description} initial={{category:c.id}}/>;}
