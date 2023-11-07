import {CORE_CONCEPTS} from './data';
import './App.css';
import Header from './Components/Header/header.jsx';
import CoreConcepts from './Components/coreConcepts/coreConcepts.jsx';
import TabButton from './Components/Example/tabButton.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/*<CoreConcepts 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> 
            <CoreConcepts 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts 
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />*/}
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton >Components</TabButton>
            <TabButton >JSx</TabButton>
            <TabButton >Props</TabButton>
            <TabButton >State</TabButton>
          </menu>
        </section>
        <h2>
          Time to start!!!
        </h2>
      </main>
    </div>
  );
}

export default App;
