class Github {
	constructor() {
		this.client_id = '7aef00b272d75f0f18ff';
		this.client_secret = '8ee902a4e053e5ccad8b50b8bd85280e40ede7d1';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}
