import { RiCloseLine } from 'react-icons/ri';
import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import ThinArrow from 'src/assets/images/service-detail-arrow.svg';
import { v4 as uuid } from 'uuid';
import theme, { rainbowColors } from 'src/assets/styles/theme';
import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';
import services from 'src/data/servicesData';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import Link from 'next/link';
import StyledServiceDetail from './ServiceDetail.styles';

const StyledDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .service-details__logo-and-exit {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const StyledLogo = styled.div`
  position: relative;
  height: 20px;
  transform: scale(0.6);
`;

const StyledBenefits = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const StyledColorCheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  background-color: ${({ color }) => `${color}66`}; // add opacity to color
  border: 2px ${({ color }) => color} solid;
  margin-right: 1rem;
`;

const ColorCheckIcon = ({ color }) => {
  return (
    <StyledColorCheckIcon color={color}>
      <BsCheckLg style={{ color }} />
    </StyledColorCheckIcon>
  );
};

const StyledIotenLogo = styled(IotenLogo)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledThinArrow = styled(ThinArrow)`
  ${({ color }) => (color ? `color: ${color}` : '')} //passed color
  margin-left: 1.6rem;
`;

const ServiceDetailFooter = styled.div`
  display: flex;
  flex-direction: column;

  .service-detail__read-more {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
    }
  }

  .service-detail__question {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`;
const StyledDetailIntro = styled.div`
  p {
    margin: 20px 0 0 0;
  }
`;

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
            <TextParagraph small>{introParagraph}</TextParagraph>
          </StyledDetailIntro>
        </StyledDetailHeader>
      </IconContext.Provider>

      <ul>
        {prosList.map((profit) => (
          <StyledBenefits key={uuid()}>
            <ColorCheckIcon color={accentColor} className="service-detail__check" />
            <TextParagraph small>{profit}</TextParagraph>
          </StyledBenefits>
        ))}
      </ul>

      <TextParagraph small>{endParagraph}</TextParagraph>

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
