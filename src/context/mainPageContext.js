import { createContext } from 'react';

const initialMainPageContext = { pageIndex: 0, setCurrentPage: () => {}, dataBooster: '', setDataBooster: () => {} };

const MainPageContext = createContext(initialMainPageContext);

export default MainPageContext;
