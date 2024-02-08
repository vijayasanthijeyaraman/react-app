const Logo = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="inline-block px-3 py-1 rounded-md bg-white border-[1.5px] border-primary-500 dark:border-black shadow-lg shadow-primary-300 dark:shadow-neutral-700/80">
          <div className="flex gap-x-1.5 items-center justify-center text-lg text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-primary-800 dark:from-neutral-700 dark:to-neutral-900">
            <span className="font-bold">EliteAppMakers</span>
            <div className="h-5 border-r-2 border-primary-600 dark:border-neutral-600"></div>
            <h1 className="font-semibold">Nela Chatbot</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Logo;
  