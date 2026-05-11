import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="container grid header-inner">
        <p className="brand">ELISE</p>

        <nav className="nav" aria-label="Primary">
          <a className="nav-link" href="#work">
            Work
          </a>

          <a className="nav-link" href="#about">
            About
          </a>

          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>

        <button className="menu-toggle" aria-label="Open menu">
          <Image
            src="/images/menu_mobile.png"
            alt=""
            className="menu-icon"
            width={22}
            height={22}
          />
        </button>
      </div>
    </header>
  );
}