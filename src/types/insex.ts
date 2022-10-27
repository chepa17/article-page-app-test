export type ArticleType = {
    articleId: string;
    articleUrl: string;
    averageRating: string;
    expectedDeliveryDate: string;
    images: ArticleImage[];
    oldPrice: Price | null;
    price: Price;
    productId: string;
    shippingTimeMax: string;
    shippingTimeMin: string;
    slug: string;
    title: string;
}

export type ApiResponse = {
    articles: ArticleType[];
}

export type ArticleImage = {
    cloudinaryId: string;
    url: string;
}

export type Price = {
    amount: number;
    currency: string;
    formatted: string;
}
