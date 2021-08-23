

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.toggle('showNav');
});

// transition stopper 
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-trans-stop');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-trans-stop');
    }, 400);
});

// text change 
const icons = ['clinic-medical', 'ambulance', 'rupee-sign'];
const subtext = ['creative designs', 'creative thoughts', 'creative ideas'];
const largeText = ['Providing support and medical care to the affected', 'Instant calling & transportation facility to hospitals', 'Free of cost Medicine, financial support and much more'];
let count = 1;

function textChange(){
    const mainDiv = document.querySelector('.hero-content-change');

    setInterval(() => {
        mainDiv.innerHTML = `
            <div>
                <span>
                    <i class = "fas fa-${icons[count]}"></i>
                </span>
                <h3>
                    <div class = "line"></div>
                    <span>${subtext[count]}</span>
                    <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                    ${largeText[count]}
                </h1>
            </div>
        `;
        count++;
        if(count > 2) count = 0;
    }, 3500);
}
textChange();


