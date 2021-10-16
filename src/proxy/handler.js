import levenshtein from 'fast-levenshtein';
const handler = {
    get(object, property) {
        if(property in object) {
           return object[property];
        }

        const suggestion = Object.keys(object).find(key => levenshtein.get(key, property) <= 3);

        if(suggestion)
            console.log(`${property} not found. Maybe you want to said ${suggestion}?`);
        return object[property];
    }
}

export default handler