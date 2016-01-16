angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.selected = "";
    $scope.search_filter = "";
    $scope.newItem = {};
    $scope.coordinates = {};
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
        
        // Submit
        $scope.listings.push($scope.newItem);
    };

    $scope.deleteListing = function(index) {
        // Deselect if selected and use splice to remove from array
        if ($scope.selected = $scope.listings[index])
            $scope.selected = "";
        $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
        // Put selected listing item in $scope.selected
        $scope.selected = $scope.listings[index];
    };
  }
]);
