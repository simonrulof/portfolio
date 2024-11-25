import Image from "next/image";
import router from "next/router";
import { use, useCallback, useEffect, useState } from "react";

export const Header:React.FC = () => {

    let colorHeader = "bg-transparent";

    /*const [scrollPosition, setScrollPosition] = useState(0);
    const handleScrollWindow = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);
        if(position > 300) colorHeader = "bg-primary";
        else colorHeader = "bg-transparent";
    }, []);

    const handleScrollWindow = useCallback(() => {
        console.log("scrolled");
    }, []);

    useEffect(() => {
        console.log("useffect started");
        window.addEventListener('scroll', handleScrollWindow);
        return () => window.removeEventListener('scroll', handleScrollWindow);
    }, [handleScrollWindow]);*/
    

    return <header className={`flex fixed ${colorHeader} place-content-center w-full h-1/6`}>
        <div className="w-1/6">

        </div>
        <div className="navbar text-background text-xl w-2/3">
            <div className="navbar-start">
                <div className="relative h-24 w-24">
                    <Image className="flex rounded-full object-cover"
                    src={"/simon_avatar.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="simon avatar"
                    />
                </div>
            </div>

            <div className="navbar-end">
                <div className="pr-7 transition ease-in-out duration-300 hover:text-foreground">About me</div>
                <div className="pr-7 transition ease-in-out duration-300 hover:text-foreground">Skills</div>
                <div className="pr-7 transition ease-in-out duration-300 hover:text-foreground">Projects</div>
                <div className="transition ease-in-out duration-300 hover:text-foreground">Contact</div>
            </div>
        </div>
        <label className="flex text-xl text-background w-1/6 items-center justify-end pr-5">
            <span className="pr-3">FR</span>
            <input type="checkbox" value="EN" className="toggle theme-controller" />
            <span className="pl-3">EN</span>
        </label>
    </header>
}