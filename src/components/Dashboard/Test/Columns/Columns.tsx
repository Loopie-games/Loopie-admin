import React from 'react'
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import Cards from '../Cards/Cards';
import './Columns.scss'
interface ColumnProps {
    provided: DroppableProvided;
    snapshot: DroppableStateSnapshot;
    column: {
        name: string;
        items: {
            id: number;
            content: string;
        }[];
    };

}

const Columns = ({ provided, snapshot, column }: ColumnProps) => {
    return (
        <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`Column ${snapshot.isDraggingOver ? 'Column_Dragging' : ''}`}
        >
            {column.items.map((item, index) => {
                return (
                    <Draggable
                        key={item.id}
                        draggableId={String(item.id)}
                        index={index}
                    >
                        {(provided, snapshot) => {
                            return (
                                <Cards provided={provided} snapshot={snapshot} item={item} />
                            );
                        }}
                    </Draggable>
                );
            })}
            {provided.placeholder}
        </div>
    )
}

export default Columns