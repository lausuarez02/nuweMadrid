import {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppWrapper({ children}){
    const [filter1, setFilter1] = useState('state');
    const [name, setName] = useState([]);
    const [industries, setIdustries] = useState([]);
    //fetch
    const [fetching, setFetching] = useState([{}])
    return(
        <AppContext.Provider value={{filter1, setFilter1, fetching, setFetching, name, setName, industries, setIdustries}}>
            {children}
        </AppContext.Provider>
    );
}