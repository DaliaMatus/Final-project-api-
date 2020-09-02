export default{
    PORT:process.env.PORT || 8000,
    MONGODB_URL:process.env.MONGODB_URL || 'mongodb+srv://Dalia_Matus:Dalia_Matus@cluster0.le0jt.mongodb.net/<dbname>?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};