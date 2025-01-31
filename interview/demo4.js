import { url } from "inspector";
import { check } from "k6";
import http from "k6/http";

export const options = {
  iterations: 100,
  vus: 20,
};

function setup() {
  //

  return data;
}

export default function (data) {

    const payload = JSON.stringify({
        amount: 1000,
        years: 5,
        interestRate: 7
    })

  const res = http.post(endpoint-url,payload, {
    headers: {
        
        'Authorization': `Bearer ${data.access_token}`
    }
  });

  check(res, {
    Success: (r) => r.status === 200,
  });
}


________________________________________________________________________________________________________________


for(i = 0; i< 100; i++) {


    // test
    try {
    const amount = page.locator('//input[@type="text"]') 
    const years = page.locator('//input[@type="text"]') 
    const interestRate = page.locator('//input[@type="text"]') 

    amount.fill("")
    years.fill("")
    interestRate.fill("")

    const calculate = page.locator(//submit);

    calculate.click();

    } catch (e) {
        console.log("error occurred")
    }
}