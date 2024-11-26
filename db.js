db.collection('backlog').onSnapshot((snapshot) => {
	snapshot.docChanges().forEach(change => {
		if(change.type === 'added'){
			addGame(change.doc.data(), change.doc.id);
		}
		if(change.type === 'removed'){
			removeGame(change.doc.id);
		}
	});
});
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
	evt.preventDefault(); 
	const game = {
		Title: form.yay7.value 
	};

	db.collection('backlog').add(game)
		.then(() => {
			console.log('Game added to backlog');
			form.yay7.value = ''; 
		})
		.catch(err => console.log('Error adding game: ', err));
});

const gameContainer = document.querySelector('.nest');
gameContainer.addEventListener('click', evt => {
	console.log(evt);
	console.log('Tag name of clicked element:', evt.target.tagName);
	if(evt.target.tagName === 'I'){
		const id =evt.target.getAttribute('data-id');
		db.collection('backlog').doc(id).delete();
	}
});
	