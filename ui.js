const games = document.querySelector('.nest');

const addGame = (data, id) => {
  const html = `
    <div class="wrapper" data-id="${id}">
      <div class="title_game">${data.Title}</div>
    <div class="game-delete">
      <i class="material-icons" data-id="${id}" style="font-size: 50px;">delete</i></div>
	  </div>
    
	
  `;
  
  games.innerHTML += html;
};

const removeGame = (id) => {
  const game = document.querySelector(`.wrapper[data-id="${id}"]`);
  
  if (game) {
    game.remove();
  } else {
    console.log(`Game with id ${id} not found.`);
  }
};