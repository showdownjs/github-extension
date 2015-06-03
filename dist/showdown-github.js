/*! showdown-github 03-06-2015 */
(function () {
  'use strict';

  var github = function () {
    return [
      {
        type:    'lang',
        regex:   '(~T){2}([^~]+)(~T){2}',
        replace: function (match, prefix, content) {
          return '<del>' + content + '</del>';
        }
      }
    ];
  };
  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extensions.github = github;
  }
  if (typeof module !== 'undefined') {
    module.exports = github;
  }

}());

//# sourceMappingURL=showdown-github.js.map