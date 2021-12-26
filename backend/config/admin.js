module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f2ddf6d613b21d8d6506b4207239a7a3'),
  },
});
