 // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                                
                const targetId = this.getAttribute('href');
                if (targetId === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
                                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Modal functions
        function openRulebook() {
            document.getElementById('rulebook-page').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeRulebook() {
            document.getElementById('rulebook-page').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function openAbout() {
            document.getElementById('about-page').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeAbout() {
            document.getElementById('about-page').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function openCharacterModal(name, title, factionClass, imageUrl, voiceUrls, bio, stats) {
            const modal = document.getElementById('character-page');
            const portrait = document.getElementById('character-modal-portrait');
            const portraitAr = document.getElementById('character-modal-portrait-ar');
            const nameEl = document.getElementById('character-modal-name');
            const nameElAr = document.getElementById('character-modal-name-ar');
            const titleEl = document.getElementById('character-modal-title');
            const titleElAr = document.getElementById('character-modal-title-ar');
            const factionEl = document.getElementById('character-modal-faction');
            const factionElAr = document.getElementById('character-modal-faction-ar');
            const bioEl = document.getElementById('character-modal-bio');
            const bioElAr = document.getElementById('character-modal-bio-ar');
            const WaterEl = document.getElementById('character-modal-Water');
            const مياهElAr = document.getElementById('character-modal-مياه-ar');
            const MeatEl = document.getElementById('character-modal-Meat');
            const لحمElAr = document.getElementById('character-modal-لحم-ar');
            const woodEl = document.getElementById('character-modal-wood');
            const خشبElAr = document.getElementById('character-modal-خشب-ar');
           const To_get_this_character_rollEl = document.getElementById('character-modal-To_get_this_character_roll');
const للحصول_على_هذه_الشخصية_قم_برميElAr = document.getElementById('character-modal-للحصول_على_هذه_الشخصية_قم_برمي');

            const voiceElEn = document.getElementById('character-voice-en');
            const voiceElAr = document.getElementById('character-voice-ar');
            
            // Set English content
            portrait.src = imageUrl;
            nameEl.textContent = name;
            titleEl.textContent = title;
            factionEl.textContent = factionClass;
            factionEl.className = 'character-faction ' + factionClass.toLowerCase().replace(' ', '-');
            bioEl.textContent = bio.en;
            WaterEl.textContent = stats.Water + '';
            MeatEl.textContent = stats.Meat + '';
            woodEl.textContent = stats.wood + '';
           To_get_this_character_rollEl.textContent = stats.To_get_this_character_roll + '';
            voiceElEn.src = voiceUrls.en;
            
            // Set Arabic content
            portraitAr.src = imageUrl;
            nameElAr.textContent = name;
            titleElAr.textContent = title;
            factionElAr.textContent = factionClass;
            factionElAr.className = 'character-faction ' + factionClass.toLowerCase().replace(' ', '-');
            bioElAr.textContent = bio.ar;
           مياهElAr.textContent = stats.Water + '';
لحمElAr.textContent = stats.Meat + '';
خشبElAr.textContent = stats.wood + '';
للحصول_على_هذه_الشخصية_قم_برميElAr.textContent = stats.To_get_this_character_roll + '';


            voiceElAr.src = voiceUrls.ar;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeCharacterModal() {
            const voiceElEn = document.getElementById('character-voice-en');
            const voiceElAr = document.getElementById('character-voice-ar');
            
            // Pause any playing audio
            voiceElEn.pause();
            voiceElEn.currentTime = 0;
            voiceElAr.pause();
            voiceElAr.currentTime = 0;
            
            document.getElementById('character-page').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

      function playCharacterVoice(lang) {
    // Stop the hover sound if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    const voiceEl = document.getElementById(`character-voice-${lang}`);
    const playBtn = document.getElementById(`play-character-voice${lang === 'ar' ? '-ar' : ''}`);
    
    if (voiceEl.paused) {
        voiceEl.play();
        playBtn.innerHTML = lang === 'ar' 
            ? '<i class="fas fa-pause ml-2"></i> إيقاف صوت الشخصية مؤقتًا'
            : '<i class="fas fa-pause mr-2"></i> Pause Character Voice';
    } else {
        voiceEl.pause();
        playBtn.innerHTML = lang === 'ar' 
            ? '<i class="fas fa-play ml-2"></i> تشغيل صوت الشخصية'
            : '<i class="fas fa-play mr-2"></i> Play Character Voice';
    }
}


        // Image modal functions
        let currentZoom = 1;

        function openImageModal(src) {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-image');
                        
            modalImg.src = src;
            modalImg.style.transform = 'scale(1)';
            currentZoom = 1;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal() {
            document.getElementById('image-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function zoomImage(factor) {
            const modalImg = document.getElementById('modal-image');
            currentZoom *= factor;
            modalImg.style.transform = `scale(${currentZoom})`;
        }

        function resetImageZoom() {
            const modalImg = document.getElementById('modal-image');
            currentZoom = 1;
            modalImg.style.transform = 'scale(1)';
        }

        // Language switching
        function switchLanguage(lang, section) {
            // Hide all language contents in this section
            document.querySelectorAll(`#${section}-page .language-content`).forEach(el => {
                el.classList.remove('active');
            });
                        
            // Show selected language content
            document.getElementById(`${section}-${lang}`).classList.add('active');
                        
            // Update language buttons
            document.querySelectorAll(`#${section}-page .language-btn`).forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent === (lang === 'en' ? 'English' : 'العربية')) {
                    btn.classList.add('active');
                }
            });
                        
            // Special handling for contact form
            if (section === 'contact') {
                const submitText = document.getElementById('submit-text');
                if (lang === 'ar') {
                    submitText.textContent = 'إرسال الرسالة';
                } else {
                    submitText.textContent = 'Send Message';
                }
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Check for success parameter in URL
            const urlParams = new URLSearchParams(window.location.search);
            const successParam = urlParams.get('success');
                        
            if (successParam === 'true') {
                const messageDiv = document.getElementById('form-message');
                messageDiv.textContent = 'Thank you for your message! We will get back to you soon./شكرًا لك على رسالتك! سنتواصل معك قريبًا';
                messageDiv.className = 'form-message success';
                messageDiv.style.display = 'block';
                                
                // Remove the success parameter from URL
                window.history.replaceState({}, document.title, window.location.pathname);
            }
                        
            // Form submission handler
            document.getElementById('contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                                
                const form = this;
                const submitBtn = form.querySelector('button[type="submit"]');
                const submitText = document.getElementById('submit-text');
                const spinner = document.getElementById('loading-spinner');
                const messageDiv = document.getElementById('form-message');
                                
                // Show loading state
                submitBtn.disabled = true;
                spinner.style.display = 'inline-block';
                submitText.textContent = 'Sending.../جارٍ الإرسال...';
                                
                // Hide any previous messages
                messageDiv.style.display = 'none';
                                
                // Create a FormData object from the form
                const formData = new FormData(form);
                                
                // Send the form data using fetch
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Show success message
                        messageDiv.textContent = 'Thank you for your message! We will get back to you soon./شكرًا لك على رسالتك! سنتواصل معك قريبًا';
                        messageDiv.className = 'form-message success';
                        messageDiv.style.display = 'block';
                                                        
                        // Reset form
                        form.reset();
                                                        
                        // Redirect to success page (handled by FormSubmit)
                        return response;
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    // Show error message
                    messageDiv.textContent = 'There was an error sending your message. Please try again later./حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقًا';
                    messageDiv.className = 'form-message error';
                    messageDiv.style.display = 'block';
                })
                .finally(() => {
                    // Reset loading state
                    submitBtn.disabled = false;
                    spinner.style.display = 'none';
                    submitText.textContent = 'Send Message/إرسال الرسالة';
                                        
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        messageDiv.style.display = 'none';
                    }, 5000);
                });
            });
        });

        // Close modals when clicking outside content
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('rulebook-page')) {
                closeRulebook();
            }
            if (event.target.classList.contains('about-page')) {
                closeAbout();
            }
            if (event.target.classList.contains('character-page')) {
                closeCharacterModal();
            }
            if (event.target.classList.contains('image-modal')) {
                closeImageModal();
            }
        });
          document.getElementById("character-modal-portrait").addEventListener("click", function () {
        document.getElementById("character-video").style.display = "block";
        this.style.display = "none";
    });

       let currentAudio = null; // Global variable to track currently playing audio

