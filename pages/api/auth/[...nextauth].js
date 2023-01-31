import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'lkjiuhdjnbnvgftasjjfnfkkshsfjmnfkiif'
  }

};
export default NextAuth(authOptions);
