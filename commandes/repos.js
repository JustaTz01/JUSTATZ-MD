"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "⚙️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/JustaTz01/JUSTATZ_MD';
  const img = 'https://i.imgur.com/lXDN6dv.jpeg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *JUSTΔTZ_MD V7.*\n support our channel *by*,  www.youtube.com/@JustaTz


╭──━━━━━━☆•∞•☆━━━━━━⊛
└│🗼 *REPOSITORY:* ${data.html_url}
┌┤🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
╰──━━━━━━☆•∞•☆━━━━━━⊛
   

         ┌─═━━━⊷•∞•⊷━━━──✣
   ╭─⦿ ━━━══✣══━━➻
 ┌┤😶‍🌫️*VISITORS:* ${repoInfo.visitors}
 ┃│🌟 *STARS:* ${repoInfo.stars}
 ┃│🧧 *FORKS:* ${repoInfo.forks}
 ┃│📅 *RELEASE DATE:* ${releaseDate}
 ┌┤👨‍💻 *OWNER:* *JUSTΔTZ tech*
 ┃│💞 *THEME:* *JUSTΔTZ*
 ┃│🥰 *ΔLΩΠΣ*
   ╰─⦿ ━━━══✣══━━➻
         └─═━━━⊷•∞•⊷━━━──✣
 
  ▓▒━━━⊷➻•∞•➻➳⊷━━━▒▓
  
        ╭──═════──❖ 
╭  ╭❂ ⊷━━━━•∞•━━━━⊷
║  ┃ _*Made With JUSTΔTZ Tech*_
╰  ╰❂ ⊷━━━━•∞•━━━━⊷
        ╰──═════──❖ `;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
