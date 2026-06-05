document.addEventListener('DOMContentLoaded', () => {
    const featureButtons = document.querySelectorAll('.btn-secondary');

    featureButtons.forEach(button => {
        button.addEventListener('click', () => {
            const feature = button.getAttribute('data-feature');

            if (feature === 'tutorials') {
                window.location.href = 'Extra.html';
                return;
            }

            let message = 'Explore more learning options soon!';
            if (feature === 'resources') {
                message = 'Study resources are being prepared for you. Check back soon!';
            } else if (feature === 'mentors') {
                message = 'Mentor support will be available shortly. Stay tuned!';
            }

            alert(message);
        });
    });
});
