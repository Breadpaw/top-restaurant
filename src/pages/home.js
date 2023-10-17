import contentClearer from '../helpers/contentClearer';
import tabLoader from '../tab';

export default function homeLoader() {
	contentClearer();
	tabLoader();

	const contentDiv = document.querySelector('#content');

	setTitle('Vesuvio - by Arthur Bucco', contentDiv);

	addParagraph(
		"Ah, Vesuvio, the place where business and pleasure often mingle in the back rooms and over heaping plates of pasta. Situated right here in Newark, this joint has been a cornerstone for the family, a hub for us, the Soprano family. But don't think it's just us wiseguys who come here – the locals, they love Vesuvio too. They appreciate good food and a little drama, just like the rest of us.",
		contentDiv
	);
	addParagraph(
		"The aroma of garlic and marinara sauce hits you the second you walk through the door. The red-checkered tablecloths and low-lit ambiance give this place an old-world charm that's been drawing folks in for generations.",
		contentDiv
	);
	addParagraph(
		"Over the years, Vesuvio's been the backdrop for many a deal, or maybe even a disagreement or two. And let's not forget, it's where we've celebrated, where we've mourned, and where we've made some pretty big decisions. Tony Soprano himself, he's had his share of meals at that famous booth.",
		contentDiv
	);
	addParagraph(
		"So, if you're looking for a taste of classic Italian cuisine with a side of Jersey's finest drama, Vesuvio's the place to be. But just remember, when you walk through those doors, you're not just entering a restaurant; you're stepping into the world of the Sopranos. Bon appétit!",
		contentDiv
	);
}

function setTitle(title, parentElement) {
	const titleH1Element = document.createElement('h1');
	titleH1Element.innerText = title;

	parentElement.appendChild(titleH1Element);
}

function addParagraph(text, parentElement) {
	const pElement = document.createElement('p');
	pElement.innerText = text;

	parentElement.appendChild(pElement);
}
