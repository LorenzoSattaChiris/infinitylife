document.getElementById('send-button').addEventListener('click', sendMessage);


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

async function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const message = inputElement.value.trim();
    if (message === '') return;

    addMessageToChat('user', message);

    try {
        const response = await fetch('/javascript/prompts.json');
        const prompts = await response.json();
        const prompt = prompts.prompts[character.age] || prompts.prompts[prompts.prompts.length - 1];

        console.log('Message:', message);
        console.log('Character:', character);
        console.log('Prompt:', prompt);

        inputElement.value = '';

        const chatResponse = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message, character, prompt })
        });

        const data = await chatResponse.json();
        addMessageToChat('ai', data.message);
    } catch (error) {
        console.error('Error fetching prompt:', error);
        addMessageToChat('ai', 'An error occurred while fetching the prompt.');
    }
}


function addMessageToChat(sender, message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerText = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}



document.getElementById('advance').addEventListener('click', async () => {
    const ageElement = document.getElementById('character-age');
    let age = parseInt(ageElement.textContent.replace('Age: ', '')) + 1;
    ageElement.textContent = 'Age: ' + age;

    // try {
    //     const response = await fetch('/save-age', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ age })
    //     });

    //     if (!response.ok) {
    //         throw new Error('Failed to save age');
    //     }

    //     console.log('Age saved successfully.');
    // } catch (error) {
    //     console.error('Error saving age:', error);
    //     alert('Failed to save age. Please try again.');
    // }
});

document.getElementById('logout').addEventListener('click', async () => {
    try {
        const response = await fetch('/logout', { method: 'POST' });

        if (response.ok) {
            window.location.href = '/';
        } else {
            alert('Failed to logout. Please try again.');
        }
    } catch (error) {
        console.error('Error logging out:', error);
        alert('Failed to logout. Please try again.');
    }
});



// Check if the browser supports DeviceOrientationEvent
if (window.DeviceOrientationEvent) {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation, true);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('deviceorientation', handleOrientation, true);
    }
} else {
    console.log("Device Orientation not supported");
}

function handleOrientation(event) {
    const beta = event.beta; // In degree in the range [-180,180], or null if not supported
    const gamma = event.gamma; // In degree in the range [-90,90], or null if not supported

    if (beta === null || gamma === null) {
        console.log("Device orientation values are not available.");
        return;
    }

    // Handle tilt logic
    if (gamma > 15) {
        // Tilted to the right
        console.log("Tilted to the right");
        // Add your logic here
    } else if (gamma < -15) {
        // Tilted to the left
        console.log("Tilted to the left");
        // Add your logic here
    }
}

// Assuming the character object is already defined
let age = 0;

async function loadPrompts() {
    try {
        const response = await fetch('/javascript/prompts.json');
        const data = await response.json();
        return data.prompts;
    } catch (error) {
        console.error('Error loading prompts:', error);
        return [];
    }
}

function updatePrompt(prompts) {
    const promptElement = document.getElementById('prompt');
    const currentPrompt = prompts[character.age] || prompts[prompts.length - 1];
    promptElement.innerText = currentPrompt;
}

document.addEventListener('DOMContentLoaded', async () => {
    const prompts = await loadPrompts();
    updatePrompt(prompts);

    document.getElementById('advance').addEventListener('click', () => {
        character.age = (character.age + 1) % prompts.length; // Update age, loop back to 0 if exceeds prompt array
        updatePrompt(prompts);
    });
});
