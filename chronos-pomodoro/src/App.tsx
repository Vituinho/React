import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
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
