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

export function App() {
  let numero = 0;

  function handleClick() {
    const span = document.getElementById('numero');

    if(!span) return;

    numero++;
    span.innerText = numero.toString();
    console.log(numero, Date.now());
  }

  return (
    <>
      <Heading>Número: <span id="numero">{numero}</span></Heading>
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
