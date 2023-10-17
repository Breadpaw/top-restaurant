export default function contentClearer() {
    // Clears all child nodes of content div
    const contentDiv = document.querySelector('#content');

    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
}