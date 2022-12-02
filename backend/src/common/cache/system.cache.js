import LruCache from "lru-cache";

const systemCache = new LruCache({
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
    ttl: 0,
    max: 1000,
});

export default systemCache;