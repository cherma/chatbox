export const findApi = async (data) => {
    try {
        const response =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${data}`);
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (err) {
        return { err }; 
    }
    
}