import {Home} from '@/components/home';
import {home,settings} from '@/lib/content';
export const metadata={alternates:settings.domain?{canonical:settings.domain+'/'}:undefined};
export default function Page(){return <Home home={home}/>;}
