import './Header.css';
import { Logo } from './Logo';
import { Icons } from './Icons';

export function Header() {
  return (
    <header className="App-header">
      <div className="headerChild">
        <Logo />
        <input
          type="text"
          placeholder="Search"
        />
        <Icons />
      </div>
    </header>
  )
}

// hw: 4/4/22
// play around with the input component. documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
// bonus: refactor input tag into own component with own file. (Refer to Logo or Icons component for example)

//hw:
//finish installing fnot awesome. try to do it yourself.

//hw:
//css docu flexbox
//flexbox froggy

