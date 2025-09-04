// C:\Users\Asus\todo\settings.js
const path = require("path");

module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: "flows.json",

  // Statik dosyalar (public klasörü)
  httpStatic: path.join(__dirname, "public"),

  // >>> Editör (admin UI) artık /admin altında açılacak
  httpAdminRoot: "/admin",

  // >>> HTTP In düğümleri (REST API) kök yolu
  // Uçların değişmemesi için "/" bırakıyorum ( /todos aynen çalışır )
  // İstersen "/api" yapıp tüm uçları /api/todos şeklinde toplayabilirsin.
  httpNodeRoot: "/",

  // Videodaki gibi projeleri kapatalım
  editorTheme: { projects: { enabled: false } },

  // Bu uyarıyı kaldırmak istersen (opsiyonel): güçlü bir gizli anahtar ver
  // credentialSecret: "buraya-uzun-rastgele-bir-gizli-anahtar-yaz",

  // Fonksiyon düğümlerinde ObjectId kullanmak için
  functionGlobalContext: {
    ObjectId: (() => { try { return require("mongodb").ObjectId; } catch { return null; } })()
  },

  // (Opsiyonel) Admin panele şifre koymak için aç:
  // adminAuth: {
  //   type: "credentials",
  //   users: [{
  //     username: "admin",
  //     password: "<hash'i buraya yapıştır>", // node-red-admin hash-pw ile üret
  //     permissions: "*"
  //   }]
  // },
};
