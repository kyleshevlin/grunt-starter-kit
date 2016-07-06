'use strict';

var GSK = {
  init: function init() {
    console.log('Grunt Starter Kit initialized');
  }
};

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(GSK.init());
//# sourceMappingURL=GSK.js.map
