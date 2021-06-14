//import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect} from 'react'; 
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import Axios from 'axios';


function App() {
 
  const [search,setSearch]=useState("chicken");
  const [recipes,setRecipe]=useState([]);

  const APP_ID= "508120d1";
  const APP_KEY="902a2b39b2cda3a2fcb53f7abb63f51a";


  useEffect(() => {
    getRecipes();
  },[])

  const getRecipes = async () =>{
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
 
    console.log(result);
    setRecipe(result.data.hits);
  }
  
  const onSearch= () =>{
      getRecipes();
  }

  const onInput = (e) =>{
      setSearch(e.target.value);
  }

  return (
    <div className="App">
      <Header search={search}  onInput={onInput} 
      onSearch={onSearch}/>
      <div className="container">
          <Recipe recipes={recipes} />
      </div>
       
      
    </div>
  );
}

export default App;
