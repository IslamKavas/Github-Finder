import Github from './github.js';
import UI from './ui.js'

//github ve ui classlarinin bir ornegini olusturma

const github = new Github();
const ui = new UI();



// From html
const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');

//Ara butonuna tiklandiginda
searchButton.addEventListener('click', getInput);

//Enter butonuna tiklandiginda
searchUser.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        getInput();
    }
});

function getInput() {
    if(searchUser.value !== '') {
    github.getUser(searchUser.value).then((data) => {
        if(data.profile.message === 'Not Found') {
            // hata mesaji goster
            ui.showAlert('The user you are looking for cannot be found', 'alert alert-danger');
        } else {
            // kullaniciyi goster
            ui.showAlert('The user you are looking for is found successfully', 'alert alert-success');
            ui.showProfile(data.profile);
            //projelerini goster
            ui.showRepos(data.repos);
        }
    });
    } else {
        ui.showAlert('The form box cannot be empty', 'alert alert-info');
        ui.clearProfile();
    }

    searchUser.value = '';
     
}

//theme
const themeBtn = document.getElementById("theme")

themeBtn.addEventListener("click", changeTheme)

function changeTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');
}

