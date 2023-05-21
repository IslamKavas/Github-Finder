class Github {
    constructor() {
        this.client_id = 'd8db462bb3cfab118b7e';
        this.client_secret = '127a2078e68d470f517c6cb0f2b991e8fbf90930';
        this.repos_count = 10;
        this.repos_sort = 'asc';
    }

    async getUser(user) {
        // gelen userla beraber istek atma
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //kullanicinin repolarini cekme
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //gelen cevabi jsona cevirme

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        console.log(repos);
        // islenmis veriyi fonksiyonun cagrildigi yere gonderme
        return {
            profile,
            repos,
        };
        
    } 
}

export default Github;

/*try {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const profile = await profileResponse.json();
    return profile;

    } catch (err){
        console.log(err)
    }*/