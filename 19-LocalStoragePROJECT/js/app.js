// Variables
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');
let tweets = [];


// Eventlisteners
eventListeners();

function eventListeners() {
    // When the user adds a new tweet
    form.addEventListener('submit', addTweet);

    // When the document is ready
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        createHTML();
    });
}


// Functions
function addTweet(evt) {
    evt.preventDefault();

    // Textarea
    const tweet = document.querySelector('#tweet').value;

    // Validate
    if (tweet === '') {
        showError('A tweet cannot be empty');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Add tweet to array
    tweets = [...tweets, tweetObj];

    // Create HTML
    createHTML();

    // Reset form
    form.reset();
}

// Show error message
function showError(error) {
    const message = document.createElement('p');
    message.textContent = error;
    message.classList.add('error');

    // Insert in content
    const content = document.querySelector('#contenido');
    content.appendChild(message);

    // Remove the alert
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Show list of tweets
function createHTML() {

    cleanHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            
            const li = document.createElement('li');
            li.textContent = tweet.tweet;

            const btnDelete = document.createElement('a');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.textContent = 'X';

            li.appendChild(btnDelete);
            tweetsList.appendChild(li);

            // Add delete function
            btnDelete.onclick = () => {
                deleteTweet(tweet.id);
            }
        });
    }

    // Add to Local Storage
    syncStorage();
}

// Clean HTML
function cleanHTML() {
    while (tweetsList.firstChild) {
        tweetsList.removeChild(tweetsList.firstChild);
    }
}

// Add tweets to Local Storage
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Delete tweet
function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    createHTML();
}