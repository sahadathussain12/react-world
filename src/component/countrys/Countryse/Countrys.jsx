import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countrys.css'

const Countrys = ({countryPromiss}) => {
    const [visitedcountrys,setVisitedcountrys]=useState([])
    const [visitedFlags,setvisitedFlags] = useState([])

    const handleVisitedcountrys = (country)=>{
        console.log('visited countyrs clicked',country);
        const newvisitedCountrys = [...visitedcountrys,country]
        setVisitedcountrys(newvisitedCountrys) 
    }
    const handleVisitedFlags = (flags)=>{
       const newvisitedFlags = [...visitedFlags,flags]
       setvisitedFlags(newvisitedFlags);
    }

    const countrydata = use(countryPromiss)
    const country = countrydata.countries

    console.log(country);
    return (
        <div>
            <div  className='countrys-cs'>
            <h1>Ouar Country : {country.length} </h1>
            <h1>total countrys visited :{visitedcountrys.length}</h1>
            <h1>Total visited flags : {visitedFlags.length}</h1>
             <ol>
                 {
                visitedcountrys.map(country=> <li  key={country.cca3.cca3}>{country.name.common}</li> )
                
                  }
             </ol>
             <div className='flags-country'>
                {
                    visitedFlags.map(flags => <img src={flags}></img>)
                }
             </div>
            
            </div>
            
            <div className='countrys'>
                
                {
                country.map(country=> <Country country={country}
                    key={country.cca3.cca3}
                      handleVisitedcountrys={handleVisitedcountrys} handleVisitedFlags={handleVisitedFlags}></Country>)
                
            }
            </div>
        </div>
    );
};

export default Countrys;