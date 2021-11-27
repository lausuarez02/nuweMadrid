//vendors
import React, { useContext, useMemo } from 'react';
//handlers
import { duplicateMapIndustries, duplicateCheckIdustriesFunction, AlphabeticalOrderIndustries, onClickIndustriesHandler } from 'handlers/mainHandler';
//context
import { AppContext } from 'context/context';
//constants
import { BUTTON_INDUSTRIES } from 'constants/mainConstants';

const Dropdown = () => {
    const state = useContext(AppContext);

    const duplicateCheckIndustries = [];
    const AlphabeticalHelperIndustries = useMemo(() => AlphabeticalOrderIndustries({ fetching: state.fetching }))
    const duplicateCheckIndustriesHandler = useMemo(() => duplicateCheckIdustriesFunction({AlphabeticalHelperIndustries: AlphabeticalHelperIndustries, duplicateCheckIndustries: duplicateCheckIndustries}))
   // const onClickIndustriesHandler = useMemo(() => onClickSetValue({industries: state.industries, fetching: state.fetching}))
    const duplicateMapIndustriesHandler = useMemo(() => duplicateMapIndustries({ duplicateCheckIndustries: duplicateCheckIndustries, setFilter1: state.setFilter1, setIdustries: state.setIdustries}))

    return (
        <div>
             <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {BUTTON_INDUSTRIES}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {duplicateMapIndustriesHandler}
                        </ul>
                    </div>
            
        </div>
    );
};

export default Dropdown;