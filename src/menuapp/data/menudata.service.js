(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  console.log("MenuDataService is up and running");

  service.getAllCategories = function(){
    console.log("MenuDataService.getAllCategories()");

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    });

    return response;
  }

  service.getItemsForCategory = function(categoryShortName) {
    console.log("MenuDataService.getItemsForCategory(" + categoryShortName + ")");

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=",
      params: {category: categoryShortName}
    });

    return response;
  }
}

})();
