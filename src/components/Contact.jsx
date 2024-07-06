import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fd0zo99', 'template_r1yphzh', form.current, {
                publicKey: 'Wg1YvceXKg63zFwj8',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Message Send Done",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    }).then(() => {
                       
                        window.location.reload();
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <h1 className="text-4xl mb-5 font-bold text-[#3b82f6] text-center py-5 underline">Contact</h1>
            <div className='flex justify-between lg:flex-row flex-col px-8 items-center'>
                <div className='flex-1 '>

                    <div className='space-y-6 '>
                        <h1 className='text-3xl font-bold text-white text-center'>Md. Humayun Kabir Sobuj</h1>
                        <h1 className='text-3xl font-bold text-white text-center'>+8801747477746</h1>
                        <h1 className='text-3xl font-bold text-white text-center'>Savar, Dhaka</h1>
                    </div>

                </div>
                <div className='flex-1'>
                    <form className='text-center' ref={form} onSubmit={sendEmail}>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white text-xl font-bold">Your Name?</span>

                            </div>
                            <input className="input input-bordered w-full" type="text" name="user_name" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white text-xl font-bold">Your Email</span>

                            </div>
                            <input className="input input-bordered w-full" type="email" name="user_email" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white text-xl font-bold">Message</span>

                            </div>
                            <textarea

                                className="textarea textarea-bordered textarea-lg w-full " name="message"></textarea>
                        </label>

                        <input className='btn btn-info w-1/2 my-8' type="submit" value="Send" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;