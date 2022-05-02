// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function judges whether or not the temperature in celsius is hot or cold.
 */
function judgeCelsiusClicked() {
  //input, assigns the user input a variable
  let userCelsius = parseFloat(document.getElementById('user-celsius').value)
  //calculation, determines if the user input is hot or cold.
  if (userCelsius < 15) {
    document.getElementById('judged-temperature').innerHTML = 'the temperature you have inputted is ' + userCelsius + '. This means that it is cold outside.';
  }
  else {
    document.getElementById('judged-temperature').innerHTML = 'the temperature you have inputted is ' + userCelsius + '. This means that it is hot outside.';
  }
}