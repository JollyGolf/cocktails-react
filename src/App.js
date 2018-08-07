import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import RandomCocktail from './RandomCocktail';
import _ from 'lodash';
import { getRandomCocktail } from './api';

export default class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {isOpenCocktails: true};
  }
  setAttributes(el, attrs) {
  	Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
  }
  

  render() {
  	if(this.state.isOpenCocktails) {
  	  const mainField = document.getElementById('main-field');
  	  
  	  return (
        <Fragment>
        {
          _.times(4).forEach(async (index) => {
  	  	    const { body: { drinks } } = await getRandomCocktail();
  	  	    drinks.forEach(({
  	  		  idDrink, strDrink, strDrinkThumb, strInstructions, ...rest
  	  	    }) => {
  	          const cocktailField = document.createElement('div');
      	      this.setAttributes(cocktailField, { 'data-id': idDrink, class: `cocktail main-field__cocktail main-field__cocktail-flexbox main-field__cocktail-theme-transparency main-field__cocktail-border-size-s cocktail-item-${index}` });
      	      mainField.appendChild(cocktailField);

      	      const imageField = document.createElement('img');
              this.setAttributes(imageField, { src: strDrinkThumb, class: 'cocktail__image' });
              cocktailField.appendChild(imageField);

              const titleField = document.createElement('div');
      		  this.setAttributes(titleField, { class: 'cocktail__title text' });
              titleField.appendChild(document.createTextNode(strDrink));
              cocktailField.appendChild(titleField);

              const ingredientsField = document.createElement('div');
      		  this.setAttributes(ingredientsField, { class: `cocktail__ingredients ingredient-item-${index} text` });
      		  ingredientsField.appendChild(document.createTextNode('Ingredients: '));
      		  cocktailField.appendChild(ingredientsField);

      		  Object.keys(rest)
        	  .filter(value => value.match(/strIngredient\d+/))
        	  .forEach((key) => {
          	    if (rest[key]) {
           		  ingredientsField.appendChild(document.createTextNode(`${rest[key]}, `));
          		}
        	  });

      		  const allIngredient = document.createTextNode(`${document.getElementsByClassName(`ingredient-item-${index}`)[0].textContent.slice(0, -2)}.`);
      		  while (ingredientsField.firstChild) ingredientsField.removeChild(ingredientsField.firstChild);
      		  ingredientsField.appendChild(allIngredient);
      		  const instructionField = document.createElement('div');
      		  instructionField.appendChild(document.createTextNode(`Instruction: ${strInstructions}`));
      		  this.setAttributes(instructionField, { class: 'cocktail__instruction text' });
      		  cocktailField.appendChild(instructionField);
      		  const currentIdCocktail = cocktailField.getAttribute('data-id');
      		  //cocktailField.addEventListener('click', () => getFullDetails(currentIdCocktail));
  			})
   	  	  })
        }
        </Fragment>
    );
  	} else {
  	  return (
        <Fragment>
          <h1>False</h1>
        </Fragment>
    );
  	}
    
  }
}
