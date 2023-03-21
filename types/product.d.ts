// define types for product read data from strapi

interface Product {
    id: number;
    attributes: {
        title: string;
        slug: string;
        description: string;
        price: number;
        qty: number;
        is_featured: boolean;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        image: {
            data: [
                {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: null | string;
                        caption: null | string;
                        width: null | number;
                        height: null | number;
                        formats: null | unknown;
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: null | string;
                        provider: string;
                        provider_metadata: null | unknown;
                        createdAt: string;
                        updatedAt: string;
                    };
                }
            ];
        };
        category: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    description: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    status: boolean;
                };
            };
        };
    };
}

interface Meta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

interface ProductResponse {
    data: Product[];
    meta: Meta;
}


export { ProductResponse } // อย่าลืืม