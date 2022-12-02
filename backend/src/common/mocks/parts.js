import systemCache from "../cache/system.cache.js";
import {CacheKey} from "../cache/cache-const.js";

const getParts = () => {
    return [
        {
            name: "Part A",
            features: generateFeatures(),
        },
        {
            name: "Part B",
            features: generateFeatures(),
        },
    ];
};

export const generateParts = () => {
    let parts = systemCache.get(CacheKey.PARTS);

    if (!parts) {
        parts = getParts();
        systemCache.set(CacheKey.PARTS, parts);

        return parts;
    }

    return parts.map(({ name, features }) => {
        return {
            name,
            features: features.map((feature) => ({
                ...feature,
                controls: generateControls(feature.controls.length)
            }))
        }
    });
}

const generateFeatures = () => {
    const featureNames = ["Seam", "Hole", "Slot"];
    const count = randomNumber(2, 10);

    return [...Array(count).keys()].map((value) => {
        const random = Math.floor(Math.random() * featureNames.length);
        return {
            name: `${featureNames[random]} ${value}`,
            controls: generateControls(),
            quality: qualityCode(),
        }
    });
}

const generateControls = (mixedCount) => {
    const controls = ["X", "Y", "Z", "Diameter", "Length", "Rate", "Circle", "Medium", "Min", "Max"];
    const count = randomNumber(1, 10);
    mixedCount = mixedCount || randomNumber(1, 2);

    const generator = (counter) => {
        return [...Array(counter).keys()].map(value => {
            const random = Math.floor(Math.random() * controls.length);
            return {
                name: `${controls[random]} ${value}`,
                dev: Math.random().toFixed(2),
                devOutTotal: devOutTotal().toFixed(2),
                quality: qualityCode(),
            };
        })
    };

    return [...Array(mixedCount).keys()].map(() => generator(count))
}

const devOutTotal = () => {
    return randomNumber(0, 10) + Math.random();
}

const qualityCode = () => {
    return randomNumber(0, 3);
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}
