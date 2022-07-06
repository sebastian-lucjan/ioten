import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import { Pros, StyledIconWrapper, StyledProsList } from './ProsList.styles';

export default function ProsList({ prosList }) {
  return (
    <StyledProsList>
      {prosList.map((pros) => (
        <Pros key={uuid()}>
          <StyledIconWrapper>
            <Icon icon={pros.icon} width="22px" />
          </StyledIconWrapper>
          <p>{pros.text}</p>
        </Pros>
      ))}
    </StyledProsList>
  );
}
