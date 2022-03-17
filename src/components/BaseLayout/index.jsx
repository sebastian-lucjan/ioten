import Navigation from 'src/components/Navigation';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default BaseLayout;