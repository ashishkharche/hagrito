import React from "react";

export const Community = () => {
    return (
        <section className="my-20">
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Find us!</h2>
            <br/>
            <ul className="grid gap-6 sm:grid-cols-2 xl:gap-8">
                <li>
                    <a
                        href="https://github.com/ashishkharche/hagrito"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/github.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">GitHub</h3>
                            <p>Source code of Hagrito!</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ashish-kharche-570653132/"
                        className="flex items-start space-x-4"
                    >
                        <div className="flex-auto" style={{textAlign: "left"}}>
                            <img
                                src="/img/linkedin.svg"
                                height="100px"
                            />
                            <h3 className="font-bold">LinkedIn</h3>
                            <p>Find me on LinkedIn!</p>
                        </div>
                    </a>
                </li>
            </ul>
            <p className="mt-8">
                Thank you for read the technical essentials handbook. You can contribute to the content by sending a PR on {" "}
                <a className="hover:underline" href="https://github.com/ashishkharche/hagrito">
                    GitHub
                </a>
                .
            </p>
        </section>
    );
};
