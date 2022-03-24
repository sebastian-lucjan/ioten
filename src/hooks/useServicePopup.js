import { useState } from 'react';

const useServicePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(null);

  const handleOpenServiceStage = (index) => {
    setIsOpen(true);
    setServiceIndex(index);
  };

  return { isOpen, setIsOpen, serviceIndex, handleOpenServiceStage };
};

export default useServicePopup;
