import useSWR from "swr";

const apiURL = 'http://localhost:5000/api/members/'

const myFetch = async (method, url, body) => {
    let options = {
        method: method,
        headers: {'Content-Type': 'application/json; charset=utf-8'}
    };
    if(method !== 'GET'){
        options = { ...options, body: JSON.stringify(body) };
    }

    const response = await fetch(url, options)
    const result = await response.json();
    console.log(JSON.stringify(result));
    return result;
};

const membersAPI = {
    useMembers: () => {
        const fetcher = (url) => fetch(url).then((res) => res.json())
        const {data, mutate, error, isLoading} = useSWR(apiURL, fetcher, { refreshInterval: 1000*15})
        const loading = !data && !error;
        return {members: data, mutate, error, isLoading: loading}
    },
    getAll: () => myFetch('GET', apiURL),
    addOne: (aMember) => myFetch('POST', apiURL, aMember),
    updateOne: (aMember) => myFetch('PUT', apiURL, aMember),
    switchStatus: (id) => myFetch('PUT', apiURL + 'switch/' + id, {id}),
    deleteOne: (id) => myFetch('DELETE',apiURL, {id})
};

export default membersAPI;