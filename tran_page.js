const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add('SHOW');
        } else {
            entry.target.classList.remove('SHOW');
        }
    });
});

const hiddenElements = document.querySelectorAll('.HIDDEN');
hiddenElements.forEach((el) => observer.observe(el));