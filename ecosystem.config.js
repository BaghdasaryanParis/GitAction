module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "watch"       : true,
      "env": {
        "NODE_ENV": "development"
      },
      "env_production" : {
         "NODE_ENV": "production"
      }
    }]}