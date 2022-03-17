import Link from 'next/link';
// import Logo from 'src/assets/images/ioten-logo.svg';

const Navigation = () => {
  return (
    <header>
      <Link href="/">
        {/* <Logo /> */}
        <h1>ioten</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services" as="/uslugi">
              Usługi
            </Link>
          </li>
          <li>
            <Link href="/about" as="/o-nas">
              O nas
            </Link>
          </li>
          <li>
            <Link href="/blog" as="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
