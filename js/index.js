/* Toggle hide for featured item of the week */
document.addEventListener('DOMContentLoaded', () => {
    const featuredTitle = document.getElementById('featured-item');
    const featuredImage = document.getElementById('featured-item-image');

    if (featuredTitle) {
        featuredTitle.addEventListener('click', () => {
            featuredImage.classList.toggle('collapsed');

            if (featuredImage.classList.contains('collapsed')) {
                featuredTitle.textContent = 'Reveal today\'s featured item of the week!';
            } else {
                featuredTitle.textContent = 'Cookies!';
            }
        });
    }
});