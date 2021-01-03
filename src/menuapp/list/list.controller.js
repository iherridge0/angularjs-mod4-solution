(function () {
'use strict';

angular.module('ItemsList')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['myData']
function ItemsListController(myData){
  var $ctrl = this;



  $ctrl.$onInit = function () {
    $ctrl.myData = myData.data["menu_items"];
    console.log($ctrl.myData)
  }
};

})();
