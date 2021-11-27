//vendors
import React, {useMemo, useEffect, useContext} from 'react';
//context
import { AppContext } from 'context/context';
//handlers
import {AlphabeticalOrderName, FoundedOrderNewer, FoundedOrderOlder ,handleMainFetch, IndustriesFilter} from 'handlers/mainHandler';
//constants
import { WEBSITE } from 'constants/mainConstants';
//component
import Loader from 'components/loader/loader';

const Card = () => {
        const state = useContext(AppContext);

        const handlerFoundedOrderNewer = useMemo(() => FoundedOrderNewer({fetching: state.fetching}))
        const handlerAlphabeticalOrderName = useMemo(() => AlphabeticalOrderName({fetching: state.fetching}))
        const handlerFoundedOrderOlder = useMemo(() => FoundedOrderOlder({fetching: state.fetching}))
        const handlerIndustriesFilter = useMemo(() => IndustriesFilter({industries: state.industries, fetching: state.fetching}))
        useEffect(() => {
            handleMainFetch({setFilter1: state.setFilter1, setFetching: state.setFetching})
        }, [])
        
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <div className="row" >
            {(() => {
                switch(state.filter1){
                    case 'loading':
                        return(
                            <div className="container-loader">
                            <Loader/>
                            </div>
                        )
                    case 'state':
                        return(
                            state.fetching.map(data => {
                                return(
                                    <div className="col-sm-6" >
                                        <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                            <div className="card-body" >
                                                <h5 className="card-title">{data.name}</h5>
                                                    <p className="card-text">{data.founded}</p>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                            <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    case 'New':
                        return(
                            handlerFoundedOrderNewer.map(data => 
                                { 
                                return(
                                    <div className="col-sm-6" >
                                        <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                            <div className="card-body" >
                                                <h5 className="card-title">{data.name}</h5>
                                                    <p className="card-text">{data.founded}</p>
                                                    <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                    <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                            </div>
                                        </div>
                                    </div>
            
                                )
                            })
                        )
                        case 'Older':
                            return(
                                handlerFoundedOrderOlder.map(data => 
                                    { 
                                    return(
                                        <div className="col-sm-6" >
                                            <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                <div className="card-body" >
                                                    <h5 className="card-title">{data.name}</h5>
                                                        <p className="card-text">{data.founded}</p>
                                                        <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                        <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                                </div>
                                            </div>
                                        </div>
                
                                    )
                                })
                            )
                        case 'Alphabetical':
                            return(
                                handlerAlphabeticalOrderName.map(data => 
                                    { 
                                    return(
                                        <div className="col-sm-6" >
                                            <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                <div className="card-body" >
                                                    <h5 className="card-title">{data.name}</h5>
                                                        <p className="card-text">{data.founded}</p>
                                                        <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                        <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                                </div>
                                            </div>
                                        </div>
                
                                    )
                                })
                            )
                            case 'Industry':
                                return(
                                    handlerAlphabeticalOrderName.map(data => 
                                        { 
                                        return(
                                            <div className="col-sm-6" >
                                                <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                    <div className="card-body" >
                                                        <h5 className="card-title">{data.name}</h5>
                                                            <p className="card-text">{data.founded}</p>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                            <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                                    </div>
                                                </div>
                                            </div>
                    
                                        )
                                    })
                                )
                                case 'Search':
                                    return(
                                        handlerIndustriesFilter.map(data => {
                                            return(
                                                <div className="col-sm-6" >
                                                    <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                        <div className="card-body" >
                                                            <h5 className="card-title">{data.name}</h5>
                                                                <p className="card-text">{data.founded}</p>
                                                                <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                                <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                                <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>{WEBSITE}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                }
            }
            )
         ()}
                    </div>
    );
};

export default Card;
