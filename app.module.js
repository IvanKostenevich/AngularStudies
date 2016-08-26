'use strict';
var plantApp = angular.module('plantApp', [
    'ui.router'
])
plantApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('products', {
            url: '/products',
            templateUrl: 'app/spare-parts-list.template.html',
            controller: 'sparePartsCtrl'

        })
        .state('factory', {
            url: '/factory',
            templateUrl: 'app/production-queue.template.html',
            controller: 'productionQueueCtrl'

        })

})

