export type PartControl = {
    name: string;
    dev: number;
    devOutTotal: number;
    quality: number;
}

export type PartFeature = {
    name: string;
    controls: PartControl[][];
    quality: number;
}

export type Part = {
    name: string;
    features: PartFeature[];
}

export type PartResponse = {
    parts: Part[];
}