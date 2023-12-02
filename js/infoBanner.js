AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "captain-america": {
        banner_url: "./assets/posters/captain-america-banner.jpg",
        title: "Captain America",
        released_year: "1940",
        description:
          "Captain America ,a superhero created by Joe Simon and Jack Kirby, appears in Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940 by Timely Comics, a corporate predecessor to Marvel. Equipped with an American flag-inspired costume and a virtually indestructible shield, Captain America and his sidekick Bucky Barnes clashed frequently with the villainous Red Skull and other members of the Axis powers.",
      },
      "the-adventures-of-tintin": {
        banner_url: "./assets/posters/the-adventures-of-tintin-banner.png",
        title: "The Adventures of Tintin",
        released_year: "1929",
        description:
          "The Adventures of Tintin is a series of 24 bande dessinée albums created by Belgian cartoonist Georges Remi, who wrote under the pen name Hergé. The series was one of the most popular European comics of the 20th century. By 2007, a century after Hergé's birth in 1907, Tintin had been published in more than 70 languages with sales of more than 200 million copies, and had been adapted for radio, television, theatre, and film.",
      },
      "the-hulk": {
        banner_url: "./assets/posters/the-hulk-banner.jpg",
        title: "The Hulk",
        released_year: "1962",
        description:
          "The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk, a green-skinned, hulking and muscular humanoid possessing a limitless degree of physical strength.",
      },
      "chacha-chaudhury": {
        banner_url: "./assets/posters/chacha-chaudhury-banner.jpg",
        title: "Chacha Chaudhury",
        released_year: "1971",
        description:
          "Chacha Chaudhary was created in 1971 for the Hindi magazine Lotpot. It soon became popular among kids and the elderly alike. Pran was inspired from the ancient philosopher Chanakya and elders people of every village who resides to help and solve problems by their elderly experience.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      anchor: "left",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      anchor: "left",
      width: 0.75,
      height: 2,
      color: "#fff",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
