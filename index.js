function addMenu(pageTitle) {
    const menuElement = document.getElementById('menu');
    const menuMarkUp = ` <div>
        <h1> ${pageTitle} </h1>
        <a href="index.html">Home</a><br>
        <a href="about.html">About Us</a><br>
        <a href="contact.html">Contact Us</a><br>
        <a href="events.html">Upcoming Events!</a><br>
    </div>`
    menuElement.innerHTML = menuMarkUp;
}