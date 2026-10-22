# Silly Draw! with the Gemini AI judge

```
index.html                       the game
netlify/functions/judge.mjs      the AI judge (holds your key, calls Gemini)
netlify.toml                     tells Netlify where the function is
```

## Turn on the AI judge (free)

1. Get a free key at https://aistudio.google.com (Get API key).
2. Put this folder on GitHub and connect the repo to Netlify (or use the Netlify CLI). Functions are deployed from the repo/CLI.
3. In Netlify: Site configuration -> Environment variables -> add `GEMINI_API_KEY` with your key.
4. Redeploy. Open the site on a phone and tap JUDGE IT.

Optional: add `GEMINI_MODEL` to use a different Gemini model (default `gemini-3.5-flash-lite`).

## How it behaves

- The camera watches until it sees a drawing, then sends ONE small photo to the function, which asks Gemini to judge it.
- The result shows what Gemini saw ("I see: ...") and a "Judged by Gemini" tag.
- If the function is not set up, offline, over the free limit, or slow (20 s), the game falls back to the simple offline judge and says so.
- The judgment is spoken with the phone's built-in voice. The speaker button at the top left turns it on or off.
- The page never stores the photo. Point the camera at the paper only.

## Privacy note

On Google's free tier, the content you send may be used to improve Google's products. Paid tier does not. Keep faces and the room out of the frame.
