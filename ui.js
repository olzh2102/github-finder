class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}
	// Display profile in UI
	showProfile(user) {
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img src="${user.avatar_url}" class="img-fluid mb-2">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary mb-3">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary mb-3">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success mb-3">Followers: ${user.followers}</span>
						<span class="badge badge-info mb-3">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Websites/Blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class="page-heading mb-3">Latest Repos</h3>
			<div id="repos"></div>
		`;
	}

	// Show alert message
	showAlert(msg, className) {
		// Clear any remaining alert message
		this.clearAlert();
		// Create div
		const div = document.createElement('div');
		// Add classes
		div.className = className;
		// Add text
		div.appendChild(document.createTextNode(msg));
		// Get parent
		const container = document.querySelector('.searchContainer');
		// Get search box
		const search = document.querySelector('.search');
		// Insert alert
		container.insertBefore(div, search);

		// Timeout after 3 sec
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	// Clear alert message
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	}

	// Clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}
