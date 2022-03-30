import StyledBurger from './Burger.styles';

const Index = ({ isOpen, toggleNavigation }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={toggleNavigation}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Index;
