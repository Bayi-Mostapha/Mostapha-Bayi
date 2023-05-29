document.querySelector('.logo1').addEventListener('mouseover', () => {
    const logo = document.querySelector('.logo1');
    logo.textContent = 'MostaphaBayi'
});
document.querySelector('.logo2').addEventListener('mouseover', () => {
    const logo = document.querySelector('.logo2');
    logo.textContent = 'MostaphaBayi'
});
document.querySelector('.logo1').addEventListener('mouseout', () => {
    const logo = document.querySelector('.logo1');
    logo.textContent = 'MB'
});
document.querySelector('.logo2').addEventListener('mouseout', () => {
    const logo = document.querySelector('.logo2');
    logo.textContent = 'MB'
});
document.querySelector('.logo1').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/mostapha-bayi-9b5161267/';
});
document.querySelector('.logo2').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/mostapha-bayi-9b5161267/';
});

setInterval(() => {
    let img = document.querySelector('#image').innerHTML;
    document.querySelector('#image').innerHTML = '<img src="pictures/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg" alt="" class="pic">';
    setTimeout(() => {
        document.querySelector('#image').innerHTML = img;
    }, 5000)
}, 10000);

document.querySelector('.hamburger').addEventListener('click', () => {
    const btn = document.querySelector('.hamburger');
    const nav = document.querySelector('.mbnav');
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar');
    if (window.pageYOffset > 50) {
        nav.classList.add('shadow');
    }
    else {
        nav.classList.remove('shadow');
    }
});

window.addEventListener('resize', () => {
    const btn = document.querySelector('.hamburger');
    const nav = document.querySelector('.mbnav');
    const swidth = window.innerWidth || document.documentElement.clientWidth;
    if (swidth > 650 && btn.classList.contains('active') && nav.classList.contains('active')) {
        btn.classList.remove('active');
        nav.classList.remove('active');
    }
});

document.querySelector('.title1').addEventListener('click', () => {
    const i = document.querySelector('.title1 i');
    i.classList.toggle('spin');
    const d = document.querySelector('.details1');
    d.classList.toggle('show-details');
});
document.querySelector('.title2').addEventListener('click', () => {
    const i = document.querySelector('.title2 i');
    i.classList.toggle('spin');
    const d = document.querySelector('.details2');
    d.classList.toggle('show-details');
});
document.querySelector('.title3').addEventListener('click', () => {
    const i = document.querySelector('.title3 i');
    i.classList.toggle('spin');
    const d = document.querySelector('.details3');
    d.classList.toggle('show-details');
});
document.querySelector('.title4').addEventListener('click', () => {
    const i = document.querySelector('.title4 i');
    i.classList.toggle('spin');
    const d = document.querySelector('.details4');
    d.classList.toggle('show-details');
});
document.querySelector('.title5').addEventListener('click', () => {
    const i = document.querySelector('.title5 i');
    i.classList.toggle('spin');
    const d = document.querySelector('.details5');
    d.classList.toggle('show-details');
});

document.querySelector('.btn').addEventListener('click', () => {
    window.location.href = 'mailto:bayimostapha@gmail.com';
});

document.querySelector('.theme-btn1').addEventListener('click', changeTheme);
document.querySelector('.theme-btn2').addEventListener('click', changeTheme);
let themeBtn1 = document.querySelector('.theme-btn1');
let themeBtn2 = document.querySelector('.theme-btn2');
let theme = localStorage.getItem('theme');
if (theme === null) {
    theme = 'light';
    localStorage.setItem('theme', theme);
}
else if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn1.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
    themeBtn2.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
}

window.addEventListener('storage', (event) => {
    const theme1 = event.newValue;
    if (theme1 === 'light') {
        theme = 'light';
        themeBtn1.innerHTML = '<i class="fa-solid fa-moon" style="color: #000000;"></i>';
        themeBtn2.innerHTML = '<i class="fa-solid fa-moon" style="color: #000000;"></i>';
        document.body.classList.remove('dark-mode');
    }
    else if (theme1 === 'dark') {
        theme = 'dark';
        themeBtn1.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        themeBtn2.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        document.body.classList.add('dark-mode');
    }
});
function changeTheme() {
    if (theme === 'light') {
        theme = 'dark';
        themeBtn1.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        themeBtn2.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', theme);
    } else if (theme === 'dark') {
        theme = 'light';
        themeBtn1.innerHTML = '<i class="fa-solid fa-moon" style="color: #000000;"></i>';
        themeBtn2.innerHTML = '<i class="fa-solid fa-moon" style="color: #000000;"></i>';
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', theme);
    }
}