const baseUrl = 'https://pngcat-api.herokuapp.com';

// const baseUrl = 'http://localhost:8000';

export const savePngcat = async (pngcat) => {
    const url = `${baseUrl}/pngcat/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pngcat)
        });

    } catch (error) {
        console.log(error);
    }
}

export const searchSequences = async (seqId, studyId, keyword) => {
    const url = `${baseUrl}/search/seqId=${seqId}&studyId=${studyId}&keyword=${keyword}`;
    try {
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();

        return json;

    } catch (e) {
        console.log(e);
    }
}