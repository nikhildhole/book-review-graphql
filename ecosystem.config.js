module.exports = {
  apps: [
    {
      name: 'book-review-api',
      script: 'src/index.js', // your main JS file
      instances: 'max', // or a number
      exec_mode: 'cluster', // cluster mode for load balancing
      watch: false, // default is false
      env: {
        NODE_ENV: 'development',
        watch: true, // enable watch in development
      },
      env_production: {
        NODE_ENV: 'production',
        watch: false, // disable watch in production
      },
    },
  ],
};
