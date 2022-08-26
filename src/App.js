import {useState} from 'react';

import Accordion from 'components/accordion/Accordion';

import './App.css';

function App() {
  const [selectAccordion,setSelectAccordion]=useState("");

  const toggleHandler=(accordionId)=>{
    if(selectAccordion===accordionId){
      setSelectAccordion("");
    }
    else{
      setSelectAccordion(accordionId);
    }
  };

  return (
    <section className="section-padding bg-height bg-color">
      <div className="container container-padding">    
        <Accordion selectAccordion={selectAccordion} toggleHandler={toggleHandler} />
      </div>
    </section>
  );
}

export default App;