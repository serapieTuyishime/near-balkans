import Head from "next/head";
import Image from "next/image";
import Button from "../components/General/Button";
import Modal from "../components/General/Modal";
import Module from "../components/home/Module";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [ismodalOpen, setModalState] = useState(false);

    function closeHandler() {
        setModalState(true);
    }
    return (
        <>
            {ismodalOpen && <Modal />}
            <div className="h-56 w-screen grid grid-cols-2 px-8 gap-8 lg:opacity-0 container">
                <div className="bg-purpleRadial bg-opacity-10"></div>
                <div className="bg-purpleRadial bg-opacity-10"></div>
            </div>
            <div className="pb-32 pt-3 grid text-center justify-items-center content-center container mx-auto px-4">
                <h1 className="px-18 text-4xl lg:text-7xl  capitalize font-medium  text-dark leading-snug w-full">
                    Get{" "}
                    <span className="bg-gradient-to-b from-purple-300 via-blue-300 to-green-400 bg-clip-text text-transparent ">
                        NEAR
                    </span>{" "}
                    Certified!
                </h1>
                <p className="pt-5 lg:pt-8 pb-24 lg:text-xl text-lg text-dark lg:px-40 ">
                    We, in NEAR Balkans, know how important it is to have
                    regional and local support. Now you can become NEAR
                    certified in a regional language of preference and connect
                    with our team to support your further growth within the NEAR
                    ecosystem.
                </p>
                <Link href="#learning" className="max-w-max ">
                    <svg
                        width="28"
                        height="28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.25 14c0-6.765-5.485-12.25-12.25-12.25S1.75 7.235 1.75 14 7.235 26.25 14 26.25 26.25 20.765 26.25 14ZM0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Zm13.125-6.125a.875.875 0 0 1 1.75 0v10.138l3.756-3.757a.875.875 0 1 1 1.238 1.238l-5.25 5.25a.875.875 0 0 1-1.238 0l-5.25-5.25a.875.875 0 1 1 1.238-1.238l3.756 3.757V7.875Z"
                            fill="#676767"
                            opacity="0.3"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div className="pt-28 lg:pt-0 font-dark text-center font-medium text-3xl lg:text-5xl w-3/5 lg:w-2/5 leading-7 pb-14 text-dark container mx-auto">
                Making your NEAR learning easy.
            </div>
            <div className="flex flex-col lg:flex-row lg:pt-28 lg:px-36 gap-8 lg:gap-16 lg:justify-between lg:pb-6  relative container mx-auto">
                <div className="bg-fullRadial h-[30rem] w-full max-w-[30rem] opacity-[0.4] absolute top-0 -z-10 right-16 hidden lg:block"></div>
                <div className="w-full lg:w-2/5 grid gap-2 content-center justify-items-center lg:justify-items-start text-center  lg:text-left order-last lg:order-none px-8 lg:pl-2">
                    <label className="text-2xl lg:text-4xl font-medium capitalize text-dark">
                        Open NEAR Wallet
                    </label>
                    <span
                        id="#learning"
                        className="text-dark mb-6 lg:text-lg lg:leading-5"
                    >
                        Opening a NEAR wallet is the first step and an essential
                        part of joining the NEAR community as well as starting
                        this course.
                    </span>
                    <Button text="Create wallet" />
                </div>
                <div className="w-full lg:w-2/5 lg:flex lg:justify-end ">
                    <Image
                        src="/logo.png"
                        height={100}
                        width={100}
                        alt="Logo image"
                        className="object-contain h-44 w-44 lg:w-4/5 lg:h-80  mx-auto"
                    />
                </div>
            </div>
            <div className="max-w-max mx-auto hidden lg:block">
                <svg
                    width="164"
                    height="132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984"
                        stroke="#676767"
                        strokeWidth="2"
                        strokeMiterlimit="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <div className="module  flex flex-col lg:justify-between lg:flex-row sm:px-32 py-18 lg:py-6 gap-8 lg:gap-0  relative container mx-auto ">
                <div className="bg-greenRadial opacity-[0.4] top-0 left-0 absolute h-[30rem] w-[30rem] -z-10 hidden lg:block"></div>
                <div className="w-full lg:w-2/5  ">
                    <Image
                        src="/target.png"
                        height={100}
                        width={100}
                        alt="Logo image"
                        className="object-cover h-44  w-44 lg:w-4/5 lg:h-72 mx-auto lg:ml-0"
                    />
                </div>
                <div className="w-full lg:w-1/2 grid gap-6 content-center lg:justify-items-start justify-items-center text-center px-8 lg:pl-2 text-dark">
                    <label className="text-2xl lg:text-4xl font-medium ">
                        Complete the course
                    </label>
                    <label className="text-lg">
                        In three simple modules, learn :
                    </label>
                    <Module text="Essential components" icon="/icon1.png" />
                    <Module
                        text="How to write smart contacts on NEAR"
                        icon="/icon2.png"
                    />
                    <Module
                        text="How to build dapps on the NEAR blockchain"
                        icon="/icon3.png"
                    />
                </div>
            </div>
            <div className="max-w-max mx-auto hidden lg:block">
                <svg
                    width="164"
                    height="132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026"
                        stroke="#676767"
                        strokeWidth="2"
                        strokeMiterlimit="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <div className="container mx-auto text-dark grid gap-2 lg:gap-0 content-center px-4 lg:px-0 text-center">
                <label className="text-2xl  font-medium capitalize">
                    Claim NEAR certificate
                </label>
                <label className="text-lg lg:text-4xl lg:w-1/3 mx-auto lg:leading-6">
                    Upon course completion, receive the NEAR dev 101 certificate
                    as an NFT on your NEAR wallet.
                </label>
                <Image
                    className="my-4 lg:my-20 lg:w-1/2 mx-auto"
                    src="/certificate.png"
                    alt="Certficiate"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className=" get-started  flex flex-col lg:flex-row sm:px-32 gap-2 sm:pt-4 pt-36 relative">
                <div className="bg-fullgreenRadial rotate-180 opacity-[0.4]  left-0 absolute h-full w-full -z-10 hidden lg:block"></div>
                <div className="w-full lg:w-2/5 grid gap-5 content-center justify-items-center text-center order-last lg:order-none px-8 lg:pl-2">
                    <label className="text-2xl lg:text-3xl font-medium capitalize text-dark">
                        NEAR development 101
                    </label>
                    <Button text="Start the course" shadowed />
                </div>
                <div className="w-full lg:w-3/5 lg:h-96 ">
                    <Image
                        src="/logo2.png"
                        height={100}
                        width={100}
                        alt="Logo image"
                        className="object-contain lg:object-cover 2xl:object-contain h-44 lg:h-full lg:w-3/5 w-44 mx-auto z-5"
                    />
                </div>
            </div>
        </>
    );
}
