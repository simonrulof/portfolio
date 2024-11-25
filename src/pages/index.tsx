import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const handleScroll = (e) => { console.log(e) };
  useEffect(() => {
    console.log("STARTED");
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <main className="`${geistSans.variable} ${geistMono.variable}`">
      <div className="h-screen" style={{ backgroundImage: `url("/pc_background.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
      </div>
      <div className="h-screen">
        
      </div>
    </main>
  );
}
