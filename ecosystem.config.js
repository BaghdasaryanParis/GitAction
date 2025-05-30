module.exports = {
  apps: [{
    name   : "node-app",
    script : "./node.js",
    watch  : false,

    env: {
      NODE_ENV: "development",
      SSH_KEY: process.env.SSH_KEY
    },
    env_production: {
      NODE_ENV: "production",
      SSH_KEY: process.env.SSH_KEY
    }
  }]
};
