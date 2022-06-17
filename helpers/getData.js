export const getData = async (endPoint) => {
    const res = await fetch(`https://app-inmobi.herokuapp.com/${endPoint}`);
    const data = await res.json();

    return data;
}