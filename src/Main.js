import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import { useState } from 'react';
import CardComp from './card';


function Main(){

    let [items, setIteams] = useState(data);

    function handleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value

        let filteredIteams = data.filter(function(item){return  item.title.toLowerCase().includes(searchedValue.toLowerCase() )})
        setIteams(filteredIteams);

    }


    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search"/>
            <button type='submit'>Search</button>
         </form>

        </div>
        
            <div style={{display:"flex", "flexWrap":"wrap", "justifyContent":"space-between", "gab":"20px"}}>
                {items.map(function(item){
                    return(
                        <CardComp title={item.title} image={item.image_url} description={item.description}/>
                        
                        ) })}
                    </div> 
        </>
          
         
   ); 
}

export default Main;