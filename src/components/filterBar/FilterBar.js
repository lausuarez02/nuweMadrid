//vendors
import React, {useContext} from 'react';
//css
import './filterBar.css';
//context
import { AppContext } from 'context/context';
//constants
import { BUTTON_ALPHABETICAL, BUTTON_NEWER, BUTTON_OLDER} from 'constants/mainConstants'
//component
import Dropdown from 'components/dropdown/dropdown';

const FilterBar = () => {
    const state = useContext(AppContext);
    
    return (
        <div>
            <nav className="navbar navbar-Filter navbar-light">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button" onClick={() => state.setFilter1('Alphabetical')}>{BUTTON_ALPHABETICAL}</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={() => state.setFilter1('New')}>{BUTTON_NEWER}</button>
                    <button className="btn btn-outline-success me-2" type="button" onClick={() => state.setFilter1('Older')}>{BUTTON_OLDER}</button>
                    <Dropdown/>
                </form>
            </nav>
        </div>
    );
};

export default FilterBar;