import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const SingleCocktail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);

        async function getCocktail() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.drinks) {
                    const {strDrink: name, strDrinkThumb: image, strAlcoholic: info, idDrink: id, strGlass: glass, strCategory: category, strInstructions: instructions, strIngredient1: ingredient1, strIngredient2: ingredient2, strIngredient3: ingredient3, strIngredient4: ingredient4, strIngredient5: ingredient5} = data.drinks[0];
                    const ingredients = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5];
                    const newCocktail = {name, image, info, id, glass, category, instructions, ingredients};
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }

        getCocktail();
    }, [id]);

    if (loading) {
        return <h2 className="section-title">Loading...</h2>
    }
    if (!cocktail) {
        return (
            <section className='section cocktail-section'>

                <Link to='/' className='btn btn-primary'>back home</Link>
                <h2 className="section-title">No cocktail to display</h2>
            </section>
        );
    } else {
        const {name, image, category, glass, instructions, ingredients, info} = cocktail;

        return (
            <section className='section cocktail-section'>
                <Link to='/' className='btn btn-primary'>back home</Link>
                <h2 className="section-title">{name}</h2>
                <div className="drink">
                    <img src={image} alt={name}/>
                    <div className="drink-info">
                        <p>name: {name}</p>
                        <p>category: {category}</p>
                        <p>info: {info}</p>
                        <p>glass: {glass}</p>
                        <p>instructions: {instructions}</p>
                        <p>ingredients: {ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null
                        })}</p>
                    </div>
                </div>
            </section>
        )
    }
};


export default SingleCocktail;
