'use strict';
angular.module('partList').component('partList', {
    templateUrl: 'app/spare-parts-list.template.html',
    controller: function sparePartsCtrl() {
        this.spareImg = [
            {
                name: 'Bicycle part',
                image: 'images/image1.jpg'
            }, {
                name: 'Motorcycle part',
                image: 'images/image2.jpg'
            }, {
                name: 'Scooter part',
                image: 'images/image3.jpg'
            }
        ];

    }
})