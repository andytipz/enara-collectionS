import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const slug='integration-lifecycle-probe';
const files=[`content/products/${slug}.json`,`content/products/${slug}-girl.json`,'content/garment-types/probe-type.json'];
for(const f of files)if(fs.existsSync(f))throw new Error('Entrada temporal existente: '+f);
const sample=JSON.parse(fs.readFileSync('content/products/ENA-MUJ-003.json','utf8'));
const boy={...sample,id:slug,slug,name:'Prueba temporal Niño',category:'nino',subcategory:'probe-type',colors:sample.colors.map((c:{id:string},i:number)=>({...c,id:'probe-C'+i}))};
const girl={...boy,id:slug+'-girl',slug:slug+'-girl',name:'Prueba temporal Niña',category:'nina',colors:boy.colors.map((c:{id:string},i:number)=>({...c,id:'girl-C'+i}))};
const build=()=>execFileSync(process.platform==='win32'?'npm.cmd':'npm',['run','build'],{stdio:'inherit'});
try{
fs.writeFileSync(files[2],JSON.stringify({id:'probe-type',name:'Tipo temporal',order:99,hidden:false}));
fs.writeFileSync(files[0],JSON.stringify(boy));fs.writeFileSync(files[1],JSON.stringify(girl));build();
for(const p of [boy,girl])assert.ok(fs.existsSync(`out/producto/${p.slug}/index.html`));
console.log('ALTA: Niño, Niña y subcategoría nuevos generan rutas desde contenido.');
boy.colors[0].name='Color editado';boy.colors[0].images=boy.colors[0].images.slice(1);boy.colors[1].visible=false;
fs.writeFileSync(files[0],JSON.stringify(boy));fs.writeFileSync(files[1],JSON.stringify({...girl,visible:false}));build();
const publicProducts=JSON.parse(fs.readFileSync('out/catalog.json','utf8')).products;
const edited=publicProducts.find((p:{id:string})=>p.id===slug);
assert.equal(edited.colors[0].name,'Color editado');assert.equal(edited.colors[0].images.length,boy.colors[0].images.length);assert.ok(!edited.colors.some((c:{id:string})=>c.id===boy.colors[1].id));
assert.ok(!fs.existsSync(`out/producto/${girl.slug}/index.html`));assert.ok(!publicProducts.some((p:{id:string})=>p.id===girl.id));
console.log('EDICIÓN Y OCULTACIÓN: fotos y color actualizados; variante y producto ocultos excluidos.');
}finally{for(const f of files)if(fs.existsSync(f))fs.unlinkSync(f);build();for(const s of [slug,slug+'-girl'])assert.ok(!fs.existsSync(`out/producto/${s}/index.html`));console.log('ELIMINAR: contenido original y exportación restaurados sin rutas residuales.');}
