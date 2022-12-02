import pubSub from "./pub-sub.js";
import {SubscriptionEvents} from "./subscription.events.js";
import systemCache from "./cache/system.cache.js";
import {CacheKey} from "./cache/cache-const.js";

let intervals = {};

export const startPolling = (key, { resolverFn, schema }) => {
    const sys = systemCache.get(CacheKey.POLLING_STARTED_STATUS);

    if (!sys) {
        intervals[key] = setInterval(() => {
            systemCache.set(CacheKey.POLLING_STARTED_STATUS, true);
            pubSub.publish(SubscriptionEvents.REFRESH, {[schema]: resolverFn()}).then();
        }, 10000); // 10 seconds
    }
};

export const stopPolling = (key) => {
    // clearInterval(intervals[key]);
    // const {[key]: value, ...rest} = intervals;
    // intervals = rest;
};