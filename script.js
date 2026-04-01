/*
  Omni Prime Finds — Interactive Logic
  Marketing-optimized: social proof toasts, urgency countdown, floating particles
*/

document.addEventListener('DOMContentLoaded', () => {

    // ===== Download Button — Content Locker Trigger =====
    const downloadBtn = document.getElementById('ogads-locker-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            console.log('[OPF] Content Locker Triggered');
            // Trigger OGAds content locker
            if (typeof OGAds !== 'undefined') {
                OGAds.init();
            } else if (typeof og_load === 'function') {
                og_load();
            } else if (typeof lkcontent === 'function') {
                lkcontent();
            } else if (typeof startLocker === 'function') {
                startLocker();
            } else {
                // Fallback: Try calling any global locker function the script may expose
                console.warn('[OPF] OGAds locker object not found, check script loading.');
                alert('Content Locker Triggered! Complete an offer to get the Drive link.');
            }
        });
    }

    // ===== Sticky Header on Scroll =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ===== Floating Gold Particles =====
    const particleContainer = document.getElementById('particles');
    if (particleContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (8 + Math.random() * 12) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
            particleContainer.appendChild(p);
        }
    }

    // ===== Scroll Reveal Animations =====
    const revealElements = document.querySelectorAll(
        '.step-card, .review-card, .faq-item, .file-info-box, .cta-wrapper, .section-title, .section-sub'
    );
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ===== Countdown Timer (Urgency) =====
    const countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) {
        let totalSeconds = 14 * 60 + 59;
        const tick = () => {
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            countdownEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
            if (totalSeconds > 0) {
                totalSeconds--;
                setTimeout(tick, 1000);
            }
        };
        tick();
    }

    // ===== Live Visitor Count (Simulated) =====
    const visitorEl = document.getElementById('visitor-count');
    if (visitorEl) {
        let count = 1247;
        setInterval(() => {
            count += Math.floor(Math.random() * 5) - 2; // fluctuate ±2
            count = Math.max(800, count);
            visitorEl.textContent = count.toLocaleString();
        }, 4000);
    }

    // ===== Simulated Download Counter (Increment) =====
    const dlCountEl = document.getElementById('download-count');
    if (dlCountEl) {
        let dlCount = 2891;
        setInterval(() => {
            dlCount += Math.floor(Math.random() * 3) + 1;
            dlCountEl.textContent = dlCount.toLocaleString();
        }, 8000);
    }

    // ===== Social Proof Toast Notifications =====
    const names = [
        'James', 'Olivia', 'Liam', 'Sophia', 'Noah', 'Emma', 'Ava', 'Lucas',
        'Mason', 'Isabella', 'Ethan', 'Mia', 'Aiden', 'Charlotte', 'Logan',
        'Harper', 'Elijah', 'Amelia', 'Caden', 'Emily', 'Ahmed', 'Yuki', 'Carlos',
        'Priya', 'Fatima', 'Wei', 'Anastasia', 'Dmitri', 'Sakura', 'Omar'
    ];
    const toast = document.getElementById('toast');
    const toastName = document.getElementById('toast-name');

    function showToast() {
        if (!toast || !toastName) return;
        const randomName = names[Math.floor(Math.random() * names.length)];
        const country = ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪', '🇫🇷', '🇮🇳', '🇧🇷', '🇪🇸', '🇯🇵'][Math.floor(Math.random() * 10)];
        toastName.textContent = `${randomName} ${country}`;

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Show first toast after 5 seconds, then every 15-25 seconds
    setTimeout(() => {
        showToast();
        setInterval(() => {
            showToast();
        }, 15000 + Math.random() * 10000);
    }, 5000);

});
