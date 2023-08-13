const processbar = () => {
    let bar = document.querySelectorAll('.progress > .progress-bar');
    // let data = document.getElementById("progressData").innerText = `${width}%`;
    bar.forEach((bar) => {
        let width = parseFloat(bar.dataset.progress)
        for(let i = 0; i < width; i++) {
            setTimeout(() => {
                bar.style.width = i + '%';
            }, i * 10)
        }
    })
};

processbar();