/* ===================================================
 * app.js
 * ------
 * Namespace decalration, localization and settings
 * @dependencies: none
 * @author: Pierre Cholhot <pierre.cholhot@digitas.fr>
 * =================================================== */

(function(window) {

  /* APP DEFINITION
   * ============== */

  var App = {
    settings: {},
    l10n: {
      navbar: {},
      random: {}
    }
  };

  /* APP SETTINGS
   * ============ */

  App.settings.debug = true;
  App.settings.zoomMax = 2;
  App.settings.zoomZone = '#content';

  /* APP LOCALIZATION VARIABLES
   * ========================== */

  App.l10n.random.close = 'Fermer';

  App.l10n.navbar.openedNavAccessText = 'Liste dépliée';
  App.l10n.navbar.closedNavAccessText = 'Liste fermée';

  /* EXPOSE APP
   * ========== */

  window.App = App;

}(window));

/* ==============================================================================
 * app-transition.js
 * -----------------
 * @author: Pierre Cholhot <pierre.cholhot@digitas.fr>
 * @forked: bootstrap-transition.js v2.3.0 <http://twitter.github.com/bootstrap/>
 * @dependencies: jQuery, App
 * @changelog:
 * 1. 20-02-13: Forked from Twitter Bootstrap & linted
 * ============================================================================== */

(function($, App) {

  "use strict";

  $.support.transition = (function() {
    var transitionEnd = (function() {
      var el = document.createElement('bootstrap'),
        transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd otransitionend',
          'transition': 'transitionend'
        },
        name;
      for (name in transEndEventNames) {
        if (el.style[name] !== undefined) {
          return transEndEventNames[name];
        }
      }
    }());
    return transitionEnd && {
      end: transitionEnd
    };
  })();

}(window.jQuery, window.App));
