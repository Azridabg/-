let headerATagElement = document.getElementById('headerBtn');
headerATagElement.addEventListener('mouseover', () => {
    headerATagElement.style.backgroundColor = 'lightgreen';
});
headerATagElement.addEventListener('mouseout', () => {
    headerATagElement.style.backgroundColor = 'white';
});