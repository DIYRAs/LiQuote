export default async function handler(req, res) {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    });

    const data = await response.json();
    res.status(200).json(data);
}