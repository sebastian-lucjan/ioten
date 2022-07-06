import image404 from 'src/assets/images/four-one-four.png';
import Image from 'next/image';
import styled from 'styled-components';

const Styled404Image = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 50%;
    padding: 0 20px 0 40px;
  } ;
`;

const FourOneFourImage = () => {
  return (
    <Styled404Image>
      <Image src={image404} alt="liczba 404 złożona z kubików" />
    </Styled404Image>
  );
};

export default FourOneFourImage;
