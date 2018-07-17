var express = require('express');
var router = express.Router();
var clusterName = 'Unknown Cluster'
var imageTag    = 'Undefined'

/* GET home page. */
router.get('/', function(req, res, next) {
  if (process.env.CLUSTER_NAME) {
    clusterName = process.env.CLUSTER_NAME;
  }
  if (process.env.IMAGE_TAG) {
    imageTag = process.env.IMAGE_TAG;
  }

  res.render('index', { title: 'Red Hat Tech Exchange', clusterName, imageTag });
});

/* Return Cluster Name. */
router.get('/cluster', function(req, res, next) {
  if (process.env.CLUSTER_NAME) {
    clusterName = process.env.CLUSTER_NAME;
  }
  if (process.env.IMAGE_TAG) {
    imageTag = process.env.IMAGE_TAG;
  }
  res.contentType('application/text');
  res.send(clusterName+"\n");
});

module.exports = router;
