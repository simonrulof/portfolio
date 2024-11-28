import Image from "next/image";
import localFont from "next/font/local";
import { useCallback, useEffect } from "react";
import { Skill } from "@/components/skill";

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

  const handleScrollWindow = useCallback(() => {
    console.log("scrolled");
  }, []);

  useEffect(() => {
      console.log("useffect started");
      window.addEventListener('scroll', handleScrollWindow);
      return () => window.removeEventListener('scroll', handleScrollWindow);
  }, [handleScrollWindow]);



  return (
    <main className="`${geistSans.variable} ${geistMono.variable}`">

      <div className="h-screen text-background place-content-center text-center" style={{ backgroundImage: `url("/pc_background.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div>
          <h1 className="pb-4 text-6xl">Berlanga Simon</h1>
          <h2 className="text-3xl">Ingénieur IA</h2>
        </div>
      </div>

      
        <div className="hero h-[70vh] w-2/3 ml-[16%] mr-[17%]">
          <div className="hero-content h-full w-full">
            <div className="relative w-1/4 pb-[38%]">
              <Image className="rounded-md object-contains"
                src="/photo_berlanga_simon.jpg"
                alt="Picture of the author"
                fill={true}
                />
            </div>
            <div className="w-3/4 h-full place-content-center text-center">
              <h3 className="text-5xl font-bold text-primary pl-4">A propos de moi</h3>
              <p className="w-full pl-4 pt-4 text-xl text-balance">
                Paragraph about me honestly i dont know for the moment but something meaningfull, one paragraph not more, and that can best describe myself in order for me to find a job
              </p>
            </div>
          </div>
        </div>

        <div className="h-[35vh] w-full bg-primary text-background">
          <div className="h-full w-2/3 ml-[16%] mr-[17%] place-content-center text-center">
            <h3 className="text-5xl font-bold pl-4">Actuellement</h3>
            <p className="w-full pl-4 pt-4 text-xl">
              Looking for a job
            </p>
            
          </div>
        </div>

        <div className="">
          <div className="flex h-full w-[2/3] ml-[16%] mr-[17%]">
            <div className="h-full w-[60%]">
              <div className="h-full w-[90%]">
              <Skill skill_name={"Test"} skill_level={45} />
              </div>
            </div>
            <div className="h-full w-[40%] bg-red-500">
              <div className="h-full w-full p-4">
                <div className="relative w-full pb-[142%] bg-green-500">
                  <Image className="object-contains"
                  src="/CV_BERLANGA_SIMON.jpg"
                  alt="CV of the author"
                  fill={true}
                  />
                </div>
                <div className="flex pt-4 text-align-center place-content-center w-full">
                  <a href="/CV_BERLANGA_SIMON.pdf" className="btn items-center text-2xl bg-primary text-background" download>Download PDF</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </main>
  );
}
