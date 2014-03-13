'use strict';

/**
 * @description Moódulo de Servicios de nuestra aplicación.
 *
 * @type {module|*}
 */
var phonecatServicios = angular.module('phonecatServicios', ['ngResource']);

/**
 * @description
 *
 * Fábrica para los servicios de teléfonos provenientes del servidor
 *
 * Dependencias: $resource
 */
phonecatServicios.factory('ServicioTelefonos', ['$resource',
  /**
   *
   * @param $resource Servicio de AngularJS para crear clientes REST
   * @returns {*} función que regresa los metodos de nuestro servicio
   */
  function($resource){
    // Metodo GET para obteber la lista de teléfonos o un teléfono por ID
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
