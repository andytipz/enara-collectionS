import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {products,settings} from '../lib/content';
fs.writeFileSync('out/catalog.json',JSON.stringify({products,settings}));
async function optimize(dir:string){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())await optimize(p);else if(/\.(jpg|jpeg|png|webp|avif)$/.test(f.name)){const output=await sharp(fs.readFileSync(p),{limitInputPixels:40000000}).rotate().resize({width:2200,height:2200,fit:'inside',withoutEnlargement:true}).toBuffer();fs.writeFileSync(p,output);}}}
await optimize('out/media');
fs.writeFileSync('out/_headers',`/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'\n${settings.demo||!settings.indexable?'  X-Robots-Tag: noindex, nofollow\n':''}/catalog.json\n  Cache-Control: no-store\n`);
console.log('Catálogo actualizable, imágenes optimizadas y cabeceras preparados en out/.');
