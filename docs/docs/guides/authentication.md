# Authentication in Gumnut

Gumnut uses token-based authentication to identify users and manage access to collaborative documents.

## Authentication Flow

When connecting to Gumnut, you need to provide the `getToken` property with a method to call to obtain secure tokens:

```javascript
const doc = connectToGumnutDoc({
  docId: "good-dogs",
  getToken: someTokenMethod,
}).doc;
```

Gumnut will call this method whenever it needs a new token (on startup, or if an existing token expires):

1. Gumnut calls the method
2. Your backend generates and returns a token
3. Gumnut validates the token and associates the user with their edits
4. Other users can see who made which changes

### Development Tokens

For development and testing, Gumnut provides a helper function to create test tokens:

```javascript
import { buildTestToken } from "@gumnutdev/api";

const doc = connectToGumnutDoc({
  docId: "good-dogs",
  getToken: () =>
    buildTestToken("bandit-h", {
      name: "Bandit",
      email: "bandit.h@gumnut.dev",
    }),
}).doc;
```

::: warning Important
Test tokens should only be used during development. They are not secure for production use.
:::

### Production Tokens

In production, you should generate proper JWT tokens on your server:

1. Your server authenticates users through your normal auth flow
2. Your server generates a JWT that matches a public key you upload to Gumnut
3. This JWT has the client's userId and any other information (name, email etc)
4. Your client receives this token and provides it to Gumnut

## User Identity

When a token is provided, Gumnut extracts the user identity from it:

- The `sub` claim becomes the user's unique ID
- The `name` and `email` claim (if present) is used to show the user's details in the UI
- The `picture` claim (if present) can be shown in user presence indicators

## Multiple Users and Presence

Gumnut uses the provided tokens to identify who is making each edit. This enables:

- Displaying the name or email of users currently editing
- Showing colored cursors and selections for each user
- Attributing text to the users who wrote it

## Security Considerations

When implementing authentication for Gumnut, keep these security best practices in mind:

1. **Token Generation**: Generate tokens on your server, not in the browser
2. **Token Expiration**: Set appropriate expiration times for tokens
3. **HTTPS**: Always use HTTPS in production to protect tokens in transit
4. **Scoped Access**: Consider generating tokens that are scoped to specific documents
5. **Token Storage**: Store tokens securely; don't store in `localStorage` for sensitive applications

## Server-side JWT Generation

Here's an example of how you might generate a JWT on your server (Node.js example):

```javascript
// Server-side code
const jwt = require("jsonwebtoken");

function generateGumnutToken(user) {
  // Create the payload
  const payload = {
    sub: user.id,
    name: user.displayName,
    email: user.email,
  };

  // Sign the token with your secret key
  const token = jwt.sign(payload, process.env.GUMNUT_JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
}

// In your API route handler
app.get("/api/auth/gumnut-token", authenticate, (req, res) => {
  const token = generateGumnutToken(req.user);
  res.json({ token });
});
```

## Troubleshooting

If you encounter authentication issues:

1. **Invalid Token**: Check that your token is properly formatted and signed
2. **Expired Token**: Verify that the token hasn't expired
3. **User ID Mismatch**: Ensure you're not trying to change user IDs during a session
