# Fieldwren Research: website

A research-services website: services, training, pricing, how to pay, free guides, a sample size calculator and a contact form that opens WhatsApp or email. There is no payment gateway and no database.

## Run it on your laptop (Windows, VS Code)

1. Install **Node.js LTS** from nodejs.org. Close and reopen VS Code afterwards.
2. Unzip the folder, then in VS Code choose **File > Open Folder** and select `fieldwren-research`.
3. Open the terminal with **Ctrl + `** and run, one at a time:

```
node -v
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. Press **Ctrl + C** in the terminal to stop it.

If PowerShell says "running scripts is disabled", run this once, then try again:

```
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## What to edit

| What | File |
|---|---|
| WhatsApp, phone, email, MTN number, founder profile, prices, packages | `src/config/site.ts` |
| Photos (Pexels numbers) | `src/config/images.ts` |
| Services | `src/content/services.ts` |
| Guides | `src/content/guides.ts` |
| Colours and fonts | `src/app/globals.css` |
| Your photo | replace `public/founder.jpg` |

Photos load from Pexels over the internet, so they appear when you are online.

## Check your work

```
npm run lint
npm run build
```

## Put it online

1. Push the folder to a GitHub repository.
2. In Vercel choose **Add New > Project**, pick the repository and deploy. You get a free address like `your-project.vercel.app`.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to that address.

## Notes

The privacy policy and terms are plain-language drafts. Have them reviewed before you rely on them.
