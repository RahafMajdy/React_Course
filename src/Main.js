import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {useEffect, useState } from 'react';
import CardComp from './card';


function Main(){

    let [items, setMeals] = useState([]);

    async function getData(){

        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=m';
        
          const response = await fetch(url);
          const result = await response.json();
          console.log(result.meals)
          setMeals(result.meals) 
    
    }
    
    useEffect(function(){
        getData()
    },[])

    async function handleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchedValue);
        let data = await response.json();
        let filteredItems = data.meals.filter(function(item){return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase() )})
        setMeals(filteredItems)
  

    }

  

    
 

    return(
<>
<Form className="d-flex"  id="myform" onSubmit={handleSubmit}>
<Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              required
              />
<Button variant="outline-success" type='submit'>Search</Button>
</Form>
<div className="container" style={{display:"flex", flexWrap:"wrap", justifyContent:'20px', }}>
    {1?console.log(items):console.log(1)}
        {items.length !==0 ? items.map(function(item){

            return(
<>
<CardComp image={item.strMealThumb}
                 title={item.strMeal}

                    description={item.strInstructions}

                              Category={item.strCategory} />             
</>
            )
        }
    ) : <h3>No search results</h3>}
</div>
</>
    )
}

 export default Main;



 



 

 

 
