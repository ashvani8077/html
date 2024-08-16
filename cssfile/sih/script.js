let currentLights = [0, 3]; // Current lights for both directions

const lights = ['red', 'yellow', 'green'];
const lightElements = {
    0: document.getElementById('light1'),
    1: document.getElementById('light2'),
    2: document.getElementById('light3'),
    3: document.getElementById('light4'),
    4: document.getElementById('light5'),
    5: document.getElementById('light6'),
};

function simulateTraffic() {
    const trafficIntensity = Math.floor(Math.random() * 3); // Random traffic intensity: 0, 1, or 2

    switch (trafficIntensity) {
        case 0:
            // Light stays longer for green
            changeLightDuration(5000, 2000, 3000); // Green stays for 5s, yellow for 2s, red for 3s
            break;
        case 1:
            // Light stays longer for yellow
            changeLightDuration(3000, 3000, 4000); // Green stays for 3s, yellow for 3s, red for 4s
            break;
        case 2:
            // Light stays longer for red
            changeLightDuration(2000, 1000, 6000); // Green stays for 2s, yellow for 1s, red for 6s
            break;
    }
}

function changeLightDuration(greenDuration, yellowDuration, redDuration) {
    for (let i = 0; i < currentLights.length; i++) {
        lightElements[currentLights[i]].classList.remove(lights[currentLights[i] % 3], 'active');
    }

    currentLights = currentLights.map(light => (light + 1) % 6);

    for (let i = 0; i < currentLights.length; i++) {
        lightElements[currentLights[i]].classList.add(lights[currentLights[i] % 3], 'active');
    }

    setTimeout(() => {
        for (let i = 0; i < currentLights.length; i++) {
            lightElements[currentLights[i]].classList.remove(lights[currentLights[i] % 3], 'active');
        }

        currentLights = currentLights.map(light => (light + 1) % 6);

        for (let i = 0; i < currentLights.length; i++) {
            lightElements[currentLights[i]].classList.add(lights[currentLights[i] % 3], 'active');
        }
    }, greenDuration + yellowDuration + redDuration);
}
