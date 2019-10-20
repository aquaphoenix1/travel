//Лякишев Антон Андреевич 20.10.2019

const USER_NAME_PATH = 'username';
const USER_TOKEN_PATH = 'token';

export default class AuthService{
    static isLoggedIn = () => this.getLoggedName() != null;

    static getLoggedName = () => localStorage.getItem(USER_NAME_PATH);

    static logOut = () => {
        localStorage.removeItem(USER_NAME_PATH);
        localStorage.removeItem(USER_TOKEN_PATH);
    };

    static logIn = (username, token) => {
        localStorage.setItem(USER_NAME_PATH, username);
        localStorage.setItem(USER_TOKEN_PATH, token);
    };

    static getToken = () => localStorage.getItem(USER_TOKEN_PATH);
}