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
                        min: 0.4,
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



const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.ai-business').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});