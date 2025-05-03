//  Placeholder for search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();
            searchResults.innerHTML = ''; // Clear previous results

            if (query.length > 2) { // Only search if query is long enough
                // In a real implementation, you would fetch an index of your content
                // Here, we're using a placeholder array
                const dummyData = [
                    { title: "Physical quantities and units", url: "/physics/topic-1-physical-quantities-and-units" },
                    { title: "Kinematics", url: "/physics/topic-2-kinematics" },
                    { title: "Quadratics", url: "/mathematics/paper-1-quadratics"},
                    { title: "Functions", url: "/mathematics/paper-1-functions"}
                ];

                const results = dummyData.filter(item => item.title.toLowerCase().includes(query));

                results.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.url;
                    a.textContent = item.title;
                    li.appendChild(a);
                    searchResults.appendChild(li);
                });
            }
        });
    }
});