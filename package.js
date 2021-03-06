
Package.describe({
  name    : 'semantic:ui-popup',
  summary : 'Semantic UI - Popup: Single component release',
  version : '1.11.6',
  git     : 'git://github.com/Semantic-Org/UI-Popup.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'popup.css',
    'popup.js'
  ], 'client');
});
