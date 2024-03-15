// Require client library and private key.
var ee = require('@google/earthengine');
var privateKey = require('/home/beldroega/NEPAM/mata-atlantica/code/ee-randersonlemos-85c812885efb.json');

// Initialize client library and run analysis.
var runAnalysis = function() {
  ee.initialize(null, null, function() {
    console.log("Hello world")
  }, function(e) {
    console.error('Initialization error: ' + e);
  });

};

// Authenticate using a service account.
ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function(e) {
  console.error('Authentication error: ' + e);
});
