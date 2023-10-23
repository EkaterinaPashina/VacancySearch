
import './App.css';
import Search from './components/Search/search';
import Categories from './components/Categories/categories';
import Vacancies from './components/Vacancies/vacancies';
import data from './components/data.js';

function App() {
  const allCategoriesLength = data.map((category) => category.vacancy_list.length);

  function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    };
    return sum;
  };

  return (
    <div className="App">
      <Search />
      <div className="main__wrap">
        <div className="categorie__wrap">
          <p className="categorie__all">Все вакансии &middot; {arraySum(allCategoriesLength)}</p>
          {data.map((category) => <Categories key = {category.id} name = {category.name} vacancy_list = {category.vacancy_list}/>)}
        </div>
          <Vacancies />
      </div>
    </div>
    
  );

  
}



export default App;
