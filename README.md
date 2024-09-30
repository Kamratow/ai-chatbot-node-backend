# ai-chatbot-node-backend

Backend implementation of ai chatbot using node.
Based on the youtube tutorial you can find here: https://www.youtube.com/playlist?list=PLOvIwkWvHysNRNjLPcHHAWXrLzRkl__kR

## How to run the server

Before you run this project you will need to create an account on OpenAI platform portal:
https://platform.openai.com/

After you will have your account created make sure to create openai api key
You can rely here either on personal API key (currently considered legacy) or project API key.
After getting the key on the screen remember to copy it to a safe place as you won't be able to retrieve it again.
Second value needed from OpenAI platform will be organization ID.

When you will have everything set from the OpenAI side take both the API key and organization ID and save it in `.env` file which you will have to create on your own as this file is not versioned. Two env variables should have exact naming as stated in an example file content below (openAI library would be looking for those env names after the application is started):

```
OPENAI_API_KEY="here-put-the-openai-API-key"
OPENAI_ORGANIZATION_ID="here-put-the-organization-ID"
```

Now is the time to install all the depenencies with npm command:

```
npm install
```

Finally you can run the app with this command:

```
node index.js
```
