export default{
    PORT:process.env.PORT || 8000,
    MONGODB_URL:process.env.MONGODB_URL || 'mongodb://localhost/api',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};