export const Header:React.FC = () => {
    return <header className="flex bg-primary place-content-center">
        <div className="w-1/6">

        </div>
        <div className="navbar text-background text-2xl w-2/3">
            <div className="navbar-start">
                LOGO
            </div>

            <div className="navbar-end">
                <div className="pr-3 transition ease-in-out duration-300 hover:text-foreground">About me</div>
                <div className="pr-3 transition ease-in-out duration-300 hover:text-foreground">Skills</div>
                <div className="pr-3 transition ease-in-out duration-300 hover:text-foreground">Projects</div>
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