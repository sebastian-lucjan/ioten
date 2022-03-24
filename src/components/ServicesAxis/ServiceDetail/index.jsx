import { RiCloseLine } from 'react-icons/ri';
import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import ThinArrow from 'src/assets/images/service-detail-arrow.svg';
import { v4 as uuid } from 'uuid';
import theme from 'src/assets/styles/theme';
import { IconContext } from 'react-icons';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styled from 'styled-components';
import services from 'src/data/servicesData';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import StyledServiceDetail from './ServiceDetail.styles';

const StyledDetailHeader = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.div`
  position: relative;
  height: 20px;
  transform: scale(0.6);
`;

const StyledIotenLogo = styled(IotenLogo)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledServicesNav = styled.div`
  display: flex;
  justify-content: space-between;

  .service-detail__nav-direction {
    display: flex;
    align-items: center;
  }
`;

const StyledThinArrow = styled(ThinArrow)`
  color: blue;
  margin-left: 1.6rem;
`; // todo: add prop responsible for color

const ServiceDetailFooter = styled.div`
  display: flex;
  flex-direction: column;

  .service-detail__read-more {
    display: flex;
  }
`;
const StyledDetailIntro = styled.div`
  p {
    margin: 20px 0 40px 0;
  }
`;

const ServiceDetail = ({ index, handleClose }) => {
  const iconStyle = {
    style: { color: theme.color.black, fontSize: theme.font.size.paragraphBig },
    // className: '',
  };

  const { stages } = services;
  const { heading, introParagraph, prosList, endParagraph } = stages[index];

  return (
    <StyledServiceDetail detailIndex={index}>
      <IconContext.Provider value={iconStyle}>
        <StyledDetailHeader>
          <StyledLogo>
            <StyledIotenLogo />
          </StyledLogo>
          <RiCloseLine onClick={handleClose} />
        </StyledDetailHeader>

        <StyledDetailIntro>
          <TextHeading as="h4">{heading}</TextHeading>
          <TextParagraph small>{introParagraph}</TextParagraph>
        </StyledDetailIntro>

        <ul>
          {prosList.map((profit) => (
            <li key={uuid()}>
              <span className="service-detail__check" />
              <TextParagraph small>{profit}</TextParagraph>
            </li>
          ))}
        </ul>

        <p>{endParagraph}</p>

        <StyledServicesNav>
          <div className="service-detail__nav-direction">
            <GrPrevious />
            <p>previous</p>
          </div>
          <div className="service-detail__nav-direction">
            <p>next</p>
            <GrNext />
          </div>
        </StyledServicesNav>

        <ServiceDetailFooter>
          <p>pytanie?</p>
          <div className="service-detail__read-more">
            <p>przeczytaj</p>
            <StyledThinArrow />
          </div>
        </ServiceDetailFooter>
      </IconContext.Provider>
    </StyledServiceDetail>
  );
};

export default ServiceDetail;
