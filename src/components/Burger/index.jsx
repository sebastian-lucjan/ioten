import StyledBurger from './Burger.styles';

const Burger = ({ isOpen, toggleNavigation, isWhite, setRef }) => {
  return (
    <StyledBurger
      aria-label={isOpen ? 'zamknij menu i wróć do strony' : 'otwórz menu nawigacji'}
      title={isOpen ? 'zamknij' : 'otwórz'}
      ref={setRef}
      className="burger-navigation"
      isOpen={isOpen}
      isWhite={isWhite}
      onClick={toggleNavigation}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
