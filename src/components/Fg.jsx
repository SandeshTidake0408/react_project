import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { IoAdd } from "react-icons/io5";
import Form from "./Form";
import DeleteZone from "./Delete";

function Fg() {
    const ref = useRef(null);
    const [add, setAdd] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const [data, setData] = useState([
        {
            id: 1,
            desc: "Dark matter, constituting about 85% of the universe's mass, remains elusive, its nature yet to be understood. Gravitational waves, ripples in spacetime,provide a revolutionary tool for observing cosmic phenomena",
            fileSize: "1.3mb",
            close: true,
            tag: {
                isOpen: true,
                tagtitle: "Dowloading....",
                tagColor: "green",
            },
        },
        {
            id: 2,
            desc: "Artemis is NASA's initiative to return humans to the Moon. The program focuses on landing the first woman and the next man on the lunar surface. It involves a series of crewed missions.",
            fileSize: "8.23mb",
            close: true,
            tag: {
                isOpen: true,
                tagtitle: "Here we go..",
                tagColor: "green",
            },
        },
        {
            id: 3,
            desc: "NISAR, a collaboration between NASA and ISRO, is an Earth observation mission set to launch in 2024. Using synthetic aperture radar, it aims to monitor and analyze surface changes on Earth.",
            fileSize: "0.56mb",
            close: true,
            tag: { isOpen: true, tagtitle: "Please Wait...", tagColor: "blue" },
        },
        {
            id: 4,
            desc: "The universe is all of space and time and their contents. It comprises all of existence, any fundamental interaction, physical process and physical constant.",
            fileSize: "2.3mb",
            close: true,
            tag: {
                isOpen: true,
                tagtitle: "Please Wait...",
                tagColor: "yellow",
            },
        },
    ]);

    useEffect(() => {
        const getData = localStorage.getItem("Localdata");
        console.log("getData from localStorage:", getData);
        if (getData) {
            const parsedData = JSON.parse(getData);
            setData(parsedData);
        }
    }, []);

    return (
        <>
            <div
                ref={ref}
                className="py-20 px-5  fixed top-0 left-0 w-full h-full  z-[1] flex gap-5 flex-wrap"
            >
                {Array.isArray(data) &&
                    data?.map((item, index) => {
                        return (
                            <Cards
                                data={item}
                                reference={ref}
                                setAddFunction={setAdd}
                                setIsUpdating={setIsUpdating}
                                setSelectedNote={setSelectedNote}
                            />
                        );
                    })}
            </div>
            {/* //add note button */}
            <div
                className="addButton cursor-pointer absolute bottom-0 right-0 mr-5 mb-5 bg-zinc-200 rounded-full p-2 z-[5]"
                onClick={() => {
                    setAdd(!add);
                }}
            >
                <IoAdd color="blue" size="2em" />
            </div>
            {/* //conditional redering of add note button */}
            {add && (
                <div className="z-[8] p-5 absolute top-20 right-5 bg-zinc-200">
                    <Form
                        data={data}
                        setData={setData}
                        setAddFunction={setAdd}
                        AddFunctionState={add}
                        isUpdating={isUpdating}
                        selectedNote={selectedNote}
                    />
                </div>
            )}
            {Array.isArray(data) && <DeleteZone />}
        </>
    );
}

export default Fg;

const CardList = ({ data }) => {
    const handleDelete = (cardId) => {
        const updatedCards = data.filter((card) => card.id !== cardId);
        setData(updatedCards);
    };

    return (
        <div>
            {data.map((card) => (
                <Cards
                    data={data}
                    reference={reference}
                    onDelete={() => handleDelete(card.id)}
                />
            ))}
            <DeleteZone />
        </div>
    );
};

export { CardList };
