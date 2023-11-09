Start
npx create-react-app my-react-app
cd my-react-app
npm start


import named exports with {name}
../ to go up a level in path 

Components:
function name must start with upercase charater
must return a renderable component
<Self-closing />
Reusable
functions can be added in the components


Dynamic content:
{} for dynamic content
import nameVariable from 'filepath'
"" not needed in dynamic 
Key is needed for map to uniquly identify items

Data:



Interaction:



State
only called in react components/functions or other hooks 
on top level not nested
useState('defualt value');
return an array of 2 elements
const [ snapshot, updateFunction] = useSate(0); 
cause reExection of page with new values

props are not automatically sent as atribute to custome component
