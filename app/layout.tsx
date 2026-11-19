import type {Metadata} from 'next';
import type {CSSProperties} from 'react';
import {products,categories,settings,garmentTypes} from '@/lib/content';
import {StoreProvider} from '@/components/store';
import {Header,Footer,Cart,FloatingCart} from '@/components/shell';
import './globals.css';
export const metadata:Metadata={title:{default:settings.seoTitle,template:'%s · '+settings.name},description:settings.seoDescription,metadataBase:settings.domain?new URL(settings.domain):undefined,robots:{index:settings.indexable&&!settings.demo,follow:settings.indexable&&!settings.demo},icons:settings.favicon?{icon:settings.favicon}:undefined,openGraph:{title:settings.seoTitle,description:settings.seoDescription,type:'website',locale:'es_EC',siteName:settings.name}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body style={{'--wine':settings.accent,'--cream':settings.cream} as CSSProperties}><StoreProvider products={products} categories={categories} garmentTypes={garmentTypes} settings={settings}><a href="#main" className="skip-link">Saltar al contenido</a><Header/><main id="main">{children}</main><Footer/><FloatingCart/><Cart/></StoreProvider></body></html>;}
