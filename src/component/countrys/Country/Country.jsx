
import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedcountrys,handleVisitedFlags}) => {
    console.log(country);
    //   console.log(handleVisitedcountrys);
    // console.log(handleVisitedFlags);
  const [visited,setvisited] = useState(false)


    const handlaClick = () =>{
        setvisited(!visited)
        handleVisitedcountrys(country)
    }
    return (
        <div className={`Country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h2>Name : {country.name.common}</h2> 
           <p>population :{country.population.population}</p>
           <p>area : {country.area.area} {country.area.area > 30000 ? 'Big country ': 'small country'}</p>
           <p>capital : {country.capital.capital}</p>
           <p>cca3 : {country.cca3.cca3}</p>
           <p>continents : {country.continents.continents}</p>
           <button onClick={handlaClick}>
            {visited ? 'visited': 'not visited'}
           </button>
           <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>add visited flags</button>
        </div>
    );
};

export default Country;