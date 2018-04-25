'use strict';

// register 'inventory-list' component, along with associated controller and template
angular.
    module('inventoryList').
    component('inventoryList', {
        templateUrl: 'app/inventory-list/inventory-list.template.html',
        controller: function InventoryListController(){
            this.inventory = [
                {
                    serialnum: 'Nexus S',
                    description: 'Fast just got faster with Nexus S.',
                    location: 'Parsippany,NJ',
                    rfidnum: '12346'
                }, {
                    serialnum: 'Motorola XOOM™ with Wi-Fi',
                    description: 'The Next, Next Generation tablet.',
                    location: 'Parsippany,NJ',
                    rfidnum: '123fasd346'          
                }, {
                    serialnum: 'MOTOROLA XOOM™',
                    description: 'The Next, Next Generation tablet.',
                    location: 'warehouse',
                    rfidnum: '123sadfafv46'
                }
            ];
        }
});