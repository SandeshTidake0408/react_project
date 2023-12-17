import React from "react";

function Bg() {
    return (
        <>
            <div className=" w-full h-full absolute z-[1]">
                <div className=" absolute w-full py-8  px-5 flex justify-left text-zinc-200 text-[1.2rem] font-semibold">
                    NoteTag
                </div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900">
                    Docs
                </h1>
            </div>
        </>
    );
}

export default Bg;
