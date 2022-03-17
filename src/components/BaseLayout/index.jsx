import Navigation from '../Navigation';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default BaseLayout;
