const form = document.querySelector('form')

const profileContainer = document.getElementById('profile-container');
const formContainer = document.getElementById('form-container');
const inputUsername = document.getElementById('username')

// Fetch Using fetch() - Latest
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = inputUsername.value.trim()
    const requestURL = `https://api.github.com/users/${username}`

    if (!username || username.includes(" ")) {
        // Display an error message or feedback to the user
        alert("Please enter a valid GitHub username.");
        return;
    }

    console.log(`Request URL: ${requestURL}`)

    fetch(requestURL).then((response) => response.json()).then((data) => {
        console.log(data)

        // Get the required fields of data
        const name = data.name
        const avatarURL = data.avatar_url
        const followers = data.followers
        const profileURL = data.html_url

        // Create a container div for the profile card
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        // Create an image element for the avatar
        const avatarImg = document.createElement('img');
        avatarImg.src = avatarURL;
        avatarImg.alt = 'Avatar';

        // Create a paragraph element for the follower count
        const followersText = document.createElement('p');
        followersText.textContent = `${name} | Followers: ${followers}`;

        // Append the image and followers count to the profile card
        profileCard.appendChild(avatarImg);
        profileCard.appendChild(followersText);

        // Create a button element for the visiting the user's profile page
        const visitButton = document.createElement('a')
        visitButton.href = profileURL
        visitButton.target = "_blank"
        visitButton.innerHTML = '<button type="button">Visit Profile</button>'

        // Append the Visit Profile Button to the Profile Card
        profileCard.appendChild(visitButton)

        // Check if a profile card already exists in the profile container and remove it
        const existingProfileCard = profileContainer.querySelector('.profile-card');
        if (existingProfileCard) {
            profileContainer.removeChild(existingProfileCard);
        }

        // Append the profile card to a profile container
        profileContainer.appendChild(profileCard);
    }).catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
    })
})

/*

// Fetch Using XMLHttpRequest() - Previously Used
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = inputUsername.value
    const requestURL = `https://api.github.com/users/${username}`

    if (!username || username.includes(" ")) {
        // Display an error message or feedback to the user
        alert("Please enter a valid GitHub username.");
        return;
    }

    console.log(`Request URL: ${requestURL}`)

    const request = new XMLHttpRequest()
    request.open("GET", requestURL)
    request.onreadystatechange = () => {
        console.log(`Ready State: ${request.readyState}`)
        if(request.readyState === 4) {
            const data = JSON.parse(request.responseText)

            // Get the required fields of data
            const name = data.name
            const avatarURL = data.avatar_url
            const followers = data.followers
            const profileURL = data.html_url

            // Create a container div for the profile card
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile-card');

            // Create an image element for the avatar
            const avatarImg = document.createElement('img');
            avatarImg.src = avatarURL;
            avatarImg.alt = 'Avatar';

            // Create a paragraph element for the follower count
            const followersText = document.createElement('p');
            followersText.textContent = `${name} | Followers: ${followers}`;

            // Append the image and followers count to the profile card
            profileCard.appendChild(avatarImg);
            profileCard.appendChild(followersText);

            // Create a button element for the visiting the user's profile page
            const visitButton = document.createElement('a')
            visitButton.href = profileURL
            visitButton.target = "_blank"
            visitButton.innerHTML = '<button type="button">Visit Profile</button>'

            // Append the Visit Profile Button to the Profile Card
            profileCard.appendChild(visitButton)

            // Check if a profile card already exists in the profile container and remove it
            const existingProfileCard = profileContainer.querySelector('.profile-card');
            if (existingProfileCard) {
                profileContainer.removeChild(existingProfileCard);
            }

            // Append the profile card to a profile container
            profileContainer.appendChild(profileCard);
        }
    }
    request.send()
})

*/