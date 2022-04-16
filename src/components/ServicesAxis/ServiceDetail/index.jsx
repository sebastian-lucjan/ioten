import { RiCloseLine } from 'react-icons/ri';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import { IconContext } from 'react-icons';
import services from 'src/data/servicesData';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import Link from 'next/link';
import {
  ServiceDetailFooter,
  StyledDetailHeader,
  StyledDetailIntro,
  StyledIotenLogo,
  StyledLogo,
  StyledServiceDetail,
  StyledThinArrow,
} from './ServiceDetail.styles';
import BenefitsList from './BenefitsList';

const ServiceDetail = ({ index, handleClose }) => {
  const accentColor = rainbowColors[index];

  const closeIcon = { style: { color: theme.color.black, fontSize: theme.font.size.paragraphBig } };

  const { heading, introParagraph, prosList, endParagraph } = services.stages[index];

  return (
    <StyledServiceDetail color={accentColor} detailIndex={index}>
      <IconContext.Provider value={closeIcon}>
        <StyledDetailHeader>
          <div className="service-details__logo-and-exit">
            <StyledLogo>
              <StyledIotenLogo />
            </StyledLogo>
            <RiCloseLine onClick={handleClose} />
          </div>
          <StyledDetailIntro>
            <TextHeading as="h4" color={accentColor}>
              {heading}
            </TextHeading>
            <TextParagraph size="sm">{introParagraph}</TextParagraph>
          </StyledDetailIntro>
        </StyledDetailHeader>
      </IconContext.Provider>

      <BenefitsList prosList={prosList} index={index} />

      <TextParagraph size="sm">{endParagraph}</TextParagraph>

      <ServiceDetailFooter>
        <TextHeading as="h5" size="xs" className="service-detail__question">
          Chcesz się dowiedzieć więcej?
        </TextHeading>
        <Link href="/">
          <a>
            <div className="service-detail__read-more">
              <TextHeading color={accentColor} as="p" size="xs">
                Zajrzyj tutaj
              </TextHeading>
              <StyledThinArrow color={accentColor} />
            </div>
          </a>
        </Link>
      </ServiceDetailFooter>
    </StyledServiceDetail>
  );
};

export default ServiceDetail;
