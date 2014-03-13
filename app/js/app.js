'use strict';

/**
 * @description
 *
 * Módulo principal de nuestra aplicación.
 *
 * Dependéncias de AngularJS: ngRoute
 * Dependéncias de aplicación: phonecatControladores, phonecatFiltros, phonecatServicios y phonecatAnimations
 *
 * @type {module|*}
 */
var phonecatApp = angular.module('phonecatApp',
  [
    'ngRoute',
    'phonecatControladores',
    'phonecatFiltros',
    'phonecatServicios',
    'phonecatAnimations'
  ]);

/**
 * @description
 *
 * Configuración de nuestra aplicación.
 *
 * Dependéncias: $routeProvider
 *
 */
phonecatApp.config(['$routeProvider',
  /**
   * @description
   *
   * Método para configurar las rutas de nuestra aplicación.
   * Asigna una vista y un controlador por url.
   *
   * RUTA: /telefonos
   * VISTA: listaTelefonos.html
   * CONTROLADOR: ListaTelefonosCtrl
   *
   * RUTA: /telefonos/:phoneId
   * VISTA: detalleTelefono.html
   * CONTROLADOR: DetalleTelefonoCtrl
   *
   * RUTA: Cualquier otra ruta
   * VISTA: listaTelefonos.html
   * CONTROLADOR: ListaTelefonosCtrl
   *
   * @param {!$routeProvider}
   */
    function($routeProvider) {
    $routeProvider.
      when('/telefonos', {
        templateUrl: 'partials/listaTelefonos.html',
        controller: 'ListaTelefonosCtrl'
      }).
      when('/telefonos/:phoneId', {
        templateUrl: 'partials/detalleTelefono.html',
        controller: 'DetalleTelefonoCtrl'
      }).
      otherwise({
        redirectTo: '/telefonos'
      });
  }]);