// Character 1
document.querySelectorAll('.character-card1').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = '11L-hello_i_am_the_king_-1748263698521.mp3'; // Replace with character 1 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });
});

// Character 2
document.querySelectorAll('.character-card2').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = 'tutorial of board game.mp3'; // Replace with character 2 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });
});

// Character 3
document.querySelectorAll('.character-card3').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = '11L-hello_i_am_the_knigh-1748267119332.mp3'; // Replace with character 3 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });
});

// Character 4
document.querySelectorAll('.character-card4').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = 'tutorial of board game-1.mp3'; // Replace with character 4 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });
});

// Character 5
document.querySelectorAll('.character-card5').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = 'tutorial of board game-2.mp3'; // Replace with character 5 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });
});

// Character 6
document.querySelectorAll('.character-card6').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = this.querySelector('.western-sound');
        if (!audio) {
            audio = document.createElement('audio');
            audio.className = 'western-sound';
            audio.src = 'hh.mp3'; // Replace with character 6 sound
            audio.volume = 0.3;
            this.appendChild(audio);
        }
        audio.currentTime = 0;
        audio.play();
        currentAudio = audio;
    });

        document.querySelectorAll('.rulebook-page').forEach(card => {
    card.addEventListener('mouseenter', function () {
        // Check if audio element already exists
        let sound = this.querySelector('.western-sound');

        // If not, create and append it
        if (!sound) {
            sound = document.createElement('audio');
            sound.className = 'western-sound';
            sound.src = '341807__drfx__some-background-i-made-for-my-game-ambient-music.mp3';
            sound.volume = 0.3;
            this.appendChild(sound);
        }

        // Reset and play the sound
        sound.currentTime = 0;
        sound.play().then(() => {
            // Pause after 0.5 seconds
            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0;
            }, 10000);
        }).catch(err => {
            console.warn('Sound could not play:', err);
        });
    });
});
 document.addEventListener('DOMContentLoaded', function() {
            // Example: Add click event to cards
            const cards = document.querySelectorAll('.card-hover-effect');
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    console.log('Card clicked:', this.querySelector('h3').textContent);
                    // Add your custom click behavior here
                });
            });
        });
        });
