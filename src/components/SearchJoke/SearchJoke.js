import React, {useState } from 'react';


const SearchJoke = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [items, setItems] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);


    const search = (e) =>{
      
        setFirstname(e.target.value.split(' '))
           
       
    }

    const getApi = (firstName,secondName) => {

        if(firstname === '' && lastname ===''){
          alert('Please enter Fullname.');
        } else {
          fetch(`http://api.icndb.com/jokes/random?escape=javascript&firstName=${firstName}&lastName=${secondName}`)
      .then(res => res.json())
      .then(
        (result) => {

            setIsLoaded(true)
            setItems(result.value)
      
        },  
      )
      .catch((err) => {
        console.log(err)
      });
        }

           
    }


    const handleSubmit= (e) =>{

        e.preventDefault();
    }

    return(

        <div className="wrapper">
         <h1>Chuck Norris Jokes</h1>
            <div className="randomJ">
             <div className="text">
              <p className="quote">{isLoaded ? `"${items.joke}"` : null}</p>
              </div>
            </div>
            <form data-testid="search-form" onSubmit={handleSubmit}>
                  <label>
                      Fullname:
                      <input className="inputBox" placeholder='' type="text" name="name" onChange={search} required/>
                  </label>
                  <input className="button" type="submit" value="Submit" data-testid="submit" onClick={ () => getApi(firstname[0],firstname[1])}/>
              </form>

        </div>
        
    )
}

export default SearchJoke