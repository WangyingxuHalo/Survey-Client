const HOST = "https://mysurvey.wwwyxxx.uk";

export async function get(url: string) {
    const res = await fetch(`${HOST}${url}`);
    const data = res.json();
    return data;
}

export async function post(url: string, body: any) {
    const res = await fetch(`${HOST}${url}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body)
    });
    const data = res.json();
    return data;
}