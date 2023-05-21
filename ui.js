class UI {
    constructor () {
        this.profile = document.getElementById("profile")
    }

    //profil arayuzunu ekrana basma
    showProfile(user) {
        const created_at = new Date(user.created_at).toLocaleDateString();

        this.profile.innerHTML = `
        <div class="container border my-4 p-4">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid"  src="${user.avatar_url}" alt="">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100">Show Profile</a>
                </div>
                
                <div class="col-md-9">
                    <span class="badge bg-primary fs-6 mt-1">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary fs-6 mt-1">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success fs-6 mt-1">Followers: ${user.followers}</span>
                    <span class="badge bg-info fs-6 mt-1">Following: ${user.following}</span>

                    <ul class="list-group my-5">
                        <li class="list-group-item">About: ${user.bio}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item"> Created at: ${created_at}</li>
                    </ul>
                </div>

            </div>
            
        </div>
          
    
        <div class="container p-3" id="repos"></div>    
        
        `;
    }

    showRepos(repos) { 
        let output = '<h3 class= "fs-1">The Latest Repos</h3> ';
        repos.forEach((repo)=> {
        
            output += `
            <div class="border p-3 mb-4">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge bg-primary">Star Gazers : ${repo.stargazers_count}</span>
                <span class="badge bg-secondary">Watchers : ${repo.watchers_count}</span>
                <span class="badge bg-success">Forks : ${repo.forks_count}</span>
                </div>
            </div>

        </div>
        `;
        });
        //htmle gonderme
        document.getElementById('repos').innerHTML = output;
    }

    // Uyari mesaji olusturma
    showAlert(message, classname) {
        //div olusturma
        const div = document.createElement('div');
        // class ekleme
        div.className = classname;
        // yazi ekleme
        div.innerText = message;

        // gondecerecegimiz yerin elemanini alma
        const outlet = document.querySelector('#alert')

        //html'e gonderme
        outlet.appendChild(div);

        setTimeout(() => {
            this.clearAlert();
        }, 4000)
    }

    //uyariyi ekrandan silme
    clearAlert(){
        //ekrandaki alert

        const currentAlert = document.querySelector(".alert")
        //alert varsa kaldir
        if(currentAlert) {
            currentAlert.remove()
        }
    }

    //Arayuzu temizleme

    clearProfile() {
        this.profile.innerHTML = '';
    }
}

export default UI;