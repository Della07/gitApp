
class Github {

    constructor() {

        this.client_id = '79e94b7eb173135c80d8';
        this.client_secret = '5d854799d970a48d5dd2bd43011769a2df8f5782';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';

    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };

    }

}

