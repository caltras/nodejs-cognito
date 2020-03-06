module.exports  = {
    session: {
        secret: '6cbw^VB8qtMT',
        resave: true,
        saveUninitialized: true
    },
    aws: {
        region: process.env.AWS_REGION,
        cognito: {
            poolId: process.env.COGNITO_USER_POOL_ID,
            clientId: process.env.COGNITO_CLIENT_ID
        }
    }
}