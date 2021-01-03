(function () {
'use strict';

angular.module('ItemsList')
.controller('ItemsListController', CategoriesController);

CategoriesController.$inject = ['myData']
function CategoriesController(myData){
  var $ctrl = this;



  $ctrl.$onInit = function () {
    $ctrl.myData = myData;
  }
};

})();
