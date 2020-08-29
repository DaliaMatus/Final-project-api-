export default{
    PORT:process.env.PORT || 8000,
    MONGODB_URI:process.env.MONGODB_URI || 'mongodb://localhost/api',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};