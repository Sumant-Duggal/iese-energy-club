import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Breakthrough Energy — Design Preview',description:'An interactive energy website design preview. Media placeholders await supplied content.',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
