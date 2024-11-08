import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Rahil Ganatra</h2>
        <p>
          <a href="mailto:rahilganatra@gmail.com">rahilganatra@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Rahil. I’m a 4th-year student at{' '}
        <a href="https://www.pdpu.ac.in/">Pandit Deendayal Energy University</a>,
        currently focusing on building my skills and exploring opportunities in my field.
        I’m passionate about learning and developing
        my expertise in engineering and technology.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright"> */}
      {/*   &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>. */}
      {/* </p> */}
    </section>
  </section>
);

export default SideBar;
