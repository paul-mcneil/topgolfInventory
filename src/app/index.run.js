(function() {
  'use strict';

  angular
    .module('topgolfInventory')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
