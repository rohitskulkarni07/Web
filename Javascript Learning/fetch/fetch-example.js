async function getExample() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log("GET Response:", data);
  } catch (e) {
    console.log("GET Error:", e);
  }
}

getExample();

async function postExample() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "fo",
        body: "Barr",
        userId: 2,
      }),
    });
    const data = await response.json();
    console.log("POST Response", data);
  } catch (e) {
    console.log("POST Error", e);
  }
}

postExample();

async function putExample() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      }),
    });
    const data = await response.json();
    console.log("PUT Response", data);
  } catch (e) {
    console.log("PUT Error:", e);
  }
}

putExample();

async function patchExample() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Partially Updated Title",
      }),
    });
    const data = await response.json();
    console.log("PUT Response", data);
  } catch (e) {
    console.log("PUT Error:", e);
  }
}

patchExample();

async function deleteExample() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    console.log("DELETE Response Status:", response.status);
  } catch (e) {
    console.log("DELETE Error:", error);
  }
}

deleteExample();
