import TabButton from "./tabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section.jsx";
import Tabs from "../../tabs.jsx";

export default function ExampleFeature(){
    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = <p>Please Select a topic</p>;

    if(selectedTopic){
        tabContent =<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>;
  }

  function handleSelect(selectedButton){
    //selected button => 'components', ......
    setSelectedTopic(selectedButton);
  }

    return (
        <Section title="Examples" id="examples">
          <Tabs buttons={
            <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSx</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton>
            </>
          }>
            {tabContent}
          </Tabs>
          <menu>
            
          </menu>
          
        </Section>
    );
}