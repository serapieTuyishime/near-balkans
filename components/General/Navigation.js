import Head from "next/head";
import Image from "next/image";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

export default function Navigation() {
    const [ismodalOpen, setModalState] = useState(false);
    function openModal() {
        setModalState(true);
    }
    return (
        <div className="bg-white sticky top-0 z-10">
            <Head>
                <title>Near balkans</title>
            </Head>
            
                <Modal open={ismodalOpen} close={()=>setModalState(false)}/>
            
            <div>
                <div className="py-6 px-6 lg:px-26 flex justify-between header">
                    <div className="flex gap-2 items-center">
                        <svg
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="lg:w-[39px] w-[30px]"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.5 1.41C9.509 1.41 1.41 9.509 1.41 19.5S9.509 37.59 19.5 37.59s18.09-8.099 18.09-18.09S29.491 1.41 19.5 1.41ZM0 19.5C0 8.73 8.73 0 19.5 0S39 8.73 39 19.5 30.27 39 19.5 39 0 30.27 0 19.5Z"
                                fill="#3F4246"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.515 6.525C23.852 3.199 21.685 1.41 19.5 1.41V0c3.006 0 5.537 2.418 7.276 5.895 1.759 3.518 2.826 8.33 2.826 13.605 0 5.276-1.067 10.087-2.826 13.605C25.037 36.582 22.506 39 19.5 39v-1.41c2.184 0 4.352-1.789 6.015-5.115 1.642-3.284 2.678-7.87 2.678-12.975 0-5.104-1.036-9.69-2.678-12.975Z"
                                fill="#3F4246"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M28.904 6.633C26.453 3.365 23.12 1.41 19.5 1.41V0c4.164 0 7.88 2.252 10.532 5.787 2.65 3.534 4.27 8.385 4.27 13.713 0 5.328-1.62 10.178-4.27 13.713C27.38 36.748 23.663 39 19.5 39v-1.41c3.621 0 6.953-1.955 9.404-5.223 2.45-3.268 3.988-7.815 3.988-12.867 0-5.052-1.537-9.6-3.988-12.867Z"
                                fill="#3F4246"
                            ></path>
                        </svg>
                        <label className="hidden lg:inline-block font-medium text-lg font-apple header__logo">
                            Dacade
                        </label>
                        |
                        <svg
                            className="lg:hidden"
                            width="29"
                            height="29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m22.697 2.318-5.683 8.437a.605.605 0 0 0 .897.793L23.505 6.7a.227.227 0 0 1 .377.172v15.19a.226.226 0 0 1-.4.146L6.573 1.963A2.898 2.898 0 0 0 4.363.937H3.77A2.896 2.896 0 0 0 .875 3.834v21.395a2.896 2.896 0 0 0 5.366 1.516l5.683-8.438a.605.605 0 0 0-.897-.793l-5.594 4.849a.227.227 0 0 1-.378-.172V7a.227.227 0 0 1 .4-.145L22.363 27.1a2.898 2.898 0 0 0 2.212 1.025h.591a2.896 2.896 0 0 0 2.896-2.896V3.834a2.896 2.896 0 0 0-5.365-1.516Z"
                                fill="#000"
                            ></path>
                        </svg>
                        <Image
                            className="hidden lg:inline-block"
                            width={120}
                            height={40}
                            alt="Balkans image"
                            src="/balkans.png"
                        />
                    </div>
                    <div className="flex items-center gap-20 ">
                        <label
                            className="hidden lg:inline-block text-lg cursor-pointer"
                            onClick={openModal}
                        >
                            Start the course
                        </label>
                        <Button text="Create wallet" fill />
                    </div>
                </div>
            </div>

        </div>
    );
}
