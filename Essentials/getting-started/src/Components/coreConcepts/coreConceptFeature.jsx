import { CORE_CONCEPTS } from "../../data";
import CoreConcepts from "./coreConcepts";
import Section from "../Section.jsx";

export default function CoreConceptsFeture(){

    return(
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcepts key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </Section>
    )
}