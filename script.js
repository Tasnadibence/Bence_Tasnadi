document.addEventListener("DOMContentLoaded", () => {
    const randomUserContainer = document.getElementById('random-user');

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            randomUserContainer.innerHTML = `
                <img src="${user.picture.large}" alt="Random User">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>Email: ${user.email}</p>
                <p>Telefonszám: ${user.phone}</p>
            `;
        })
        .catch(error => {
            console.error("Hiba történt az API kérés során: ", error);
        });
});
