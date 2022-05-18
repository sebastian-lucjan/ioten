import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import Link from 'next/link';
import theme from 'src/assets/styles/theme';
import { footerData, navigationData } from 'src/data/pageData';
import services from 'src/data/servicesData';
import { v4 as uuid } from 'uuid';
import Grid from 'src/components/Grid';
import { FooterHeading, FooterItem, FooterSoonItem, StyledFooterSection, Wrapper } from './Footer.styles';
import FooterContact from './FooterContact';
import FooterRights from './FooterRights';
// import SocialMedia from '../SocialMedia';

const Footer = ({ footerGridColor }) => {
  const {
    color: { white },
  } = theme;

  const {
    ioten,
    intro: { heading, text },
    // socialMedia: { heading: socialMediaHeading },
  } = footerData;

  return (
    <MainSectionWrapper background={white}>
      <Wrapper>
        <StyledFooterSection className="footer__contact">
          <FooterHeading>{heading}</FooterHeading>
          {text.map((textLine) => (
            <FooterItem noLink key={uuid()}>
              {textLine}
            </FooterItem>
          ))}
          <FooterContact />
        </StyledFooterSection>

        <StyledFooterSection>
          <FooterHeading>{services.intro}</FooterHeading>
          {services.list.map(({ heading: serviceHeading, soon = false }) => {
            if (soon) {
              return <FooterSoonItem key={uuid()}>{serviceHeading}</FooterSoonItem>;
            }
            return (
              <Link key={uuid()} href="/src/services" as="/uslugi">
                <FooterItem key={uuid()}>{serviceHeading}</FooterItem>
              </Link>
            );
          })}
        </StyledFooterSection>

        <StyledFooterSection>
          <FooterHeading>{services.serviceStagesIntro}</FooterHeading>
          {services.stages.map(({ heading: serviceHeading }) => (
            <Link key={uuid()} href="/src/services" as="/uslugi">
              <FooterItem key={uuid()}>{serviceHeading}</FooterItem>
            </Link>
          ))}
        </StyledFooterSection>

        <StyledFooterSection>
          <FooterHeading>{ioten}</FooterHeading>
          {navigationData.map(({ name, href, as }) => (
            <Link key={uuid()} href={href} as={as}>
              <FooterItem>{name}</FooterItem>
            </Link>
          ))}
        </StyledFooterSection>

        {/* <StyledFooterSection className="footer__social-media"> */}
        {/*  <FooterHeading>{socialMediaHeading}</FooterHeading> */}
        {/* <SocialMedia /> */}
        {/* </StyledFooterSection> */}
      </Wrapper>
      <FooterRights />
      <Grid colors={{ lines: footerGridColor }} />
    </MainSectionWrapper>
  );
};

export default Footer;

// todo: add social media when it will be ready
