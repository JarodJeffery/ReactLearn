import { CORE_CONCEPTS } from "../../data";
import CoreConcepts from "./coreConcepts";

export default function CoreConceptsFeture(){

    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcepts key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
    )
}