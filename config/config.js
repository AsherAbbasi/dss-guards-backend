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
    SECURE,
    TLS,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    EMAIL_FROM,
    JWT_SECRET,
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    JWT_REFRESH_EXPIRATION_DAYS,
    JWT_ACCESS_EXPIRATION_MINUTES,
    CORS_ORIGIN,
    SENDGRID_API_KEY,
    SENDGRID_EMAIL,
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
    corsOrigin: CORS_ORIGIN,
    sendgridApiKey: "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",
  email: {
    from: SENDGRID_EMAIL,
  },
    jwt: {
        secret: JWT_SECRET,
        resetPasswordExpirationMinutes: JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
        refreshExpirationDays: JWT_REFRESH_EXPIRATION_DAYS,
        accessExpirationMinutes: JWT_ACCESS_EXPIRATION_MINUTES,
    },
};
