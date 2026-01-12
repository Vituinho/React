import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react';

export function App() {
  // Que todos os componentes que usam "numero"
  // saibam das mudanças em seu valor.

  // Sempre que eu usar useState, não vou usar atribuição diretamente
  /* const [numero, setNumero] = useState(() => {
    console.log('lazy initialization');
    return 0;
  }); */
  const [numero, setNumero] = useState(0);

  function handleClick() {
    /* 
    setNumero(prevState => prevState + 1); // Assim se copiar mais ele faz mais
    //setNumero(numero + 1); */
    setNumero(1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Heading>
          <Menu />
        </Heading>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              placeholder='Digite algo'
              labelText={numero.toString()}
              id='meuInput'
              type='text'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles/>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
         <Footer />
      </Container>
    </>
  );
}
