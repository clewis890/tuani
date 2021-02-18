const form = document.getElementById("contat-form")

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    sendMail(mail);
});

const sendMail = (mail) => {

    fetch("https:/tuani-git-v2.clewis890.vercel.app/contact", {
        method: 'POST',
        body: mail,

    }).then((response) => {
        return response.json();
    });
};