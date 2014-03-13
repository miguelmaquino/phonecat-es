'use strict';
/**
 * @description Moódulo de Controladores de nuestra aplicación.
 *
 * @type {module|*}
 */
var phonecatControladores = angular.module('phonecatControladores', []);

/**
 * @description
 *
 * Controlador para la vista listaTelefonos.html
 *
 * Dependencias: $scope, ServicioTelefonos
 *
 */
phonecatControladores.controller('ListaTelefonosCtrl', ['$scope', 'ServicioTelefonos',
  /**
   * @param $scope scope del controlador
   * @param ServicioTelefonos servicio para utilizar ngResource y obtener los teléfonos del servidor
   */
  function($scope, ServicioTelefonos) {

    // Arreglo de teléfonos que se obtienen a traves del servicio 'ServicioTelefonos'
    $scope.telefonos = ServicioTelefonos.query();

    // Propiedad para ordenar el arreglo de teléfonos inicializada a 'age'
    $scope.ordenarPor = 'age';
  }]);

/**
 * @description
 *
 * Controlador para la vista detalleTelefono.html
 *
 * Dependencias: $scope, $routeParams, ServicioTelefonos
 *
 */
phonecatControladores.controller('DetalleTelefonoCtrl', ['$scope', '$routeParams', 'ServicioTelefonos',
  /**
   * @param $scope
   * @param $routeParams
   * @param ServicioTelefonos
   */
  function($scope, $routeParams, ServicioTelefonos) {

    // Teléfono que se obtiéne a traves del servicio 'ServicioTelefonos'
    // obteniendo el ID del teléfono de los parámetros de ruta
    $scope.telefono = ServicioTelefonos.get({phoneId: $routeParams.phoneId}, function(telefono) {
      // Imágen principal del teléfono del arreglo de imágenes del teléfono que regrésa el servicio
      $scope.imagenPrincipal = telefono.images[0];
    });

    /**
     * @description Función para cambiar la Imágen principal del teléfono.
     *
     * @param {!string} urlImagen URL de la imágen que se asignará como imágen principal
     */
    $scope.setImage = function(urlImagen) {
      // Imágen principal del teléfono del arreglo de imágenes del teléfono que regrésa el servicio
      $scope.imagenPrincipal = urlImagen;
    }
  }]);
