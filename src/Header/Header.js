import { Logo } from './Logo';
import { Icons } from './Icons';

export function Header() {
  return (
    <header className="App-header">
      <div className="LogoWrapper">
        <Logo /> 
        <Icons />
      </div>
    </header>
  )
}

//move logo.js file into header dir
//mv logo wrapper div on line 6 to 9 into logo.js
//more hw: finish installing fnot awesome. try to do it yourself.
//add rest of icons
//We wrapped icons in parent component
//refactor means change code around without changing its function. Just the visuals.
