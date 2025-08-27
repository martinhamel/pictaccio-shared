export type AddVersionRequest = {
    id: number;
    original: string;
    version: File;
};
export type RemoveVersionRequest = {
    id: number;
    original: string;
    version: string;
};
