import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Bug, BUG_SERVERITY } from '../../../../models/bugs/bugsInterfaces';
import { useStore } from '../../../../stores/store';
import Icon from '../../../Shared/icon/Icon';
import './Cards.scss'

export interface CardProps {
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
    item: Bug;
}

const Cards = ({ provided, snapshot, item }: CardProps) => {
    const { bugStore, authStore } = useStore()
    const getSeverityColor = (severity: BUG_SERVERITY) => {
        switch (severity) {
            case BUG_SERVERITY.SEVERE:
                return 'Cards_Severe'
            case BUG_SERVERITY.MAJOR:
                return 'Cards_Major'
            case BUG_SERVERITY.MINOR:
                return 'Cards_Minor'
            case BUG_SERVERITY.TRIVIAL:
                return 'Cards_Trivial'
            case null:
                return 'Cards_Unknown'
            case undefined:
                return 'Cards_Unknown'
            default:
                return 'Cards_Unknown'
        }
    }

    const handleClaim = () => {
        console.log('claim');
        bugStore.claimBug(item.id, authStore.user!);
    }



    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`Cards_Container ${getSeverityColor(item.severity!)} ${snapshot.isDragging ? 'Cards_Dragging' : ''}`}
        >
            <div className='Cards_Edit'>
                <Icon name="edit" />
            </div>
            <div className='Cards_Wrapper'>

                <div className='Cards_ContentContainer'>
                    {item.description}
                </div>
                <div className='Cards_ClaimContainer'>

                    {item.asignee ? <p className='Cards_Claimed'>{item.asignee}</p> :
                        <div className={`Cards_Claim `} onClick={handleClaim}>
                            < Icon name="circle_plus" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default observer(Cards)