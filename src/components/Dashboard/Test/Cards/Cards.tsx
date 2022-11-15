import React, { useEffect } from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import './Cards.scss'

export interface CardProps {
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
    item: {
        id: number;
        content: string;
    };
}

const Cards = ({ provided, snapshot, item }: CardProps) => {

    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                minHeight: "50px",
                backgroundColor: snapshot.isDragging
                    ? "#263B4A"
                    : "#456C86",
                color: "white",
                ...provided.draggableProps.style
            }}
        >
            {item.content}
        </div>
    )
}

export default Cards