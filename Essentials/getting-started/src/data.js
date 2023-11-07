import componentImg from './images/components.png';
import propsImg from './images/config.png';
import stateImg from './images/state-mgmt.png';
import jsxImg from './images/jsx-ui.png';

export const CORE_CONCEPTS = [
    {
      image: componentImg,
      title: 'Components',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
      image: jsxImg,
      title: 'JSX',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
      image: propsImg,
      title: 'Props',
      description:
        'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
      image: stateImg,
      title: 'State',
      description:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
  ];