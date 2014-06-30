var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
      navigator.notification.vibrate(250);
    },
};