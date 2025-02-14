

export default function RevealButton({children, handleClick})
{
    return (
        <button onClick={handleClick} className="rounded-3xl bg-red-300 text-bold px-5 scale-100 hover:scale-[120%] min-h-[100px] min-w-[200px] transition-all ease-in duration-200 justify-center text-pretty antialiased text-lg text-white hover:bg-red-200 focus:border-8 focus:border-spacing-10 focus:border-white">
            {children}
        </button>
    );
}