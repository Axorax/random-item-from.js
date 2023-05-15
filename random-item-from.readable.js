function randomItemFrom(collection) {
    if (Array.isArray(collection)) {
        return collection[Math.floor(Math.random() * collection.length)];
    } else if (collection instanceof Map) {
        const keys = Array.from(collection.keys());
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return collection.get(randomKey);
    } else if (typeof collection === 'string') {
        return collection.charAt(Math.floor(Math.random() * collection.length));
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return collection[randomKey];
    } else {
        throw new Error('Invalid argument type! Received: ' + typeof collection);
    }
}