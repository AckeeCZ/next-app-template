export interface StrapiResponseMeta {
    pagination: {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
    };
}

export interface StrapiResponseError {
    status: string;
    name: string;
    message: string;
    details: any;
}

export interface StrapiResponse<Data> {
    data: Data;
    meta?: StrapiResponseMeta;
    error?: StrapiResponseError;
}

export interface StrapiData<Data> {
    id: number;
    attributes: Data;
}

export interface StrapiAttributes {
    publishedAt: string;
    updatedAt: string;
}

export interface StrapiFile {
    id: number;
    attributes: StrapiRawFile;
}

export interface StrapiRawFile {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    url: string;
    formats: { [key: string]: StrapiFileFormat };
}

interface StrapiFileFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
}
