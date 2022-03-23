import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import theme from 'src/assets/styles/theme';
import Link from 'next/link';
import StyledSocialMedias from './SocialMedias.styles';

const SocialMedias = () => {
  const iconStyle = { style: { color: theme.color.gray, marginRight: '30px' }, className: 'global-class-name' };

  return (
    <StyledSocialMedias>
      <IconContext.Provider value={iconStyle}>
        <Link href="/" passHref>
          <a>
            <ImFacebook />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsTwitter />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsInstagram />
          </a>
        </Link>
        <Link href="/">
          <a>
            <FiDribbble />
          </a>
        </Link>
      </IconContext.Provider>
    </StyledSocialMedias>
  );
};

export default SocialMedias;
// todo: add actual href adresses
