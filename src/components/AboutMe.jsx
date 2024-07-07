import { Link } from "react-router-dom";


const AboutMe = () => {
    return (
        <div className="">
            <h1 className="text-[#f86f03]  text-3xl font-bold text-center py-10">About Me !</h1>
            <div className=" flex justify-between gap-10 items-center px-10 lg:flex-row flex-col">
                <div className="">
                    {/* <img src="https://i.ibb.co/9prPjc6/myPhoto.jpg" className="w-3/4 h-3/4" alt="" /> */}
                    <img src="https://i.ibb.co/9prPjc6/myPhoto.jpg" className="rounded-2xl h-[400px] lg:w-3/4 w-full " alt="" />

                </div>


                <div className="flex-1 space-y-5">
                    <h1 className="text-[#DEE4F3] text-3xl font-bold">Hey There I am Md. Humayun Kabir Sobuj</h1>
                    <h1 className="text-blue-500 text-xl">Front End Web Developer</h1>
                    <p className="text-white text-opacity-70 font-medium">I am a MERN Stack Web Developer specializing in building robust and scalable web applications. My expertise includes MongoDB, Express.js, React, Node.js, and Next.js, allowing me to create comprehensive solutions with seamless user experiences and efficient backend operations. I excel in crafting dynamic interfaces, developing RESTful APIs, and managing databases. Dedicated to continuous learning and staying current with industry trends, I ensure my projects are innovative and high-quality. As a problem-solver and team player, I aim to build applications that meet client needs and provide exceptional user experiences.</p>
                    <div className="space-y-1">
                        <p className="text-white text-opacity-60 font-medium">Birthday  : 15 JUL 2004</p>
                        <p className="text-white text-opacity-60 font-medium">Phone     : +8801747477746</p>
                        <p className="text-white text-opacity-60 font-medium">Email     : md.humayunkabirsobuj506034@gmail.com</p>
                        <p className="text-white text-opacity-60 font-medium">From      : Savar, Dhaka</p>
                        <p className="text-white text-opacity-60 font-medium">Language  : Bangla, English</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="btn btn-info text-bold text-white">GET IN TOUCH</button>
                        <div className="space-x-2">
                            <Link to='https://web.facebook.com/md.humayunkabirsobuj506034'>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span><img className="bg-white" src="https://i.ibb.co/Z2S214D/Facebook-Logosu-modified-removebg-preview.png" alt="" /></span>
                                    </div>
                                </div>
                            </Link>
                            <Link to='https://github.com/HumayunKabirSobuj'>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span><img className="bg-white" src="https://i.ibb.co/tmbJL8f/github-modified.png" alt="" /></span>
                                    </div>
                                </div>
                            </Link>
                            <Link to='https://www.linkedin.com/in/mdhumayun123/'>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span><img className="bg-white" src="https://i.ibb.co/F0Zb4yq/cropped-image.png" alt="" /></span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;