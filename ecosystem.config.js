module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "watch"       : false,
      env_production: {
        SSH_KEY: "no key"
      }
    }]}