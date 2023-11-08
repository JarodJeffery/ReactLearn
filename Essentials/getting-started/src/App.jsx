import './App.css';
import Header from './Components/Header/header.jsx';
import CoreConceptsFeature from './Components/coreConcepts/coreConceptFeature.jsx';
import ExampleFeature from './Components/Example/exampleFeature.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsFeature />
        <ExampleFeature />
      </main>
    </>
  );
}

export default App;
