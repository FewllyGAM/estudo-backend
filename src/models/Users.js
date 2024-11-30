import data from '../../data/users.json' with { type: "json" };
import Music from '../models/Music.js';

class Users {
  static getUsers() {
    return data;
  }

  static getUserById(id) {
    return data.users.find((user) => user.id === id);
  }

  //Pega todas as músicas ouvidas pelo usuário id
  static getAllSongs(id) {
    const musicList = Music.getMusic();

    const user = this.getUserById(id);

    //Mapeia as músicas escutadas pelo usuário e retorna o array com apenas os títulos delas
    return user.listened.map((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);
      return music.title;
    })
  }

  //Pega a música favorita do usuário (a música escutada mais vezes, se não houver, retorna a primeira)
  static getFavoriteSong(id) {
    //Pega todas as músicas
    const musicList = Music.getMusic();
    //Pega o usuário dado o id
    const user = this.getUserById(id);

    //Cria um objeto vazio para armazenar o título da música e a quantidade de vezes escutadas
    var existing = {};
    //Mapeia o array de músicas escudatas do usuário e retorna um array só com os títulos dela
    //enquanto armazena no "existing" a quantidade de vezes escutadas
    const listened = user.listened.map((song) => {
      //Encontra a música escutada pelo id
      const music = musicList.music.find((music) => music.id === song.songId);
      //Coloca os dados no existing
      existing.hasOwnProperty(music.title) ? existing[music.title] += 1 : (existing[music.title] = 1);
      return music.title;
    })
    
    //Se o usuário ouviu alguma música, vai procurar o que foi escutado mais vezes e retornar
    if (listened.length > 0){
      var favorite = listened[0];
      var mostListened = 1;
      for (const title in existing){
        if (mostListened < existing[title]) favorite = title;
      }
      return favorite;
    }
    else {
      return "None";
    }
  }

  //Pega os gêneros escutados pelo usuário
  static getAllGenres(id) {
    //Pega todas as músicas
    const musicList = Music.getMusic();
    //Pega o usuário pelo id
    const user = this.getUserById(id);

    //Mapeia as músicas escutadas pelo usuário e retorna um array com os gêneros
    var genreList = user.listened.map((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);
      return music.genre;
    })

    //Filtra o array de gêneros removendo os repetidos
    var existing = {};
    return genreList.filter((genre) =>{
      return existing.hasOwnProperty(genre) ? false : (existing[genre] = true);
    })
  }
}

export default Users;
