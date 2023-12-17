import React, { useState, useEffect } from "react";

function Form({
    setAddFunction,
    AddFunctionState,
    data,
    setData,
    selectedNote,
    isUpdating,
}) {
    const [note, setNote] = useState({
        id: null,
        desc: "",
        fileSize: "",
        close: true,
        tag: {
            isOpen: true,
            tagtitle: "Here we go..",
            tagColor: "green",
        },
    });

    // const handelChange = (e) => {
    //     const { name, value } = e.target;
    //     const n = data.length;

    //     setNote((pre) => ({ ...pre, id: n + 1, [name]: value }));
    // };
    useEffect(() => {
        if (isUpdating && selectedNote) {
            setNote(selectedNote);
        }
    }, [isUpdating, selectedNote]);

    const handelChange = (e) => {
        const { name, value } = e.target;
        const n = data.length;

        setNote((pre) => ({
            ...pre,
            id: isUpdating ? selectedNote.id : n + 1,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="desc">Description : </label>

            <textarea
                // type="text"
                className="absulute right-0 bottom-0  h-[200px] w-[300px] p-2 text-start"
                name="desc"
                value={note?.desc}
                onChange={handelChange}
            />

            <label htmlFor="size">Size : </label>

            <input
                type="text"
                name="fileSize"
                value={note?.fileSize}
                onChange={handelChange}
                className=" p-1"
            />

            {/* <button
                    className="bg-green-500 mt-5 py-2 px-8 font-semibold text-zinc-100"
                    onClick={() => {
                        setAddFunction(!AddFunctionState);
                        setData((prevData) => [...prevData, note]);

                        localStorage.removeItem("Localdata");
                        localStorage.setItem(
                            "Localdata",
                            JSON.stringify([...data, note])
                        );
                    }}
                >
                    Add Note
                </button> */}
            <button
                className={
                    isUpdating
                        ? "bg-blue-500 mt-5 py-2 px-8 font-semibold text-zinc-100"
                        : "bg-green-500 mt-5 py-2 px-8 font-semibold text-zinc-100"
                }
                onClick={() => {
                    if (isUpdating) {
                        setData((prevData) => {
                            const updatedData = prevData.map((item) =>
                                item.id === selectedNote.id ? note : item
                            );
                            // Update localStorage with the latest data
                            localStorage.setItem(
                                "Localdata",
                                JSON.stringify(updatedData)
                            );
                            return updatedData;
                        });
                    } else {
                        // Add a new note
                        setData((prevData) => [...prevData, note]);
                    }

                    // Reset the form fields
                    setNote({
                        id: null,
                        desc: "",
                        fileSize: "",
                        close: true,
                        tag: {
                            isOpen: true,
                            tagtitle: "",
                            tagColor: "",
                        },
                    });

                    setAddFunction(!AddFunctionState);
                    // localStorage.removeItem("Localdata");
                    localStorage.setItem(
                        "Localdata",
                        JSON.stringify(...data, note)
                    );
                }}
            >
                {isUpdating ? "Update Note" : "Add Note"}
            </button>
        </div>
    );
}

export default Form;
