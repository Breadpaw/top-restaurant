import { addEventListeners } from '.';

const tabNames = ['Home', 'Menu', 'Contact'];

export default function tabLoader() {
	const contentDiv = document.getElementById('content');

	const ul = document.createElement('ul');
	ul.classList.add('navbar');
	contentDiv.appendChild(ul);

	tabNames.forEach((element) => {
		const navItem = document.createElement('li');
		navItem.innerText = element;
		navItem.id = element;
		navItem.className = 'tab';

		ul.appendChild(navItem);
	});

	addEventListeners();
}
