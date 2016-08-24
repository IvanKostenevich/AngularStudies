'use strict';
angular.module('productionQueue').component('productionQueue', {
    templateUrl: 'app/production-queue.template.html',
    controller: function productionQueueCtrl($scope, $interval, $q) {
        $scope.sparePartList = [
            {
                name: 'BicyclePart',
                constructionTime: '1'
            }, {
                name: 'MotorcyclePart',
                constructionTime: '3'
            }, {
                name: 'ScooterPart',
                constructionTime: '2'
            }
        ];
        $scope.selectedPart = $scope.sparePartList[0];
        $scope.productionQueue = [];
        $scope.completionTime = 0;
        $scope.addToQueue = function () {
            $scope.productionQueue.push($scope.selectedPart);
            $scope.completionTime += Number($scope.selectedPart.constructionTime);
        };

        $scope.progressBar = document.getElementById('progressBar');
        $scope.produceParts = function () {
            var deferred = $q.defer();
            $interval(function () {
                $scope.progressBar.value += 1;
                if ($scope.progressBar.value >= $scope.progressBar.max) {
                    deferred.resolve();
                }
            }, 1000, $scope.completionTime);
            deferred.promise.then(function () {
                $scope.finalMessage = 'Parts Completed!';
            })
        };


    }
})
;
