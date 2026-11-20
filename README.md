# Perfect Cane Corsos

## Run locally

```sh
npm install
Copy-Item .env.example .env
npm run dev
```

Set the four `VITE_EMAILJS_*` / `VITE_RECIPIENT_EMAIL` values in `.env` before
submitting a form. Both forms use the same EmailJS service, template, public
key, and configured recipient. Configure the EmailJS template to send to
`{{to_email}}`; the template parameters include `form_type`, `from_name`,
`reply_to`, `subject`, and `message`, along with the submitted form fields.

The EmailJS public key is intended for browser use. Do not put private keys in
this app.
