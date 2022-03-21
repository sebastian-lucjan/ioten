import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import theme from 'src/assets/styles/theme';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import StyledSocialMedias from './SocialMedias.styles';

const SocialMedias = () => {
  const iconStyle = { style: { color: theme.color.gray, marginRight: '30px' }, className: 'global-class-name' };

  return (
    <StyledSocialMedias>
      <IconContext.Provider value={iconStyle}>
        <Link key={uuid()} href="/">
          <ImFacebook />
        </Link>
        <Link key={uuid()} href="/">
          <BsTwitter />
        </Link>
        <Link key={uuid()} href="/">
          <BsInstagram />
        </Link>
        <Link key={uuid()} href="/">
          <FiDribbble />
        </Link>
      </IconContext.Provider>
    </StyledSocialMedias>
  );
};

export default SocialMedias;
// todo: add actual href adresses
