'use client';
import {createContext,useContext,useState,useEffect,useCallback,type ReactNode} from 'react';
import type {Product,Settings,Category,GarmentType} from '@/lib/schema';
import {addLine,restoreLines,total,type Line} from '@/lib/commerce';
type Store={products:Product[];settings:Settings;categories:Category[];garmentTypes:GarmentType[];lines:Line[];setLines:(l:Line[])=>void;add:(l:Line)=>void;favorites:string[];toggle:(id:string)=>void;cartOpen:boolean;setCartOpen:(b:boolean)=>void;notice:string;notify:(s:string)=>void};
const Context=createContext<Store|null>(null);
export function StoreProvider({products,settings,categories,garmentTypes,children}:{products:Product[];settings:Settings;categories:Category[];garmentTypes:GarmentType[];children:ReactNode}){const [lines,setState]=useState<Line[]>([]);const [favorites,setFavorites]=useState<string[]>([]);const [cartOpen,setCartOpen]=useState(false);const [notice,notify]=useState('');
useEffect(()=>{try{setState(restoreLines(JSON.parse(localStorage.getItem('enara.cart.v1')||'[]')));const saved=JSON.parse(localStorage.getItem('enara.favorites.v1')||'[]');if(Array.isArray(saved))setFavorites([...new Set(saved.filter((x:unknown)=>typeof x==='string'))] as string[]);}catch{notify('No se pudieron leer los datos guardados. Puedes empezar una nueva selección.');}},[]);
const persist=(key:string,data:unknown)=>{try{localStorage.setItem(key,JSON.stringify(data));}catch{notify('El navegador no permite guardar tu selección. Se conservará solo durante esta visita.');}};
const setLines=useCallback((next:Line[])=>{try{total(next);setState(next);persist('enara.cart.v1',next);}catch(e){notify((e as Error).message);}},[]);
const add=(line:Line)=>{try{setLines(addLine(lines,line));notify('Prenda agregada al pedido.');setCartOpen(true);}catch(e){notify((e as Error).message);}};
const toggle=(id:string)=>{const next=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];setFavorites(next);persist('enara.favorites.v1',next);};
return <Context.Provider value={{products,settings,categories,garmentTypes,lines,setLines,add,favorites,toggle,cartOpen,setCartOpen,notice,notify}}>{children}<div className="sr-only" role="status" aria-live="polite">{notice}</div></Context.Provider>;}
export const useStore=()=>{const c=useContext(Context);if(!c)throw new Error('StoreProvider missing');return c;};
