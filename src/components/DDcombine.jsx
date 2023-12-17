// CardList.js
import React, { useState } from "react";
import DraggableCard from "./DraggableCard";
import DeleteZone from "./DeleteZone";

const CardList = ({ data, setData }) => {
    //   const [cards, setCards] = useState([
    //     { id: 1, text: 'Card 1' },
    //     { id: 2, text: 'Card 2' },
    //     // Add more cards as needed
    //   ]);

    const handleDelete = (cardId) => {
        const updatedCards = cards.filter((card) => card.id !== cardId);
        setCards(updatedCards);
    };

    return (
        <div>
            {cards.map((card) => (
                <DraggableCard
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    onDelete={handleDelete}
                />
            ))}
            <DeleteZone />
        </div>
    );
};

export default CardList;
