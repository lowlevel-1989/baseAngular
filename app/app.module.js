var APPS = [];

var THIRD_PARTY_APPS = [
   'ngMaterial',
   'LocalStorageModule',
   'templates'
]; 

var DEPENDENCIES = THIRD_PARTY_APPS;
DEPENDENCIES = DEPENDENCIES.concat(APPS);
DEPENDENCIES = DEPENDENCIES.concat(['routes']);

module.exports = DEPENDENCIES;