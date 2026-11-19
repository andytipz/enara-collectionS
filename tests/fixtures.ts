import {products} from '../lib/content';import {productSchema} from '../lib/schema';
// Confirmed test-only availability. Never written into the commercial catalog.
export const fixture=productSchema.parse({...products.find(p=>p.id==='ENA-MUJ-003')!,status:'disponible',sizes:['S','M','L'],colors:products.find(p=>p.id==='ENA-MUJ-003')!.colors.map(c=>({...c,status:'disponible'}))});
export const fixtureProducts=[fixture,...products.filter(p=>p.id!==fixture.id)];
export const fixtureLine={id:fixture.id,color:fixture.colors[0].name,size:'M',quantity:1,unitPrice:fixture.price!};
