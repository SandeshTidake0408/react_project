import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DeleteZone = () => {
    return (
        <motion.div>
            <div className="addButton cursor-pointer absolute top-0 right-0 mr-5 mt-5 bg-zinc-200 rounded-full p-2 z-[5]">
                <MdOutlineDeleteOutline color="red" size="1.8em" />
            </div>
        </motion.div>
    );
};

export default DeleteZone;
