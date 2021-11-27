
export const handleMainFetch = async ({ setFilter1, setFetching }) => {
    try{
        setFilter1('loading')
  const res = await fetch( 'https://nodemiddlewaree.herokuapp.com/', {
       mode: 'cors'
   })
   const data = await res.json();
   setFetching(data);
   setFilter1('state')
}
catch(e){
    console.log(e)
}
   
}

export const handleSearchState = ({ setFilter1 }) => {
    return e => setFilter1(e.target.value)
}
         
export const AlphabeticalOrderName = ({fetching}) => {
       return fetching.slice(0).sort((a,b ) => {
            if(a.name < b.name){
                return -1
            }
            if(a.name > b.name){
                return 1
            }
            return 0;
        });
    
      }

 export const FoundedOrderNewer = ({fetching}) => {
            return fetching.slice(0).sort((a, b) => {
                return b.founded - a.founded
            })
          }

export const FoundedOrderOlder = ({ fetching }) => {
    return fetching.slice(0).sort((a, b) => {
        return a.founded - b.founded
    })
    }

//order industries
export const AlphabeticalOrderIndustries = ({ fetching }) => {
    return fetching.slice(0).sort((a, b) => {
        if(a.industry < b.industry) return -1;
        if(a.industry > b.industry) return 1;
        return 0;
    }) 
}


export  const duplicateCheckIdustriesFunction = ({ AlphabeticalHelperIndustries, duplicateCheckIndustries }) => {
    return AlphabeticalHelperIndustries.map(data => {if (duplicateCheckIndustries.includes(data.industry))
        return null;
        duplicateCheckIndustries.push(data.industry);
      return data});
        
}
/*export const onClickSetValue = (e) => {
    state.setIdustries(e.target.outerText)
    state.setFilter1('Search')
}*/

export const duplicateMapIndustries = ({ duplicateCheckIndustries, setFilter1, setIdustries}) => {
    return duplicateCheckIndustries.map(data => {return(<li key={data} ><a className="dropdown-item" onClick={(e) => {setIdustries(e.target.outerText); setFilter1('Search')}}>{data}</a></li>)})
}

//dropdown idustry filter
export const IndustriesFilter = ({industries, fetching}) => {
    return fetching.filter(info => info.industry === industries)
 }