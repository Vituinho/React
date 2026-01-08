import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur
        consectetur fugiat placeat alias nesciunt qui? Impedit molestias sint,
        quaerat beatae esse dolorum, sapiente quisquam voluptate, nam aliquam
        minima quod?
      </p>
    </>
  );
}
