import React from 'react';
import {Link} from "react-router-dom";


const Cocktail = ({id, name, image, info, glass}) => {
    return (
        <article className='cocktail' data-testid="cocktailItem">
            <Link className='btn' to={`/cocktail/${id}`} data-testid="cocktailItem-link">
                <div className="img-container" data-testid="cocktailItem-image-container">
                    <img src={image} alt={name} data-testid="cocktailItem-image"/>
                </div>
                <div className="cocktail-footer" data-testid="cocktailItem-footer">
                    <h3 data-testid="cocktailItem-name">{name}</h3>
                    <h4>{glass}</h4>
                    <p>{info}</p>
                </div>
            </Link>
        </article>
    )
};

export default Cocktail;
