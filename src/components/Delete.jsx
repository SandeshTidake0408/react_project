import React from "react";
// import { motion } from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DeleteZone = ({ setData }) => {
    const handelDrop = (e) => {
        const cardID = e.dataTransfer.getData("cardID");
        setData((prevData) => {
            const updatedData = prevData.filter(
                (item) => item.id !== parseInt(cardID)
            );

            // Update localStorage with the latest data
            localStorage.setItem("Localdata", JSON.stringify(updatedData));

            return updatedData;
        });
    };

    const handelDragOver = (e) => {
        e.preventDefault();
        console.log("hiiii i am apply...");
    };

    return (
        <>
            <div
                className="addButton cursor-pointer absolute top-0 right-0 mr-20 mt-20 bg-zinc-200 rounded-full p-2 z-[5]"
                onDrop={handelDrop}
                onDragOver={handelDragOver}
            >
                <MdOutlineDeleteOutline color="red" size="1.8em" />
            </div>
        </>
    );
};

export default DeleteZone;
