let age = 32;
let greatText = "Hi, I'm mike";
alert(greatText);
greatText = "Hi, I'm mike again";
alert(greatText);
alert(age);

// Get references to HTML elements
const postcodeInput = document.getElementById('postcodeInput');
const searchButton = document.getElementById('searchButton');
const mapDiv = document.getElementById('map');
const resultsDiv = document.getElementById('results');

// Function to fetch and parse the recycling bin locations
async function fetchRecyclingBinLocations() {
  try {
    const response = await fetch('https://recyclingnearyou.com.au/clothing/');
    const html = await response.text();

    // Parse the HTML (You may use a library like Cheerio for this)
    // Extract the recycling bin location data from the HTML
    // Example: const locations = parseAndExtractLocations(html);

    // Calculate distances, find the nearest bin, and display the results
    // Example: const nearestBin = findNearestBin(locations, userPostcode);

    // Display the nearest bin on the map and in the resultsDiv
    // Example: displayOnMapAndResults(nearestBin);
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const userPostcode = postcodeInput.value.trim();
  if (userPostcode) {
    fetchRecyclingBinLocations();
  }
});

