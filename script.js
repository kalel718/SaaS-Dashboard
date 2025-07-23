// Ensures the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // --- Sidebar Navigation Functionality ---
    const navLinks = document.querySelectorAll('.nav-link'); // Selects all navigation links

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents the default anchor link behavior (e.g., jumping to top)

            // Removes 'active' class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Adds 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // --- Chart Controls Functionality ---
    const controlBtns = document.querySelectorAll('.control-btn'); // Selects all chart control buttons

    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Removes 'active' class from all control buttons
            controlBtns.forEach(b => b.classList.remove('active'));

            // Adds 'active' class to the clicked button
            this.classList.add('active');
        });
    });

    // --- Stat Cards Hover Effect (JavaScript-controlled, though CSS could also do this) ---
    const statCards = document.querySelectorAll('.stat-card'); // Selects all stat cards

    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Changes background on mouse enter
            this.style.background = 'rgba(99, 102, 241, 0.05)'; // A slightly more prominent purple hue
        });

        card.addEventListener('mouseleave', function() {
            // Reverts background on mouse leave
            this.style.background = 'rgba(255, 255, 255, 0.05)'; // Original semi-transparent white
        });
    });

    // --- Animated Counter Effect for Stat Values (Placeholder) ---
    // This function is defined but not actively used for number animation
    // because the current stat values are strings like '47.2K'.
    // It's a good example of how you *would* animate numerical values.
    function animateCounter(element, target) {
        const duration = 2000; // Animation duration in milliseconds
        const start = 0; // Starting value for the counter
        // Calculates increment per frame (assuming ~60fps for 16ms interval)
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target; // Sets final target value
                clearInterval(timer); // Stops the animation
            } else {
                element.textContent = Math.floor(current); // Updates with integer value during animation
            }
        }, 16); // Runs approximately every 16ms (for ~60fps)
    }

    // Triggering stat value display on load
    setTimeout(() => {
        const statValues = document.querySelectorAll('.stat-value');
        // Array of original string values to display
        const values = ['47.2K', '98.7%', '1.2s', '2.4M'];

        statValues.forEach((el, index) => {
            el.textContent = values[index]; // Simply sets the text content to the pre-defined string
            // If you wanted to animate actual numbers (e.g., 47200 instead of '47.2K'),
            // you'd parse them and call animateCounter:
            // if (index === 0) animateCounter(el, 47200);
        });
    }, 500); // Small delay to ensure everything is rendered before "animation" (display)

    // --- Dynamic Chart Bar Animation ---
    function animateChartBars() {
        const bars = document.querySelectorAll('.chart-bar'); // Selects all chart bars
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.animation = 'none'; // Temporarily removes animation to reset it
                bar.offsetHeight; // Triggers a reflow, forcing the browser to apply the 'animation: none' style
                bar.style.animation = 'chartGrow 1s ease-out'; // Reapplies the animation
            }, index * 100); // Staggers the animation start for each bar
        });
    }

    // Re-animate chart bars every 5 seconds for continuous motion
    setInterval(animateChartBars, 5000);
});
