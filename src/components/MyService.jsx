

const MyService = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-[#f86f03] text-center mb-10">My Service</h1>
            <div className="flex justify-center lg:flex-row flex-col gap-5 lg:px-10 px-5">

                <div>
                    <div className="card bg-[#330687] bg-opacity-75 py-5 shadow-xl">
                        <figure>
                            <img
                                className="w-20"
                                src="https://i.ibb.co/Wfc2xzR/fontEnd.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-white mx-auto font-bold ">Front-End Development</h2>
                            <p className="text-white text-base text-center">Provide top-notch front-end development services, specializing in crafting responsive and user-friendly websites and web applications. Utilizing modern technologies such as HTML, CSS, JavaScript, and frameworks like React, I ensure high-quality results tailored to meet client needs.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-[#330687] bg-opacity-75 py-5 shadow-xl">
                        <figure>
                            <img
                                className="w-20"
                                src="https://i.ibb.co/7zZTMgr/backend.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-white mx-auto font-bold ">Back-End Development</h2>
                            <p className="text-white text-base text-center">I deliver expert backend development services, creating robust and scalable server-side applications with Node.js and Express.js. My focus is on ensuring seamless performance and top-notch security for all projects.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-[#330687] bg-opacity-75 py-5 shadow-xl">
                        <figure>
                            <img
                                className="w-20"
                                src="https://i.ibb.co/ys0P8Km/database.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-white mx-auto font-bold ">Database</h2>
                            <p className="text-white text-base text-center">I deliver expert MongoDB database services, focusing on designing, implementing, and managing scalable and high-performance NoSQL databases. My goal is to ensure efficient data storage, fast retrieval, and robust security for your applications.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;