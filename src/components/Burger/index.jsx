import StyledBurger from './Burger.styles';

const Burger = ({ isOpen, toggleNavigation, isWhite, setRef }) => {
  // const { burgerRef } = useContext(MainPageContext);

  return (
    <StyledBurger ref={setRef} className="burger-navigation" isOpen={isOpen} isWhite={isWhite} onClick={toggleNavigation}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
