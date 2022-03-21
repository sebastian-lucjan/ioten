import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import Link from 'next/link';
import theme from 'src/assets/styles/theme';
import { footerData, navigationData, services } from 'src/data/pageData';
import { v4 as uuid } from 'uuid';
import { FooterHeading, FooterItem, FooterSoonItem, StyledFooterSection, Wrapper } from './Footer.styles';
import SocialMedias from '../SocialMedias';
import FooterRights from '../FooterRights';

const Footer = () => {
  const {
    color: { white },
    gradient: { yellowToGray },
  } = theme;

  const {
    ioten,
    intro: { heading, text },
    socialMedia: { heading: socialMediaHeading },
  } = footerData;

  return (
    <MainSectionWrapper colors={{ background: white, lines: yellowToGray }}>
      <Wrapper>
        <StyledFooterSection>
          <FooterHeading>{heading}</FooterHeading>
          {text.map((textLine) => (
            <FooterItem key={uuid()}>{textLine}</FooterItem>
          ))}
        </StyledFooterSection>

        <StyledFooterSection>
          <FooterHeading>{services.intro}</FooterHeading>
          {services.list.map(({ heading: serviceHeading, soon = false }) => {
            if (soon) {
              return <FooterSoonItem key={uuid()}>{serviceHeading}</FooterSoonItem>;
            }
            return <FooterItem key={uuid()}>{serviceHeading}</FooterItem>;
          })}
        </StyledFooterSection>

        <StyledFooterSection>
          <FooterHeading>{services.serviceStagesIntro}</FooterHeading>
          {services.serviceStages.map(({ heading: serviceHeading }) => (
            <FooterItem key={uuid()}>{serviceHeading}</FooterItem>
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

        <StyledFooterSection>
          <FooterHeading>{socialMediaHeading}</FooterHeading>
          <SocialMedias />
        </StyledFooterSection>

        <FooterRights />
        {/* <StyledFooterSection> */}
        {/* </StyledFooterSection> */}
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Footer;
