// C:\Users\Asus\todo\settings.js
const path = require("path");

module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: "flows.json",

  httpStatic: path.join(__dirname, "public"),
  httpAdminRoot: "/admin",
  httpNodeRoot: "/",

  editorTheme: { projects: { enabled: false } },

  // güçlü bir anahtar vermek istersen:
  // credentialSecret: "uzun-rastgele-bir-anahtar",

  // >>> BURAYI GÜNCELLEYİN
  functionGlobalContext: {
    ObjectId: (() => { try { return require("mongodb").ObjectId; } catch { return null; } })(),

    // Kullanacağımız lib'ler (hata olsa Node-RED çökmesin diye try/catch'li)
    bcrypt: (() => { try { return require("bcryptjs"); } catch { return null; } })(),
    jwt:    (() => { try { return require("jsonwebtoken"); } catch { return null; } })(),
    uuid:   (() => { try { return require("uuid"); } catch { return null; } })(),
  },
  // dış modül kullanımı
functionExternalModules: true,

functionGlobalContext: {
  bcrypt: require("bcryptjs"),
  jwt: require("jsonwebtoken"),
  uuidv4: require("uuid").v4
}


  // adminAuth ... (opsiyonel)
};
