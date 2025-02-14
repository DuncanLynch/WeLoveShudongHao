"use client"
import Image from "next/image";
import RevealButton from "@/components/RevealButton";
import { useState } from "react";
import img from "@/images/wels.jpg";

export default function Home() {
  let [love, setLove] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] transition-all ease-in-out duration-300 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <RevealButton children={!love ? "Do we love Shudong?" : "WE DO!"}  handleClick={() => setLove(!love)}/>
          <Image src={img} height={600} width={600} className={`" rounded-3xl transition-all duration-1000 ease-in-out overflow-hidden flex 
            ${love ? ' opactity-100 rotate-0 scale-[110%] delay-150 ' : ' scale-x-0 rotate-90  scale-y-0 opacity-0 '} "`}/>
    </div>
  );
}
