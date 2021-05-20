const baseUrl = 'http://localhost:8000';

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