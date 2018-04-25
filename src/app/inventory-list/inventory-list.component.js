'use strict';

// register 'inventory-list' component, along with associated controller and template
angular.
    module('inventoryList').
    component('inventoryList', {
        templateUrl: 'app/inventory-list/inventory-list.template.html',
        controller: ['$scope', function InventoryListController($scope){
            // var self = this;

            $scope.inventory = [
                {
                    serialnum: '111111',
                    description: 'TaylorMade RBZ Black',
                    location: 'Parsippany,NJ',
                    rfidnum: 'e8b2eb'
                }, {
                    serialnum: '351987',
                    description: '12 Pack Titleist AVX Golf Balls',
                    location: 'Parsippany,NJ',
                    rfidnum: '123fasd346'          
                }, {
                    serialnum: '5142009',
                    description: 'TaylorMade M3 Driver',
                    location: 'warehouse',
                    rfidnum: 'ec7d4a'
                }
            ];
            console.log('inside controller');
            $scope.submit = function(){
                console.log('inside function');
                $scope.inventory.push({
                    serialnum: $scope.serialnum,
                    description: $scope.description,
                    location: $scope.location,
                    rfidnum: $scope.rfidnum
                });

                $scope.serialnum ='';
                $scope.description = '';
                $scope.location = '';
                $scope.rfidnum = '';
            }



        }]
});