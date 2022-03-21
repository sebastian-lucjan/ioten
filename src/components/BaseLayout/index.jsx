import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
