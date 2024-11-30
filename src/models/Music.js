import data from "../../data/music.json" with { type: "json" };

class Music {
  static getMusic() {
    return data;
  }

  static getMusicById(id) {
    return data.music.find((music) => music.id === id);
  }
}

export default Music;
