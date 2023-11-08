import {useState} from 'react'; 
import {CORE_CONCEPTS, EXAMPLES} from './data';
import './App.css';
import Header from './Components/Header/header.jsx';
import CoreConcepts from './Components/coreConcepts/coreConcepts.jsx';
import TabButton from './Components/Example/tabButton.jsx';

function App() {
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
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcepts key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
