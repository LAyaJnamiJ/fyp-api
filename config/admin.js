module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c09cf0f2c8fdc1640a9cd42af183fcc'),
  },
});
