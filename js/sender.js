let name, surname, mail, sub, text;

function sendMail() {
    name = document.getElementById('prenom').value;
    surname = document.getElementById('nom').value;
    mail = document.getElementById('meil').value;
    sub = document.getElementById('subj').value;
    text = document.getElementById('bodytext').value;
//Send e-mail with smtp. Write me a message in whatsapp to check if it works by my own for camera or get permission to log in.
    Email.send({
        Host: "smtp.gmail.com",
        Username : "izimaths.send@gmail.com",
        Password : "masterKod13",
        To : 'izimaths.get@gmail.com',
        From : `${name} ${surname} from ${mail}`,
        Subject : sub,
        Body : text,
        }).then(
            message => document.getElementById('centerman').innerHTML = '<h1 style="font-size: 250%">You have sent us an e-mail:</h1><div id="sentdiv">Your mail has been sent successfully. Thank you.</div>'
        );
}