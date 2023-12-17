import React, { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import Form from "./Form";
import { motion } from "framer-motion";

function Cards({
    data,
    reference,
    setAddFunction,
    setIsUpdating,
    setSelectedNote,
}) {
    const [download, setDownload] = useState(false);

    const handleDragEnd = (event, info) => {
        const cardWidth = 60; // You may need to adjust this based on your card width
        const deleteThreshold = window.innerWidth - cardWidth;

        if (info.point.x > deleteThreshold) {
            onDelete(data.id);
        }
    };
    const onEdit = () => {
        setIsUpdating(true);
        setSelectedNote(data);
        setAddFunction(true); // Open the form for editing
        console.log(data);
    };

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.08 }}
            onDragEnd={handleDragEnd}
            className="relative w-60 h-[300px] rounded-[20px] bg-zinc-200/95 p-5 overflow-hidden"
        >
            <span className="flex justify-between">
                <IoDocumentText />
                <div className="cursor-pointer" onClick={onEdit}>
                    <LuFileEdit />
                </div>
            </span>
            <p className="text-[0.9rem] mt-3 leading-tight font-semibold">
                {data.desc}
            </p>
            <div className="footer absolute bottom-0  w-full left-0">
                <div className="flex items-center justify-between py-3 px-5 mb-2">
                    <h5>{data.fileSize}</h5>
                    <span
                        className={`w-6 h-6 bg-green-800 rounded-full flex items-center justify-center cursor-pointer`}
                        onClick={() => {
                            setDownload(!download);
                            // console.log(download);
                        }}
                    >
                        {data.close && download ? (
                            <IoClose color="#ffff" size="1.1em" />
                        ) : (
                            <HiOutlineDownload color="#ffff" size="1.08em" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && download ? (
                    <div
                        className={
                            "w-full py-3  bg-" + data.tag.tagColor + "-500"
                        }
                    >
                        <h3 className="text-sm font-semibold flex items-center justify-center">
                            {data.tag.tagtitle}
                        </h3>
                    </div>
                ) : null}
            </div>
        </motion.div>
    );
}

export default Cards;
