document.addEventListener('DOMContentLoaded', () => {
    const categoryPopup = document.getElementById('category-popup');
    const buyNowPopup = document.getElementById('buy-now-popup');
    const authPopup = document.getElementById('auth-popup');

    // Open and close category popup
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            categoryPopup.style.display = 'flex';
        });
    });

    // Open and close buy now popup
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', () => {
            buyNowPopup.style.display = 'flex';
        });
    });

    // Open and close sign up/sign in popup
    document.querySelectorAll('.account-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            authPopup.style.display = 'flex';
        });
    });

    // Close popup functionality
    document.querySelectorAll('.close-popup').forEach(button => {
        button.addEventListener('click', () => {
            categoryPopup.style.display = 'none';
            buyNowPopup.style.display = 'none';
            authPopup.style.display = 'none';
        });
    });

    // Close popups when clicking outside
    [categoryPopup, buyNowPopup, authPopup].forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});
