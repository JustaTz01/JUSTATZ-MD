"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "justatz", reaction: "nipobos", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *JUSTATZ md  * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *JUSTATZ Tech*';
    let varmess = z + d;
    var img = 'https://i.imgur.com/8nyhO23.jpeg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *JUSTΔTZ MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *JUSTΔTZ*'
      let varmess=z+d
      var img='https://telegra.ph/file/347ba7a613b4d025b89a8.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
