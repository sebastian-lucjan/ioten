import { v4 as uuid } from 'uuid';
import { BsCheckLg } from 'react-icons/bs';
import { rainbowColors } from 'src/assets/styles/theme';
import { TextParagraph } from 'src/components/TextComponents';
import { StyledBenefit, StyledBenefitsList, StyledColorCheckIcon } from './BenefitsList.styles';

const ColorCheckIcon = ({ color }) => {
  return (
    <StyledColorCheckIcon color={color}>
      <BsCheckLg style={{ color }} />
    </StyledColorCheckIcon>
  );
};

const BenefitsList = ({ prosList, index }) => {
  const accentColor = rainbowColors[index];

  return (
    <StyledBenefitsList>
      {prosList.map((profit) => (
        <StyledBenefit key={uuid()}>
          <div className="service-detail__check">
            <ColorCheckIcon color={accentColor} />
          </div>
          <TextParagraph size="sm">{profit.text}</TextParagraph>
        </StyledBenefit>
      ))}
    </StyledBenefitsList>
  );
};

export default BenefitsList;
