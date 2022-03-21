import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { footerData, navigationData, services } from 'src/data/pageData';
import { v4 as uuid } from 'uuid';
import { FooterHeading, FooterItem, FooterSection, FooterSoonItem, Wrapper } from './Footer.styles';

const Footer = () => {
  const {
    color: { white },
    gradient: { yellowToGray },
  } = theme;

  const {
    ioten,
    intro: { heading, text },
  } = footerData;

  return (
    <MainSectionWrapper colors={{ background: white, lines: yellowToGray }}>
      <Wrapper>
        <FooterSection>
          <FooterHeading>{heading}</FooterHeading>
          <FooterItem>
            {/* add key */}
            {text.map((textLine) => (
              <p key={uuid()}>{textLine}</p>
            ))}
          </FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterHeading>{services.intro}</FooterHeading>
          {services.list.map(({ heading: serviceHeading, soon = false }) => {
            if (soon) {
              return <FooterSoonItem key={uuid()}>{serviceHeading}</FooterSoonItem>;
            }
            return <FooterItem key={uuid()}>{serviceHeading}</FooterItem>;
          })}
        </FooterSection>
        <FooterSection>
          <FooterHeading>{services.serviceStagesIntro}</FooterHeading>
          {services.serviceStages.map(({ heading: serviceHeading }) => (
            <FooterItem key={uuid()}>{serviceHeading}</FooterItem>
          ))}
        </FooterSection>
        <FooterSection>
          <FooterHeading>{ioten}</FooterHeading>
          {navigationData.map(({ name }) => (
            <FooterItem key={uuid()}>{name}</FooterItem>
          ))}
        </FooterSection>
        <FooterSection>
          <div>
            <h4>Social media</h4>
            <div>icons</div>
          </div>
        </FooterSection>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Footer;
