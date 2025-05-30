module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "watch"       : false,
      env_production: {
        SSH_KEY: process.env.SSH_KEY
      }
    }]}