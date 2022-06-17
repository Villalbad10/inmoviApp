export const postData = (endPoint, objeto) => {
    fetch(`https://app-inmobi.herokuapp.com/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(() => alert('Post correcto'))
}