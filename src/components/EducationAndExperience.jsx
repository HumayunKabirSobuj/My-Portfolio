
import { FaShoppingBag, FaUserGraduate } from "react-icons/fa";

const EducationAndExperience = () => {
    return (
        <div className="flex lg:flex-row flex-col  justify-between gap-6 px-6">
            <div className="space-y-5 flex-1">
                <h1 className="text-white text-4xl font-bold flex gap-1"><FaUserGraduate></FaUserGraduate> Education</h1>

                <div>

                    <h1 className="text-blue-500 font-bold text-3xl ml-5 mb-3">SSC</h1>
                    <div className="ml-5 space-y-2">
                        <p className="text-white text-opacity-50 font-medium">January 2018 - December 2020</p>
                        <p className="text-white text-2xl font-bold">Bondiara High School, <br /> Pirganj, Thakurgaon</p>
                        <p className="text-white text-opacity-50 font-medium">Complete SSC from Bondiara High School , Pirganj , Thakurgaon. Complete Studies Here From January 2018 To December 2020.</p>
                    </div>
                </div>
                <div>

                    <h1 className="text-blue-500 font-bold text-3xl ml-5 mb-3">Diploma In Engineering</h1>
                    <div className="ml-5 space-y-2">
                        <p className="text-white text-opacity-50 font-medium">Excepted Graduation 2024</p>
                        <p className="text-white text-2xl font-bold">Rangpur Polytechnic Institute,  <br />Ranpgur</p>
                        <p className="text-white text-opacity-50 font-medium">I am a Computer Technology Student Here. Now 8th Semester Running.  I accepted Graduation in 2024.</p>
                    </div>
                </div>

            </div>
            <div className="space-y-5 flex-1">
                <h1 className="text-white text-4xl font-bold flex gap-1"><FaShoppingBag /> Experience</h1>

                <div>

                    <h1 className="text-blue-500 font-bold text-3xl ml-5 mb-3">Jr. Web Development</h1>
                    <div className="ml-5 space-y-2">
                        <p className="text-white text-opacity-50 font-medium">Self-Employed / Freelance</p>
                        <p className="text-white text-opacity-50 font-medium">April 2023 - Present</p>
                       
                        <p className="text-white text-opacity-50 font-medium">Developed web applications using MongoDB, Express.js, React, Node.js, and Next.js. Built responsive UIs with React and Tailwind CSS. Created RESTful APIs and managed databases. Collaborated with clients, solved complex problems, and stayed updated with industry trends.</p>
                    </div>
                </div>
               

            </div>
            

        </div>
    );
};

export default EducationAndExperience;