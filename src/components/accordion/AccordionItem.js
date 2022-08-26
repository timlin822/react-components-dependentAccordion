import {FaPlus} from 'react-icons/fa';

import './Accordion.css';

const AccordionItem=({accordion,selectAccordion,toggleHandler})=>{
    return (
        <div className="accordion-item" onClick={()=>toggleHandler(accordion.id)}>
            <div className="accordion-question">{accordion.question}<FaPlus className={selectAccordion===accordion.id?"accordion-icon rotate":"accordion-icon"} /></div>
            <div className={selectAccordion===accordion.id?"accordion-answer accordion-answer-open":"accordion-answer accordion-answer-close"}>{accordion.answer}</div>
        </div>
    );
}

export default AccordionItem;