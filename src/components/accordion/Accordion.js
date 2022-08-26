import AccordionItem from './AccordionItem';

import ACCORDIONS_DATA from 'data/AccordionsData';

import './Accordion.css';

const Accordion=({selectAccordion,toggleHandler})=>{
    return (
        <div className="accordion">
            {ACCORDIONS_DATA.map(accordion=>(
                <AccordionItem key={accordion.id} accordion={accordion} selectAccordion={selectAccordion} toggleHandler={toggleHandler} />
            ))}
        </div>
    );
}

export default Accordion;