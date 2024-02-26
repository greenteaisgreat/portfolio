import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="m-auto max-w-[1040px] p-4 py-8 md:pl-20">
            <h1 className="py-2 text-center text-4xl font-bold text-[#203467]">
                Contact
            </h1>
            <form action="" method="POST" encType="multipart/form-data">
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="text" name="phone" />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" name="subject" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows="10" name="message">
                        {' '}
                    </textarea>
                </div>
            </form>
        </div>
    );
};

export default Contact;
