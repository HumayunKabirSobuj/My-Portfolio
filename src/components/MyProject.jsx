import { Link } from "react-router-dom";


const MyProject = () => {
    return (
        <div>
            <h1 className="text-4xl mb-5 font-bold text-[#f86f03] text-center py-5 underline">My Projects</h1>
            <div className="flex justify-between gap-5 items-center lg:flex-row flex-col px-5">
                <div className="card  bg-[#330687] bg-opacity-60 bg-cover py-5 shadow-xl flex-1">

                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white  font-bold ">Canvas Crafts</h2>
                        <p className="text-base  text-white">Canvas Crafts is a specialized online store focused on showcasing and selling various art and craft items. The website is designed with a specific arts & crafts theme, allowing users to browse, add, and manage arts & crafts products.</p>
                        <div className="text-center space-x-5"  >
                            <Link to="https://assignment-10-ph-b9.netlify.app/" className="btn btn-sm btn-info">Live</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/Canvas-Crafts-Client" className="btn btn-sm btn-info">Client Code</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/Canvas-Crafts-Server" className="btn btn-sm btn-info">Server Code</Link>
                        </div>

                    </div>
                </div>
                <div className="card  bg-[#330687] bg-opacity-60 bg-cover py-5 shadow-xl flex-1">

                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white  font-bold ">SharePlanty</h2>
                        <p className="text-base  text-white">SharePoint is an innovative platform designed to facilitate community food sharing and reduce food surplus. As a Full Stack Developer, you will create a responsive, feature-rich website using React, Firebase, Node.js, and MongoDB.</p>
                        <div className="text-center space-x-5"  >
                            <Link to="https://assignment-11-ph-b9-c0007.netlify.app/" className="btn btn-sm btn-info">Live</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/SharePlanty-client" className="btn btn-sm btn-info">Client Code</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/SharePlanty-server" className="btn btn-sm btn-info">Server Code</Link>
                        </div>

                    </div>
                </div>
                <div className="card  bg-[#330687] bg-opacity-60 bg-cover py-5 shadow-xl flex-1">

                    <div className="card-body space-y-5">
                        <h2 className="card-title text-3xl text-white  font-bold ">ContestHub</h2>
                        <p className="text-base  text-white">Welcome to ContestHub, the ultimate platform for launching and managing creative contests. Whether it is a design competition or coding challenge, ContestHub streamlines contest creation and winner selection, fostering creativity and celebrating excellence.</p>
                        <div className="text-center space-x-5"  >
                            <Link to="https://assignment-12-humayun-ph-b9.netlify.app/" className="btn btn-sm btn-info">Live</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/ContestHub-client" className="btn btn-sm btn-info">Client Code</Link>
                            <Link to="https://github.com/HumayunKabirSobuj/ContestHub-server" className="btn btn-sm btn-info">Server Code</Link>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MyProject;