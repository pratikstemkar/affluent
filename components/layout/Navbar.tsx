"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: false,
    });

    return (
        <nav className="flex flex-col justify-between h-screen p-10 w-1/6">
            <div>
                <Link
                    href="/"
                    className="flex items-end space-x-2 justify-center"
                >
                    <Image
                        src="/money-bag.png"
                        width={40}
                        height={25}
                        alt="Affluent Logo"
                    />
                    <h1 className="font-extrabold text-2xl">Affluent</h1>
                </Link>
                <div className="flex flex-col items-center mt-10">
                    <Image
                        src={session?.user?.image!}
                        width={80}
                        height={80}
                        alt="Affluent Logo"
                        className="rounded-full"
                    />
                    <h4 className="font-semibold mt-2">
                        {session?.user?.name}
                    </h4>
                </div>
                <div className="flex flex-col space-y-2 mt-10">
                    <button className="px-10 py-4 rounded-xl bg-opacity-20 bg-electric-violet-500 text-electric-violet-500 transition duration-200 ease-in-out active:scale-95 active:bg-opacity-40 hover:bg-electric-violet-500 hover:bg-opacity-20">
                        Dashboard
                    </button>
                    <button className="px-10 py-4 rounded-xl bg-opacity-20  text-electric-violet-500 transition duration-200 ease-in-out active:scale-95 active:bg-opacity-40 hover:bg-electric-violet-500 hover:bg-opacity-20">
                        Calculator
                    </button>
                    <button className="px-10 py-4 rounded-xl bg-opacity-20  text-electric-violet-500 transition duration-200 ease-in-out active:scale-95 active:bg-opacity-40 hover:bg-electric-violet-500 hover:bg-opacity-20">
                        Dashboard
                    </button>
                    <button className="px-10 py-4 rounded-xl bg-opacity-20  text-electric-violet-500 transition duration-200 ease-in-out active:scale-95 active:bg-opacity-40 hover:bg-electric-violet-500 hover:bg-opacity-20">
                        Dashboard
                    </button>
                    <button
                        className="px-10 py-4 rounded-xl bg-opacity-20 text-red-500 transition duration-200 ease-in-out active:scale-95 active:bg-opacity-40 hover:bg-red-500 hover:bg-opacity-20"
                        onClick={() => router.push("/api/auth/signout")}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
            <footer className="text-sm py-5 text-slate-700 flex flex-col items-start justify-center">
                Affluent &copy; {new Date().getFullYear()}
                <br />
                <span>
                    Developed by{" "}
                    <Link
                        href="https://pratikstemkar.in"
                        className="underline"
                        target="_blank"
                    >
                        Pratik
                    </Link>
                </span>
                <br />
                <span>
                    Source Code available on{" "}
                    <Link
                        href="https://github.com/pratikstemkar/affluent"
                        target="_blank"
                        className="underline"
                    >
                        GitHub
                    </Link>
                </span>
            </footer>
        </nav>
    );
};

export default Navbar;
