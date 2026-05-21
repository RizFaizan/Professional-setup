require('dotenv').config();

const { connectDB } = require('./src/db/db.js');
const { createApp } = require('./src/app.js');

const startServer = async () => {
    const app = createApp();

    await connectDB();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`App is running on port: ${port}`);
    });
};

startServer().catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
});

