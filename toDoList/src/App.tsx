import { Form } from "./components/Form";
import { GenericHTML } from "./components/GenericHTML";
import { Heading } from "./components/Heading";

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <GenericHTML>
      <Heading />
      <Form />
    </GenericHTML>
  );
}
