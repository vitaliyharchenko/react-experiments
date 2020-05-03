import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer h1YXEj44zcCFdpHZuBBU_pMJysWPWUPRyA_rcI2919ndTwWrWWPjPFVSh4Gx6SA3KJBqyrEeAIpBe6avyFNQK9fxUeBUw8r9r1JHpr-YIXo5h0ya6GwHR__j5FmuXnYx"
    }
})