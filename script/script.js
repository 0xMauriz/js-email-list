const outputOne = document.getElementById("listOfMails");
const reloadButton = document.getElementById("refetchButton");
const endpoint = "https:///flynn.boolean.careers/exercises/api/random/mail";


for (let i = 0; i < 10; i++) {
axios.get(endpoint)
    .then(response => {

        let responseOne = response.data;

        outputOne.innerHTML += `<li>${responseOne.response}</li>`;
    })

    .catch(error => {
        console.error(error.message)
    })
}

reloadButton.addEventListener ('click', () => {

for (let i = 0; i < 10; i++) {
axios.get(endpoint)
    .then(response => {

        let responseOne = response.data;

        if (i === 0) {

        outputOne.innerHTML = ``;

    }

        outputOne.innerHTML += `<li>${responseOne.response}</li>`;

    })

    .catch(error => {
        console.error(error.message)
    })
}
})