import { Logo, SendIcon } from './Logo';

export function Header() {
  return (
    <header className="App-header">
      <div className="LogoWrapper">
        <Logo /> 
        <div>
          <img src="https://www.nicepng.com/png/detail/937-9379647_png-file-svg-instagram-home-icon-vector.png" />
        </div> 
        <SendIcon />
      </div>
    </header>
  )
}

//move logo.js file into header dir
//mv logo wrapper div on line 6 to 9 into logo.js
//more hw: finish installing fnot awesome. try to do it yourself.
//add rest of icons
//We wrapped icons in parent component
//refactor icon parent into its own icons compononet
//refactor means change code around without changing its function. Just the visuals.
