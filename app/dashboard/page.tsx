const Dashboard = () => {
    return (
        <main className="p-10 flex flex-col w-full">
            <div className="flex justify-between w-full">
                <h1 className="text-3xl font-bold tracking-wide">
                    Welcome back, Pratik!
                </h1>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-electric-violet-500 rounded-xl text-white hover:shadow-xl transition duration-200 ease-in-out active:scale-95">
                        Upgrade
                    </button>
                    <button className="px-4 py-2 border border-electric-violet-500 rounded-xl text-electric-violet-500 transition duration-200 ease-in-out hover:bg-electric-violet-100 active:bg-electric-violet-200">
                        Notifications
                    </button>
                </div>
            </div>
            <div>Hello</div>
        </main>
    );
};

export default Dashboard;
