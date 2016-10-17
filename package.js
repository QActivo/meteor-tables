Package.describe({
  name: 'qactivo:meteor-tables',
  summary: 'Reactive tables for large or small datasets in Meteor',
  version: '0.0.1'
});

Package.onUse(function (api) {

  var both = ['client', 'server'];

  api.versionsFrom(['METEOR@1.0']);
  
  api.use([
    'jquery',
    'check',
    'mongo',
    'blaze',
    'templating',
    'reactive-var',
    'tracker',
    'tmeasday:publish-counts',
    'numeral:numeral@1.5.3_1',
    'fortawesome:fontawesome@4.6.3',
    'fourseven:scss@3.8.1'
  ]);

  api.addFiles('lib/tables.js', both);

  api.addFiles('server/tables.api.js', 'server');
  
  api.addFiles([
    'client/lib/simplePagination.js',
    'client/templates/components/table-header.component.html',
    'client/templates/components/table-header.component.js',
    'client/templates/components/header.component.html',
    'client/templates/components/header.component.js',
    'client/templates/components/footer.component.html',
    'client/templates/components/footer.component.js',
    'client/templates/tables.template.html',
    'client/templates/tables.template.js',
    'client/scss/main.scss',
    'client/helpers.js',
    'client/records.js',
    'client/init.js'
  ], 'client');

  api.export('Tables');
});