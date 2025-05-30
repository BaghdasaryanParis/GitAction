module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "post_update" : ["pm2 restart ./ecosystem.config.js"]
    }]}