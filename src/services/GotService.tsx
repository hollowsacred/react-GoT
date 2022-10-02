

class GotService {

    apiBase = 'https://anapioficeandfire.com/api';

    async fetchGetData<T>(url: string): Promise<T> {
        let response = await fetch(`${this.apiBase}${url}`);
        if (!response.ok) {
            throw new Error('ты балбес' + response.url + response.status)
        }
        let result = await response.json();
        return result;
    }

    getCharacter = <T,>(id: string | number) => {
        return this.fetchGetData<T>(`/characters/${id}`);
    }
    getAllCharacters = <T,>() => {
        return this.fetchGetData<T>('/characters?page=2&pageSize=11');
    }
    getBook = <T,>(id: string | undefined) => {
        return this.fetchGetData<T>(`/books/${id}`);
    }
    getAllBooks = <T,>() => {
        return this.fetchGetData<T>('/books?page=1&pageSize=11');
    }
    getHouse = <T,>(id: string | number) => {
        return this.fetchGetData<T>(`/houses/${id}`);
    }
    getAllHouses = <T,>() => {
        return this.fetchGetData<T>('/houses?page=1&pageSize=11');
    }
}

export default GotService;



