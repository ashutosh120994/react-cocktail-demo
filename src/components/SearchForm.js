import React, {useEffect, useRef, useState} from 'react';
import Filter from "./Filter";

const SearchForm = ({
    setSearchTerm,
    filterType,
    setFilterType,
    filterByCategory,
    setFilterByCategory,
    filterByIngredient,
    setFilterByIngredient
}) => {

    const searchValue = useRef('');
    const filterValue = useRef('');
    const [dropDown, setDropDown] = useState([]);

    useEffect(() => {
        let param = '';
        if(filterType === "category"){
            param = 'c';
        }else if(filterType === "ingredient"){
            param = 'i';
        }
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${param}=list`)
        .then(response => response.json())
        .then(data => {
            setDropDown(data.drinks)
        });
    }, [filterType]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    };

    const handleFilterTypeChanges = (e) => {
        setFilterType(filterValue.current.value);
    };

    return (
        <section className='section'>
            <h2 className="section-title">search cocktails</h2>
            <form action="" className='form search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">
                        Filter by:
                    </label>
                    <select
                    name="filterType"
                    className="custom-select filterType"
                    id="inputGroupSelect02"
                    ref={filterValue}
                    onChange={handleFilterTypeChanges}
                    >
                        <option value="name">Name</option>
                        <option value="category">Categories</option>
                        <option value="ingredient">Ingredients</option>
                    </select>
                    {filterType === 'name' &&
                        <>
                            <label htmlFor="name">search your favourite cocktail</label>
                            <input placeholder='enter name' id='name' name='name' type="text" ref={searchValue}
                                onChange={searchCocktail}/>
                        </>
                    }
                    <Filter
                        dropDown={dropDown}
                        filterType={filterType}
                        filterByCategory={filterByCategory}
                        setFilterByCategory={setFilterByCategory}
                        filterByIngredient={filterByIngredient}
                        setFilterByIngredient={setFilterByIngredient}
                    />
                </div>
            </form>
        </section>
    )
};

export default SearchForm;
