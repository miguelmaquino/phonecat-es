'use strict';

/* Tests e2e de la Aplicación PhoneCat */
describe('Aplicación PhoneCat', function() {

  it('debe redireccionar el archivo index.html a la ruta: index.html#/telefonos', function() {
    // Navéga a la url: app/index.html
    browser().navigateTo('app/index.html');

    // Expectatíva: la "url" de la localizacion (location()) del "browser" debe ser "/telefonos"
    expect(browser().location().url()).toBe('/telefonos');
  });

  /* Tests Vísta: Lista de Teléfonos */
  describe('Vísta de Lista de Teléfonos', function() {
    // Antes de cáda test: Navéga a la url "app/index.html#/telefonos"
    beforeEach(function() {
      // Navéga a la url: app/index.html#/telefonos
      browser().navigateTo('app/index.html#/telefonos');
    });

    it('debe filtrar la lista de teléfonos cuando el usuario escribe en el campo de búsqueda', function() {
      // Expectatíva: al iterar los <li> del elemento con class="phones" la cuenta de elementos debe ser 20
      expect(repeater('.phones li').count()).toBe(20);

      // En el input con modelo "busqueda" escribe la palábra "nexus"
      input('busqueda').enter('nexus');

      // Expectatíva: al iterar los <li> del elemento con class="phones" la cuenta de elementos debe ser 1
      expect(repeater('.phones li').count()).toBe(1);

      // En el input con modelo "busqueda" escribe la palábra "motorola"
      input('busqueda').enter('motorola');

      // Expectatíva: al iterar los <li> del elemento con class="phones" la cuenta de elementos debe ser 8
      expect(repeater('.phones li').count()).toBe(8);
    });


    it('debe ser posíble controlar el órden de los teléfonos por medio del select box', function() {
      // En el input con modelo "busqueda" escribe la palábra "tablet" para reducir la asersión del del test más corta
      input('busqueda').enter('tablet');

      /*
       *  Expectatíva: Iterar los <li> del elemento con class="phones"
       *               El orden del arréglo de propiedades "name" de los teléfonos deben ser:
       *               "Motorola XOOM\u2122 with Wi-Fi" y después "MOTOROLA XOOM\u2122"
       */
      expect(repeater('.phones li', 'Phone List').column('telefono.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"]);

      // Del <select> modelo "ordenarPor" seleccionar la opción "Alfabéticamente"
      select('ordenarPor').option('Alfabéticamente');

      /*
       *  Expectatíva: Iterar los <li> del elemento con class="phones"
       *  El orden del arréglo de propiedades "name" de los teléfonos deben ser:
       *  "MOTOROLA XOOM\u2122" y después "Motorola XOOM\u2122 with Wi-Fi"
       */
      expect(repeater('.phones li', 'Phone List').column('telefono.name')).
          toEqual(["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('debe desplegar links específicos por teléfono', function() {
      // En el input con modelo "busqueda" escribe la palábra "nexus"
      input('busqueda').enter('nexus');

      // Al elemento con class="phones" dar cick al <a> del <li> del elemento
      element('.phones li a').click();

      // Expectatíva: la "url" de la localizacion (location()) del "browser" debe ser "/telefonos/nexus-s"
      expect(browser().location().url()).toBe('/telefonos/nexus-s');
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/telefonos/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(binding('telefono.name')).toBe('Nexus S');
    });

    it('should verify that we display 4 thumbnail images on the nexus-s details page', function() {
      expect(repeater('#imagenTel img').count()).toBe(4);
    });

    it('should display the first phone image as the main phone image', function() {
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.phone-thumbs li:nth-child(3) img').click();
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.2.jpg');

      element('.phone-thumbs li:nth-child(1) img').click();
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });
  });
});
