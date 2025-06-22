# 🔐 BankID WebApp (Simulerad)

En mobilvänlig, responsiv BankID-liknande webapp med QR-login, profilsida, ID-kort och historik.

## ✅ Funktioner

- 📱 Mobilvänlig & PWA-stöd
- 🧑 Redigerbar profil (namn, personnummer, ålder)
- 🪪 ID-kort med standardprofilbild + QR-kod
- 🕓 Historik för ID-händelser
- 🔐 QR-login + FaceID-knapp (simulerad)
- ⚙️ Inställningar (logga ut, radera konto)

---

## 🛠️ Installation lokalt

### 1. Klona repo

```bash
git clone https://github.com/<ditt-användarnamn>/bankid-webapp.git
cd bankid-webappnpm install
cd client
npm install
cd ..PORT=5000
MONGO_URI=<din MongoDB-länk>npm run dev
