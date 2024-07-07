


const Navbar = () => {
    const navLinks = <>

        <li><a href="#home">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#education">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#MyService">My Service</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>


    </>
    return (
        <div>

            <div className="navbar fixed  bg-[#170550]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white hidden lg:flex">Md. Humayun Kabir Sobuj</a>
                    <a className="btn btn-ghost text-xl text-white lg:hidden flex">Humayun</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-3xl btn-sm">Hire Me!</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;