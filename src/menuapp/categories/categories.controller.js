(function () {
'use strict';

angular.module('Categories')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['myData']
function CategoriesController(myData){
  var $ctrl = this;



  $ctrl.$onInit = function () {
    $ctrl.myData = myData;
  }
};

})();
