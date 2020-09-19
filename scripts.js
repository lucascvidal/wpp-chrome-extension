const interval = setInterval(() => {
    const header = document.querySelector('header');

    if (header) {
        clearInterval(interval);

        const button = document.createElement('button');
        button.innerHTML = '2x';
        button.classList.add('two-x-btn');
        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => {
                console.log(audio.playbackRate)
                audio.playbackRate = 2;
            });
        });

        header.appendChild(button);
    }
}, 1000);
