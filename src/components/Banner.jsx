import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center px-5 gap-5 py-5 "> 

            <div className="flex-1 space-y-5 mt-[70px]">
                <h1 className="text-white text-2xl font-bold ">HEY! I AM <br /> MD. HUMAYUN KABIR SOBUJ</h1>
                <h1 className="text-white text-xl font-bold">And I am a <span className="text-[#f86f03]">Frontend Developer</span></h1>
                <p className="text-white text-base font-medium space-y-2">I am a skilled web developer proficient in MongoDB, Express.js, Node.js, Next.js, React.js, JavaScript, CSS, Tailwind, and HTML. With comprehensive experience in every stage of web development, I excel at creating user-friendly web applications. My passion lies in building dynamic and responsive full-stack websites that provide a seamless user experience. I thrive on tackling complex challenges and continuously learning new technologies to enhance my skill set and deliver high-quality web solutions.</p>

                <Link to="https://drive.google.com/u/0/uc?id=11onX7sCqvCseSnv6HspmI9OPvn-fNfIt&export=download" className="btn bg-[#f86f03] rounded-3xl mr-3">Dawnlode Resume</Link>
                <button className="btn bg-[#f86f03] rounded-3xl ">Dawnlode CV</button>
            </div>
            <div className="flex-1 rounded-2xl  flex justify-center">
                <img src="https://i.ibb.co/dJG1cdD/Banner-Image.png"className=" h-[450px] " alt="" />
            </div>


        </div>
    );
};

export default Banner;