var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
      navigator.notification.vibrate(1000);

      angular.element(document).ready(function() {
        angular.bootstrap(document);
      });
    },
};