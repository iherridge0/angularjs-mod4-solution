(function () {
'use strict';

angular.module('Categories')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['CategoriesService', 'myData']
function CategoriesController(CategoriesService, myData){
  var $ctrl = this;

  $ctrl.myData = myData;

  $ctrl.$onInit = function () {
    //$ctrl.getAllCategories();
  }

  // $ctrl.getAllCategories = function () {
  //   console.log("CategoriesController.getAllCategories()");
  //
  //   var promise = CategoriesService.getAllCategories();
  //
  //   promise.then(function (response){
  //     var data = response.data;
  //     console.log("Categories retrieved -> {}",  data);
  //     $ctrl.data = data;
  //
  //   }, function (error){
  //     console.log("Something terrible has happened!", error);
  //   });
  //
  // };
};

})();
