document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.video-card');
    const videoFrame = document.getElementById('videoFrame');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');

    function getEmbedUrl(videoId, autoplay = false) {
        return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0${autoplay ? '&autoplay=1' : ''}`;
    }

    function selectVideo(card, autoplay = false) {
        cards.forEach(item => item.classList.remove('active'));
        card.classList.add('active');

        const videoId = card.getAttribute('data-video');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');

        videoFrame.src = getEmbedUrl(videoId, autoplay);
        videoTitle.textContent = title;
        videoDescription.textContent = description;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => selectVideo(card, true));
    });

    if (cards.length > 0) {
        selectVideo(cards[0], false);
    }
});
