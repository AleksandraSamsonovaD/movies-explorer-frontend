class Api {
    constructor(url) {
        this._url = url;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getCards() {
        return fetch(`${this._url}`)
            .then(this._checkResponse);
    }
}
export default new Api(' https://api.nomoreparties.co/beatfilm-movies');