import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { Wrapper } from './Footer.styles';

const Footer = () => {
  const {
    color: { white },
    gradient: { yellowToGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: yellowToGray }}>
      <Wrapper>
        <div>
          <div>
            <h4>intro head</h4>
            <p>intro description</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Kontakt</h4>
            <p>opis</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Services</h4>
            <p>desc</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Stages</h4>
            <p>desc</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Page</h4>
            <p>desc</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Social media</h4>
            <div>icons</div>
          </div>
        </div>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Footer;
