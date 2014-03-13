'use strict';

/**
 * @description Moódulo de Fíltros de nuestra aplicación.
 *
 * @type {module|*}
 */
var phonecatFiltros = angular.module('phonecatFiltros', []);
/**
 * @description
 *
 * Fíltro para desplegar una palóma si el parámetro "imput" es verdadero, o un táche de lo contrario
 */
phonecatFiltros.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
