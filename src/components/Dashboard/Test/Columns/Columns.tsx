import { observer } from 'mobx-react-lite';
import React from 'react'
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Bug } from '../../../../models/bugs/bugsInterfaces';
import Cards from '../Cards/Cards';
import './Columns.scss'
interface ColumnProps {
    provided: DroppableProvided;
    snapshot: DroppableStateSnapshot;
    column: {
        name: string;
        items: Bug[];
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

export default observer(Columns)