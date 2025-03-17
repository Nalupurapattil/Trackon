document.addEventListener('DOMContentLoaded', async () => {
    // Initialize particles
    await tsParticles.load({
        selector: "#tsparticles",
        options: {
            background: {
                color: "transparent"
            },
            particles: {
                number: {
                    value: 1200,
                    density: {
                        enable: true,
                        area: 400
                    }
                },
                color: {
                    value: "#a5a5a5"
                },
                size: {
                    value: {
                        min: 0.8,
                        max: 1
                    }
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1
                    },
                    animation: {
                        enable: true,
                        speed: 5
                    }
                },
                move: {
                    enable: true,
                    speed: {
                        min: 0.1,
                        max: 1
                    }
                }
            }
        }
    });

    // Show particles after load
    const particlesEl = document.querySelector('#tsparticles');
    particlesEl.classList.add('visible');
});


//button-----------------


const containers = document.querySelectorAll('.btn-container');
        
containers.forEach(container => {
    const border = container.querySelector('.btn-border');
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        border.style.transform = `rotate(${Math.atan2(y - rect.height/2, x - rect.width/2)}rad)`;
    });
    
    container.addEventListener('mouseleave', () => {
        border.style.transform = 'rotate(0deg)';
    });
});



//video section
// Scroll animation for video section
const videoSection = document.querySelector('.video-section');
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const video = entry.target.querySelector('video');
            if(video) video.play();
        }
    });
}, { threshold: 0.5 });

videoObserver.observe(videoSection);



const aiSection = document.querySelector('.ai-business');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate section
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            
            // Animate cards with delay
            const cards = entry.target.querySelectorAll('.card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, index * 200); // 200ms delay between cards
            });
        }
    });
}, { threshold: 0.1 });

// Initialize section state
aiSection.style.opacity = 0;
aiSection.style.transform = 'translateY(30px)';
aiSection.style.transition = 'all 0.6s ease';
sectionObserver.observe(aiSection);

// Initialize card states
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
});


//nav bar animation 


window.addEventListener("scroll", function () {
    let nav = document.querySelector(".main-nav");
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});





