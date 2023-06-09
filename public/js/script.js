window.addEventListener('load', function() {
    // theme
    let theme = document.getElementById('theme');
    let html = document.querySelector('html');

    theme.addEventListener('click', function() {
        if (this.checked) {
            html.dataset.theme = 'halloween';
            localStorage.setItem('theme', 'halloween');
        } else {
            html.dataset.theme = 'emerald';
            localStorage.setItem('theme', 'emerald');
        }

        localStorage.setItem('theme', html.dataset.theme); // save theme
    });

    if (localStorage.getItem('theme')) {
        html.dataset.theme = localStorage.getItem('theme');
    }

    // scroll
    let jobs_main = document.getElementById('jobs-main');
    let jobs_btn = document.getElementById('jobs-btn');

    jobs_btn.addEventListener('click', function(e) {
        e.preventDefault();

        jobs_main.scrollIntoView({
            behavior: 'smooth'
        });
    });
});