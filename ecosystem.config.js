module.exports = {
    "apps" : [{
      "name"        : "node-app",
      "script"      : "./node.js",
      "post_update" : ["pm2 restart node.js"]
    }]}