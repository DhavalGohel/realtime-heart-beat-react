class ApiService {
    baseUrl = 'http://localhost:3000';

    generateSessionId() {
        return new Promise((resolve, reject) => {
            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            resolve((S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()));
        })
    }
}

export default ApiService ;