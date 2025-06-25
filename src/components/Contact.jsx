const Contact = () => {
    return (
        <div id="contact" className="m-auto max-w-[1040px] p-4 py-16 md:pl-20">
            <h1 className="mb-14 text-center text-5xl font-bold text-[#203467]">
                Let's Chat!
            </h1>
            <form
                action="https://getform.io/f/ZdPPN2dK"
                method="POST"
                encType="multipart/form-data"
            >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="py-2 pl-1 text-sm uppercase">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="flex rounded-lg border-2 border-gray-300 p-3"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2 pl-1 text-sm uppercase">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            className="flex rounded-lg border-2 border-gray-300 p-3"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 pl-1 text-sm uppercase">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="flex rounded-lg border-2 border-gray-300 p-3"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 pl-1 text-sm uppercase">
                        Subject
                    </label>
                    <input
                        className="flex rounded-lg border-2 border-gray-300 p-3"
                        type="text"
                        name="subject"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 pl-1 text-sm uppercase">
                        Message
                    </label>
                    <textarea
                        className="rounded-lg border-2 border-gray-300 p-3"
                        rows="10"
                        name="message"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button className=" mt-4 w-full max-w-sm rounded-md bg-[#001b5e] p-4 text-gray-100">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
