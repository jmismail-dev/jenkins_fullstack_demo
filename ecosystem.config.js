module.exports = {
  apps: [
    {
      script: './src/app.js',
      watch: ['src'],
      ignore_watch: ["node_modules", "client"]
    }]
};