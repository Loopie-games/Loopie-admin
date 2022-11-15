import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStore } from '../../../stores/store';
import Cards from './Cards/Cards';
import Columns from './Columns/Columns';
import './TestPage.scss'

const TestPage = () => {

    const { bugStore } = useStore()

    //React Beautiful DND between two dropable areas
    const itemsFromBackend = [
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa optio perferendis voluptatem nemo architecto eveniet. Quia aliquid enim harum non repudiandae qui doloremque deleniti alias velit. Assumenda, modi deserunt.' },
        { id: 2, content: "Second task" },
        { id: 3, content: "Third task" },
        { id: 4, content: "Fourth task" },
        { id: 5, content: "Fifth task" },
        { id: 6, content: "Sixth task" },
        { id: 7, content: "Seventh task" },
    ];

    const columnsFromBackend = {
        [1]: {
            name: "Backlog",
            items: bugStore.bugs
        },
        [2]: {
            name: "Sprint Prep",
            items: []
        },
        [3]: {
            name: "Todo",
            items: []
        },
        [4]: {
            name: "In Progress",
            items: []
        },
        [5]: {
            name: "Done",
            items: []
        }

    };

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    const [columns, setColumns] = React.useState(columnsFromBackend);

    return (
        <div className='TestPage_Container'>
            <div className='TestPage_TitleContainer'>
                Bug Tracker
            </div>
            <div className='TestPage_ContentContainer'>
                <div className='TestPage_ContentWrapper'>
                    <DragDropContext
                        onDragEnd={result => onDragEnd(result, columns, setColumns)}
                    >
                        {Object.entries(columns).map(([columnId, column], index) => {
                            return (
                                <div
                                    className='TestPage_ColumnContainer'
                                    key={columnId}
                                >
                                    <div className='TestPage_ColumnTitleContainer'>
                                        <p className='TestPage_ColumnTitle'>
                                            {column.name}
                                        </p>
                                        <div className='TestPage_Line'></div>
                                    </div>
                                    <div className='TestPage_DroppableContainer'>
                                        <Droppable droppableId={columnId} key={columnId}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <Columns provided={provided} snapshot={snapshot} column={column} />
                                                );
                                            }}
                                        </Droppable>
                                    </div>
                                </div>
                            );
                        })}
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}





export default TestPage