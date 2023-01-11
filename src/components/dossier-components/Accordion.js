import { useState } from 'react';
import {ChevronBarExpand} from '@styled-icons/bootstrap/ChevronBarExpand'
import {ChevronCompactDown} from '@styled-icons/bootstrap/ChevronCompactDown'

export const Accordion = ({ token, title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div 
                className={isActive ? ('accordion-title-active'):('accordion-title')}
                onClick={() => setIsActive(!isActive)}
            >
                <div>{title}</div>
                <div className='icon-container'>{isActive ? <ChevronCompactDown className='icon'/> : <ChevronBarExpand className='icon'/>}
                </div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};


