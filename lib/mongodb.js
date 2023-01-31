import { MongoClient } from "mongodb";

if (!process.env.DB_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.DB_URL;
const options = {};

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;