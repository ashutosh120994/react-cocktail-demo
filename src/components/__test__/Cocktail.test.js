import React from 'react';
import { render } from '@testing-library/react';
import Cocktail from '../Cocktail';

describe('Test Cocktail', () => {
  const data = {
    itemData: {
      dateModified: '2016-04-28 19:14:52',
      idDrink: '15675',
      strAlcoholic: 'Alcoholic',
      strCategory: 'Ordinary Drink',
      strCreativeCommonsConfirmed: 'No',
      strDrink: 'A midsummernight dream',
      strDrinkAlternate: null,
      strDrinkDE: null,
      strDrinkES: null,
      strDrinkFR: null,
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg',
      strGlass: 'Collins Glass',
      strIBA: null,
      strIngredient1: 'Vodka',
      strIngredient2: 'Kirschwasser',
      strIngredient3: 'Strawberry liqueur',
      strIngredient4: 'Strawberries',
      strIngredient5: 'Schweppes Russchian',
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strInstructions:
        'Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water',
      strInstructionsDE:
        'Die Erdbeeren in einem Mixer mischen. Gießen Sie sie zusammen mit Wodka, Kirch und Erdbeerlikör über Eis in einen Shaker. Gut schütteln und ein Highball Glas einfüllen. Füllen Sie das russische Wasser auf.',
      strInstructionsES: null,
      strInstructionsFR: null,
      strMeasure1: '2 oz ',
      strMeasure2: '1 oz ',
      strMeasure3: '1 tsp ',
      strMeasure4: '5 ',
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strTags: null,
      strVideo: null,
    },
  };
  test('should have cocktail name', () => {
    const { getAllByTestId } = render(
      <Cocktail {...data.itemData} />,
    );
    expect(...getAllByTestId('cocktailItem-name')).toHaveTextContent('A midsummernight dream');
  });
});
