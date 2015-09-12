/* auth.controller.spec.js */
/* jshint expr: true */

/**
 * Unit tests for the AuthController
 * 
 * @param {String} The controller name
 */
describe('AuthController', function() {

  /**
   * beforeEach
   *
   * @description [description]
   */
  beforeEach(module('app'));

  /**
   * Cache some vars for global test usage
   */
  var $controller;
  var vm;

  /**
   * beforeEach
   *
   * @description Runs some stuff before each test. Returns nothing.
   * @param {Function} Injects the controller and sets up the vm variable for
   *   use in all the tests.
   */
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    vm = $controller('AuthController');
  }));

  /**
   * definition
   *
   * @description Tests the basic definition and existence of the controller
   * @param {String} The test name
   */
  describe('definition', function() {
    it('should be defined', function() {
      expect(vm).to.be.defined;
    });
  });
  
});