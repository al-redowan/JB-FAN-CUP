document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const teamCards = document.querySelectorAll('.team-card');

    // Add an event listener to the search input for 'keyup' events
    searchInput.addEventListener('keyup', function(event) {
        // Get the search term, convert it to lowercase for case-insensitive matching
        const searchTerm = event.target.value.toLowerCase();

        // Loop through each team card
        teamCards.forEach(card => {
            // Get the team name from the H3 element within the card, convert to lowercase
            const teamName = card.querySelector('h3').textContent.toLowerCase();
            
            // Check if the team name includes the search term
            if (teamName.includes(searchTerm)) {
                // If it matches, display the card
                card.style.display = 'block'; 
            } else {
                // If it doesn't match, hide the card
                card.style.display = 'none';
            }
        });
    });
});