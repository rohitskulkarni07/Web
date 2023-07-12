
/**
 * Fetches data from following endpoint
 * @returns {Promise} A promise that resolves with fetched data or rejects with an error...
 */

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // API endpoint URL
    const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
    // Make the request to the server using fetch
    fetch(url)
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server.");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Resolve promise with the fetched data
        resolve(data);
      })
      .catch((error) => {
        // Reject promise with the encountered error
        reject(error);
      });
  });
}

fetchDataFromServer().then((data)=> {
    console.log("Data fetched: ",data);
}).catch((error)=>{
    console.log(error.message);
});


// Data fetched: 
// Array (10)
// 0 {id: 2, title: "Sleek Granite Shoes", price: 415, description: "Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles", images: ["https://picsum.photos/640/640?r=119", "https://picsum.photos/640/640?r=1029", "https://picsum.photos/640/640?r=8090"], …}
// 1 {id: 3, title: "Small Plastic Bacon", price: 382, description: "The slim & simple Maple Gaming Keyboard from Dev B…lor RGB LED Back-lighting for smart functionality", images: ["https://picsum.photos/640/640?r=1271", "https://picsum.photos/640/640?r=3304", "https://picsum.photos/640/640?r=2548"], …}
// 2 {id: 4, title: "Incredible Plastic Chair", price: 214, description: "Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles", images: ["https://picsum.photos/640/640?r=9258", "https://picsum.photos/640/640?r=8846", "https://picsum.photos/640/640?r=5556"], …}
// 3 {id: 5, title: "Rustic Frozen Cheese", price: 706, description: "Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles", images: ["https://picsum.photos/640/640?r=4403", "https://picsum.photos/640/640?r=6422", "https://picsum.photos/640/640?r=5164"], …}
// 4 {id: 6, title: "Intelligent Cotton Pants", price: 953, description: "Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles", images: ["https://picsum.photos/640/640?r=3275", "https://picsum.photos/640/640?r=5049", "https://picsum.photos/640/640?r=4430"], …}
// 5 {id: 7, title: "Sleek Fresh Chicken", price: 117, description: "The Nagasaki Lander is the trademarked name of sev…i sport bikes, that started with the 1984 ABC800J", images: ["https://picsum.photos/640/640?r=9745", "https://picsum.photos/640/640?r=9238", "https://picsum.photos/640/640?r=1887"], …}
// 6 {id: 8, title: "Awesome Cotton Table", price: 675, description: "The slim & simple Maple Gaming Keyboard from Dev B…lor RGB LED Back-lighting for smart functionality", images: ["https://picsum.photos/640/640?r=2290", "https://picsum.photos/640/640?r=2982", "https://picsum.photos/640/640?r=8146"], …}
// 7 {id: 9, title: "Generic Plastic Fish", price: 473, description: "The Nagasaki Lander is the trademarked name of sev…i sport bikes, that started with the 1984 ABC800J", images: ["https://picsum.photos/640/640?r=5557", "https://picsum.photos/640/640?r=7976", "https://picsum.photos/640/640?r=4209"], …}
// 8 {id: 10, title: "Licensed Fresh Chicken", price: 66, description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit", images: ["https://picsum.photos/640/640?r=5669", "https://picsum.photos/640/640?r=8147", "https://picsum.photos/640/640?r=6615"], …}
// 9 {id: 11, title: "Handcrafted Granite Shirt", price: 723, description: "Ergonomic executive chair upholstered in bonded bl…ded seat and back for all-day comfort and support", images: ["https://picsum.photos/640/640?r=1759", "https://picsum.photos/640/640?r=5869", "https://picsum.photos/640/640?r=4382"], …}
