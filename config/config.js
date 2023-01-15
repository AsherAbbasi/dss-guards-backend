const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '../../.env')});
const {
    PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    SCHEMA_NAME,
    DB_DIALECT,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    EMAIL_FROM,
    JWT_SECRET,
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    JWT_REFRESH_EXPIRATION_DAYS,
    JWT_ACCESS_EXPIRATION_MINUTES
} = process.env;

module.exports = {
    PORT,
    SCHEMA_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_DIALECT,
    email: {
        smtp: {
          host: SMTP_HOST,
          port: SMTP_PORT,
          auth: {
            user: SMTP_USERNAME,
            pass: SMTP_PASSWORD,
          },
        },
        from: EMAIL_FROM,
    },
    jwt: {
      secret: JWT_SECRET,
      resetPasswordExpirationMinutes: JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
      refreshExpirationDays: JWT_REFRESH_EXPIRATION_DAYS,
      accessExpirationMinutes:JWT_ACCESS_EXPIRATION_MINUTES,
    },
};
