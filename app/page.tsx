"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: session, status } = useSession({
        required: false,
    });

    return (
        <div className="flex flex-col justify-center">
            <nav className="lg:fixed lg:top-0 lg:start-0 lg:px-20 lg:w-full mx-auto flex lg:flex-row flex-col space-y-4 justify-between items-center lg:items-center lg:z-20 lg:py-6 py-4">
                <Link href="#">
                    <div className="flex items-end space-x-2">
                        <Image
                            src="/money-bag.png"
                            width={40}
                            height={25}
                            alt="Affluent Logo"
                        />
                        <h1 className="font-extrabold  text-2xl">Affluent</h1>
                    </div>
                </Link>
                <div className="flex  bg-white shadow-lg text-sm rounded-full">
                    <Link
                        href="#hero"
                        className="hover:cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full active:bg-slate-400"
                    >
                        Why Affluent?
                    </Link>
                    <Link
                        href="#features"
                        className="hover:cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full active:bg-slate-400"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="hover:cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full active:bg-slate-400"
                    >
                        Pricing
                    </Link>
                </div>
                <div className="flex space-x-2 items-center">
                    {status == "authenticated" ? (
                        <>
                            <Link href="/dashboard">
                                <button className="px-4 py-2 bg-electric-violet-500 text-white rounded-xl">
                                    Dashboard
                                </button>
                            </Link>
                            <Link href="/api/auth/signout">
                                <Image
                                    src={session.user?.image!}
                                    height={40}
                                    width={40}
                                    alt="profile"
                                    className="rounded-full hover:cursor-pointer hover:shadow-lg"
                                />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/api/auth/signin">
                                <button className="text-sm font-semibold px-4 py-2 bg-electric-violet-500 text-white rounded-lg transition duration-200 ease-in-out active:scale-95">
                                    Login
                                </button>
                            </Link>
                            <button className="px-2 py-1 lg:px-4 lg:py-2 text-sm font-semibold rounded-md bg-lime-500 active:bg-lime-700 text-white transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
                                Start Free Trial
                            </button>
                        </>
                    )}
                </div>
            </nav>
            <main className="flex flex-col lg:max-w-5xl lg:mx-auto px-5 lg:px-0">
                <section
                    id="hero"
                    className="flex flex-col lg:justify-center lg:h-screen pt-5 lg:pt-0"
                >
                    <div className="lg:relative lg:overflow-hidden space-y-5 lg:space-y-0">
                        <Image
                            src="/landing-images/hero1.jpg"
                            width={1024}
                            height={720}
                            alt="Hero Image"
                            className="w-full rounded-xl"
                        />
                        <div className="lg:absolute lg:bottom-5 lg:left-0 lg:mx-5 lg:mb-5 space-y-2 p-5 rounded-xl bg-slate-700">
                            <h2 className="font-extrabold text-white text-3xl drop-shadow-lg">
                                Want a Personal Finance Guide?
                            </h2>
                            <p className="text-slate-200 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Assumenda sit autem iste a
                                neque tenetur atque, inventore aperiam quidem
                                natus, voluptate eligendi incidunt, eos quos.
                                Praesentium facere repudiandae rem inventore.
                            </p>
                            <button className="px-4 py-2 text-lg font-bold rounded-md bg-lime-500 text-white transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:bg-lime-700 ">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    id="features"
                    className="flex flex-col lg:justify-center lg:h-screen pt-5 lg:pt-0"
                >
                    <div className="flex flex-col space-y-5 ">
                        <h1 className="font-bold text-3xl">Features</h1>
                        <div className="flex flex-col lg:flex-row lg:space-x-4">
                            <Image
                                src="/landing-images/feat1.jpg"
                                height={300}
                                width={300}
                                alt="Featyre 1"
                                className="rounded-lg w-full"
                            />
                            <div className="flex flex-col justify-center space-y-2 lg:space-y-4 mt-2 lg:mt-0">
                                <h3 className="font-medium text-xl">
                                    Increase your Savings
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Perspiciatis optio placeat
                                    tempore suscipit voluptatem beatae, rem
                                    quasi amet ipsum eos delectus eum expedita
                                    voluptatibus animi dolore totam dolores odit
                                    sapiente.
                                </p>
                                <Link
                                    href="#"
                                    className="hover:underline underline-offset-4"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col lg:space-x-4 lg:flex-row-reverse">
                            <Image
                                src="/landing-images/feat2.jpg"
                                height={300}
                                width={300}
                                alt="Featyre 1"
                                className="rounded-lg w-full"
                            />
                            <div className="flex flex-col justify-center space-y-2 lg:space-y-4 mt-2 lg:mt-0">
                                <h3 className="font-medium text-xl">
                                    Personal Assistance
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Perspiciatis optio placeat
                                    tempore suscipit voluptatem beatae, rem
                                    quasi amet ipsum eos delectus eum expedita
                                    voluptatibus animi dolore totam dolores odit
                                    sapiente.
                                </p>
                                <Link
                                    href="#"
                                    className="hover:underline underline-offset-4"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-4">
                            <Image
                                src="/landing-images/feat3.jpg"
                                height={300}
                                width={300}
                                alt="Featyre 1"
                                className="rounded-lg w-full"
                            />
                            <div className="flex flex-col justify-center space-y-2 lg:space-y-4 mt-2 lg:mt-0">
                                <h3 className="font-medium text-xl">
                                    DIY - Do it Yourself
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Perspiciatis optio placeat
                                    tempore suscipit voluptatem beatae, rem
                                    quasi amet ipsum eos delectus eum expedita
                                    voluptatibus animi dolore totam dolores odit
                                    sapiente.
                                </p>
                                <Link
                                    href="#"
                                    className="hover:underline underline-offset-4"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="pricing"
                    className="flex flex-col space-y-5 lg:justify-center lg:h-screen pt-5 lg:pt-0"
                >
                    <h1 className="font-bold text-3xl">Pricing</h1>
                    <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-2 lg:space-y-0">
                        <div className="bg-black p-5 text-white rounded-lg">
                            <h2 className="font-bold text-3xl">Bronze</h2>
                            <h3 className="font-medium text-lg">
                                Some feaetures available
                            </h3>
                            <p className="text-md mt-2">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <p className="text-md mt-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <h4 className="text-5xl font-bold mt-2">Free</h4>
                            <button className="px-4 py-2 bg-white text-black text-lg font-bold mt-5 rounded-md transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                                Select Plan
                            </button>
                        </div>
                        <div className="bg-gray-500 p-5 text-white rounded-lg">
                            <h2 className="font-bold text-3xl">Silver</h2>
                            <h3 className="font-medium text-lg">
                                Some feaetures available
                            </h3>
                            <p className="text-md mt-2">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <p className="text-md mt-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <h4 className="text-5xl font-bold mt-2">₹2000</h4>
                            <button className="px-4 py-2 bg-white text-black text-lg font-bold mt-5 rounded-md transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                                Select Plan
                            </button>
                        </div>
                        <div className="bg-yellow-500 p-5 text-white rounded-lg">
                            <h2 className="font-bold text-3xl">Gold</h2>
                            <h3 className="font-medium text-lg">
                                Some feaetures available
                            </h3>
                            <p className="text-md mt-2">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <p className="text-md mt-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Asperiores amet eius quo iure
                                officiis. Recusandae tempora quo laudantium
                                reprehenderit veniam, voluptatum totam et fugit
                                debitis, veritatis earum quas numquam unde.
                            </p>
                            <h4 className="text-5xl font-bold mt-2">₹5000</h4>
                            <button className="px-4 py-2 bg-white text-black text-lg font-bold mt-5 rounded-md transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="text-sm px-5 lg:px-20 py-5 text-slate-700">
                Affluent &copy; {new Date().getFullYear()} | Developed by{" "}
                <Link
                    href="https://pratikstemkar.in"
                    className="underline"
                    target="_blank"
                >
                    Pratik
                </Link>{" "}
                | Source Code available on{" "}
                <Link
                    href="https://github.com/pratikstemkar/affluent"
                    target="_blank"
                    className="underline"
                >
                    GitHub
                </Link>
            </footer>
        </div>
    );
}
