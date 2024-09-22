"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🛠️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repo/JustaTz01/JUSTATZ-MD';
  const img = '';

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
this is* *JUSTATZ_MD .*\n support our you tube channel *by*,  https://youtube.com/@justatz?si=tqLJPjHj_7WIH26p

╭─────────────────────➳
│╭────────────────────➳
││ 🗼 *REPOSITORY:* ${data.html_url}
││ 🌟 *STARS:* ${repoInfo.stars}
││ 🧧 *FORKS:* ${repoInfo.forks}
││ 📅 *RELEASE DATE:* ${releaseDate}
││🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
││ 👨‍💻 *OWNER:* *JUSTATZ-MD*
││ 💞 *THEME:* *JUSTATZ*
││ 🥰 *Alone*
│╰────────────────────➳
│╭──────────────────❍ 
││  ╭───────────────➳
││  │ _*Made With JustaTz Tech*_
││  ╰───────────────➳
│╰──────────────────❍ 
╰─────────────────────➳ 
 ❍━━━━━━━━━━━━━━━━━━❍`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
