import Image from "next/image";

export default function Home() {
  return (
    <>
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

      <main>
        <section className="hero">
          <div className="container grid">
            <h1 className="hero-title">
              <span className="hero-line">ELISE LAWLER</span>
              <span className="hero-line">KARVONEN</span>
            </h1>

            <p className="intro">
              Hello, I'm a UX/UI and graphic designer focused on turning
              complex behavior into clear, intuitive experiences for digital
              products and video games. Let's chat!
            </p>

            <p className="email">eliselawlerkarvonen@gmail.com</p>
          </div>
        </section>

        <section className="work" id="work">
          <div className="container grid">
            <div className="work-head">
              <h2>work.</h2>
            </div>

            <article className="project">
              <Image
                className="project-img"
                src="/images/Karolinska.png"
                alt="Method Books Project thumbnail"
                width={1200}
                height={900}
              />
              <h4>Method books for Karolinska University Hospital</h4>
              <p>
                Project for Karolinskas university hospital. Discovered,
                defined, developed and delivered method books for CT, MR,
                childrens hospital and nuclear medicine.
              </p>
            </article>

            <article className="project">
              <Image
                className="project-img"
                src="/images/AllPawsMatter_Mockup.png"
                alt="All Paws Matter Project thumbnail"
                width={1200}
                height={900}
              />
              <h4>All Paws Matter</h4>
              <p>
                UX/UI app design project about adopting dogs from voluntary
                organizations.
              </p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container grid">
            <h2>about.</h2>

            <div className="about-text">
              <p className="about-lead">
                Big video gamer. Spends too much time in the gym.
                <br />
                Still ties my shoes with two loops because the “normal” way
                actually never made sense.
              </p>

              <p className="about-sub">
                I believe in doing the uncomfortable thing on purpose. That
                belief took me across the world and into a completely new life.
                Growth over comfort. Always.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container grid">
            <h2>contact.</h2>

            <p className="contact-item">eliselawlerkarvonen@gmail.com</p>

            <p className="contact-item linkedin">
              <Image
                src="/images/icon_linkedin.png"
                alt="LinkedIn icon"
                className="linkedin-icon"
                width={16}
                height={16}
              />
              eliselawlerkarvonen
            </p>
          </div>
        </section>
      </main>
    </>
  );
}