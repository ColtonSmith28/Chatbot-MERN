import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and Listeners
const PORT = process.env.PORT || 5001;

connectToDatabase()
    .then(() => {
        const server = app.listen(PORT, () => 
            console.log("Server Open & Connected To Database on PORT: " + PORT)
        );

        // Handle server close properly
        process.on('SIGTERM', () => {
            server.close(() => {
            console.log('Process terminated. Server closed on PORT: ' + PORT);
            });
        });
    })
    .catch((err) => console.log(err));