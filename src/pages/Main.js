import React, {useEffect, useState} from 'react';
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import {Link} from "react-router-dom";

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('name');
    const [filterByCategory, setFilterByCategory] = useState("");
    const [filterByIngredient, setFilterByIngredient] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

    useEffect(() => {
        setLoading(true);

        async function loadCocktails() {
            try {
                let url = false;
                if(filterType === "name"){
                    url = `${baseUrl}/search.php?s=${searchTerm}`
                }
                if(filterType === "category"){
                    url = `${baseUrl}/filter.php?c=${filterByCategory}`
                }
                if(filterType === "ingredient"){
                    url = `${baseUrl}/filter.php?i=${filterByIngredient}`
                }
                if (url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    const {drinks} = data;
                    if (drinks) {
                        const newCocktails = drinks.map(item => {
                            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                            return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                        });
                        setCocktails(newCocktails);
                    }else{
                        setCocktails([]);
                    }
                } else {
                    setCocktails([]);
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }

        loadCocktails();
    }, [searchTerm, filterType, filterByCategory, filterByIngredient]);
    return (
        <>
            <div class="sidenav">
                <Link to='/'>CockTail Demo</Link>
                <SearchForm
                    setSearchTerm={setSearchTerm}
                    filterType={filterType}
                    setFilterType={setFilterType}
                    filterByCategory={filterByCategory}
                    setFilterByCategory={setFilterByCategory}
                    filterByIngredient={filterByIngredient}
                    setFilterByIngredient={setFilterByIngredient}
                />
            </div>
            <div class="main">
                <CocktailList loading={loading} cocktails={cocktails}/>
            </div>
        </>
    )
};

export default Main;
