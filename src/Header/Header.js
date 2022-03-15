import { Logo } from '../Logo';

export function Header() {
  return (
    <header className="App-header">
      <div className="LogoWrapper">
        <Logo />  

      </div>
    </header>
  )
}

//move logo.js file into header dir
//mv logo wrapper div on line 6 to 9 into logo.js
//