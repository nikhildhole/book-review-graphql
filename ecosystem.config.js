module.exports = {
  apps: [
    {
      name: 'book-review-api',
      script: 'npm',
      args: 'run start',
      instances: 'max', // or a number
      exec_mode: 'cluster', // cluster mode for load balancing
      watch: true, // auto-restart on code changes (for dev)
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
