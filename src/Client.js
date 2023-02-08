import * as Realm from "realm-web";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import APP_ID from "./auth_mongoconfig.json";

export const app = new Realm.App(APP_ID.appid);

async function loginAnonymous() {
  // Create an anonymous credential
  const credentials = Realm.Credentials.anonymous();
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    await app.currentUser.refreshCustomData();
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    return app.currentUser.accessToken;
  } catch (err) {
    console.error("Failed to log in", err);
  }
}

export const cache = new InMemoryCache({});

const Client = new ApolloClient({
  link: new HttpLink({
    uri: `https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID.appid}/graphql`,

    fetch: async (uri, options) => {
      const accessToken = await loginAnonymous();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

export default Client;
