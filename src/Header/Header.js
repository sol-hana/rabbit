import './Header.css';
import { Logo } from './Logo';
import { Icons } from './Icons';

export function Header() {
  return (
    <header className="App-header">
      <Logo /> 
      <Icons />
    </header>
  )
}

//hw:
//finish installing fnot awesome. try to do it yourself.
//add rest of icons


//We wrapped icons in parent component
//refactor means change code around without changing its function. Just the visuals.
