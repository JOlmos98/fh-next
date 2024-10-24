import { Metadata } from "next";

 //Con mr + Enter:
 export const metadata:Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ["words"]  
 };

export default function About(){
    return( 
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <span className="text-5xl">About</span>
    </main>
    )
}   