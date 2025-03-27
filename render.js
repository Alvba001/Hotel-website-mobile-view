document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
const chooseusContainer = [
    { 
        Image: "assets/payment-pic.png",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    { 
        Image: "assets/search-pic.png",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    { 
        Image: "assets/support-pic.png",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    { 
        Image: "assets/nice-pic.png",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = chooseusContainer => {
    const container = document.getElementById('chooseusContainer');
    chooseusContainer.forEach(chooseusContainer => {
        container.innerHTML += `
           <div>
                    <img src="${chooseusContainer.Image}" alt="">
                    <h3>${chooseusContainer.title}</h3>
                    <p>${chooseusContainer.description}</p>
                </div>
        `;
    });
}