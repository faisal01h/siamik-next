import axios from "axios";

class Authentication {
    lsKey: string;

    constructor(key: string) {
        this.lsKey = key;
    }

    checkAuth() {

    }

    checkLocalAuth() {

    }

    login() {

    }

    register() {
        
    }

    getLocalAuth() {
        let ls = localStorage.getItem(this.lsKey) || "";
        return JSON.parse(ls);
    }

    testLocalAuth() {
        localStorage.setItem(this.lsKey, JSON.stringify({
            npm: '19013010149',
            name: 'Test',
            dob: new Date('2000-06-15'),
            ipk: 3.85,
            dosenwali: 'Test doswal',
            token: ''
        }))
    }
}

export default new Authentication('user');