(function(){

    angular.module('breedApp', [])
    .controller('breedController', ['$scope', '$http', function($scope, $http) {
        $scope.breeds = [];

        // For Pagination
        $scope.options = [5, 10, 20, 50, 'All'];
        $scope.maxSize = $scope.options[0];

        $scope.setItemsPerPage = function(num) {
            $scope.maxSize = num === 'All' ? $scope.breeds.length : num;
            console.log("Its setItemsPerPage");
            console.log($scope.maxSize);
        };

        $scope.loadBreeds = function() {
            $http({
                method: 'GET',
                url: 'https://catfact.ninja/breeds'
            }).then(function successCallback(response) {
                // Request successful
                $scope.breeds = response.data.data;
                console.log($scope.breeds);
            }, function errorCallback(response) {
                // Request failed
                console.error('Error:', response.status, response.statusText);
            });
        };

        $scope.loadRandomFact = function() {
            $http({
                method: 'GET',
                url: 'https://catfact.ninja/fact'
            }).then(function successCallback(response) {
                // Request successful
                $scope.randomFact = response.data.fact;
                $('#randomFactModal').dialog({
                    modal: true,
                    width: 400,
                    height: 200,
                });
            }, function errorCallback(response) {
                // Request failed
                console.error('Error:', response.status, response.statusText);
            });
        };
    }]);
})();