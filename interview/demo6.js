// Write an API automation script to validate an API taking into consideration 
// that before test is run it should check for authentication and authorization of user 
// Implement proper assertions
 

import { check } from 'k6';
import http from 'k6/http';

export default setup() {
    const access_token = get_access_token(username, password);
    return {
        access_token: access_token,
    }
}

export default function(data) {
    let url = `https:\\wwww.example.com`
    const payload = {
        id: 123,
        name: "Rohit",
    }

    let response = http.post(url, JSON.stringify(payload), {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.access_token}`
        }
    });

    check(response, {
        'Is status 200': (r)=> r.status === 200
    })
}

teardown() {
    //clean-up
}