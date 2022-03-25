import { createContext } from 'react';

const initialMainPageContext = { pageIndex: 0 };

const MainPageContext = createContext(initialMainPageContext);

export default MainPageContext;
