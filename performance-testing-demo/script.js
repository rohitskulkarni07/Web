import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10, // Number of virtual users
  duration: "30s", // Test duration
};

export default function () {
  const postUrl =
    "https://blazedemo.com/reserve.php?fromPort=Paris&toPort=Buenos+Aires";
  const getUrl = "https://blazedemo.com/reserve.php";

  const responses = http.batch([
    ["POST", postUrl],
    ["GET", getUrl],
  ]);

  check(responses[0], {
    "POST request status was 200": (r) => r.status === 200,
  });

  check(responses[1], {
    "GET request status was 200": (r) => r.status === 200,
  });

  sleep(1);
}
