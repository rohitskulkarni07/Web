/**
 * Simulates an asynchronous API request to retrieve user data
 * @param {string} userId - The ID of the user to fetch data for
 * @return {Promise} - A Promise that resolves with the fetch user data or rejects with an error
 */

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 123) {
        const user = { id: 123, name: "RK", age: 36 };
        resolve(user);
      } else {
        reject(new Error("404: User not found!"));
      }
    }, 2000);
  });
}


fetchUserData(123).then(user=> {
    console.log("User data: ", user);
    return user.age < 30 ? console.log("Hello ", user.name, "bro"): console.log("Hello Mr. ", user.name);
}).catch((error) => {
    console.log("Error: ", error.message);
});