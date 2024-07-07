const MySeihekiMusic = () => {
   const composers = {
      梶浦由記: {
         desc: "切ない、神秘的",
         fav: [
            "The world",
            "melodie",
            "焔の扉",
            "暁の車",
            "canta per me",
            "salva nos",
            "salve, terrae magicae",
            "Decretum",
            "Sis puella magica!",
         ],
      },
      菅野よう子: {
         desc: "クール",
         fav: [
            "GO DARK",
            "RUSH",
            "ケイヤクシャ",
            "Piano Black",
            "Rain",
            "Tank!",
            "Space Lion",
         ],
      },
      タニウチヒデキ: {
         desc: "ミステリアス",
         fav: ["勝負", "fate", "LのテーマB"],
      },
      中田ヤスタカ: {
         desc: "オシャレ",
         fav: ["FLASH BACK", "Garden of Eden"],
      },
   };
   const sections = document.querySelector(".js_sections");
   Object.keys(composers).forEach((composer) => {
      const section = document.createElement("section");
      section.classList.add("top_composerSection");

      const h2 = document.createElement("h2");
      h2.classList.add("top_composerName");
      h2.textContent = composer;
      section.appendChild(h2);

      const desc = document.createElement("p");
      desc.classList.add("top_songDesc");
      desc.textContent = `雰囲気:${composers[composer].desc}`;
      section.appendChild(desc);

      const ul = document.createElement("ul");
      ul.classList.add("top_songList");

      const favSongs = composers[composer].fav;
      favSongs.forEach((favSong) => {
         const a = document.createElement("a");
         const li = document.createElement("li");
         li.classList.add("top_songItem");
         a.classList.add("top_musicLink");
         a.target = "_blank";
         a.textContent = `${favSong}をyoutubeで探す`;
         a.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(
            favSong
         )}+${encodeURIComponent(composer)}`;
         li.appendChild(a);
         ul.appendChild(li);
         section.appendChild(ul);
      });
      sections.appendChild(section);
   });
};

export { MySeihekiMusic };
