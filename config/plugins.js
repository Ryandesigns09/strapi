module.exports = ({ env }) => ({
  // Configuration for other plugins can be added here as needed
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
