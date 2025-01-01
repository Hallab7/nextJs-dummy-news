import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">News Website</Link>
      </div>
      <nav>
      <ul>
      <li>
        <NavLink href='/news' children='News'/>
        </li>
        <li>
        <NavLink href='/archive' children='Archive'/>
        </li>
        </ul>
      </nav>
    </header>
  );
}