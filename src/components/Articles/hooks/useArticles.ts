import {useEffect, useState} from "react";
import {ArticleType} from "../../../types/insex";

type Props = {
    cheaper: boolean;
    sorting: string;
}

const useArticles = (props: Props) => {
    const {cheaper, sorting} = props;
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [sortedArticles, setSortedArticles] = useState<ArticleType[]>([])
    useEffect( () => {
        fetchArticles();
    }, [])

    useEffect(() => {
        setSortedArticles(sortArticles(sorting, articles))
    }, [sorting, articles])

    const fetchArticles = async () => {
        const response = await getArticles();
        setArticles(response.articles);
        setSortedArticles(response.articles)
    }

    return {state: {articles: cheaper ? sortedArticles.filter(article => article.price.amount < 50) :sortedArticles}}
}

export default useArticles;

function getArticles() {
    return fetch('https://shop-bff.fyndiq.se/code-assignment/articles', {
        method: 'GET',
        headers: {
            market: 'SE',
            locale: 'sv-SE'
        }
    }).then(r => r.json());
}

function sortArticles (sorting: string, articles: ArticleType[]) {
    const newArticles = [...articles];
    switch (sorting) {
        case 'priceHigh':
            newArticles.sort((a, b) => b.price.amount - a.price.amount);
            break;
        case  'priceLow':
            newArticles.sort((a, b) => a.price.amount - b.price.amount);
            break
        case 'ratingHigh':
            newArticles.sort((a, b) => Number(b.averageRating) - Number(a.averageRating));
            break;
        case 'ratingLow':
            newArticles.sort((a, b) => Number(a.averageRating) - Number(b.averageRating));
            break;
        default:
            break;
    }
    return newArticles;
}

