Package.describe({
  name: 'axis4:smooth-subscription-loader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  var packages = [
    'standard-app-packages',
    'ecmascript'
  ];
  api.use(packages);
  
  api.addFiles([
    'lib/client/smooth-subscription-loader.html',
    'lib/client/smooth-subscription-loader.js',
    'lib/client/smooth-subscription-loader.css'
  ], 'client');

  var SmoothSubscriptionLoader = {
    options: {
      loader: null
    }
  };
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('axis4:smooth-subscription-loader');
  api.addFiles('smooth-subscription-loader-tests.js');
});
