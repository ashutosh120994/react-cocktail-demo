import React from "react";

const Filter = ({
    dropDown,
    filterType,
    filterByCategory,
    setFilterByCategory,
    filterByIngredient,
    setFilterByIngredient
}) => {
  
  const handleFilterByCategoryChange = e => {
    setFilterByCategory(e.target.value);
  };
  const handleFilterByIngredientChange = e => {
    setFilterByIngredient(e.target.value);
  };

  const mapCategories = dropDown.map(item => (
    <option value={item.strCategory} key={item.strCategory}>
      {item.strCategory || 'All'}
    </option>
  ));

  const mapIngredients = dropDown.map(item => (
    <option value={item.strIngredient1} key={item.strIngredient1}>
      {item.strIngredient1}
    </option>
  ));

  return (
    <div>
      <div>
        {filterType === "category" &&
            <>
                <label>Select Category : </label>
                <select className="form-control" defaultValue={filterByCategory} value={filterByCategory} onChange={handleFilterByCategoryChange}>
                    {mapCategories}
                </select>
            </>
        }
        {filterType === "ingredient" &&
            <>
                <label>Select Ingredient : </label>
                <select className="form-control" defaultValue={filterByIngredient} onChange={handleFilterByIngredientChange}>
                    {mapIngredients}
                </select>
            </>
        }
      </div>
      {/* <button className='btn-block btn-primary' onClick={clearFilter}>clear</button> */}
    </div>
  );
};

export default Filter;
