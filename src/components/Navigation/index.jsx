import Link from 'next/link';
// import Logo from 'src/assets/images/ioten-logo.svg';

const Navigation = () => {
  return (
    <header>
      {/* <Link href="/"> */}
      {/*  <Logo /> */}
      {/* </Link> */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Usługi</Link>
          </li>
          <li>
            <Link href="/">O nas</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Kontakt</Link>
          </li>
          {/* <li> */}
          {/*  <Link route="/">Home</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/*  <Link route="/">Usługi</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/*  <Link route="/">O nas</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/*  <Link route="/">Blog</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/*  <Link route="/">Kontakt</Link> */}
          {/* </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
