module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "watch"       : false,
      env_production: {
        NODE_ENV: process.env.SSH_KEY
      }
    }]}