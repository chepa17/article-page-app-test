import {useEffect, useState} from "react";
import {ArticleType} from "../../../types/insex";

const useArticles = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    useEffect( () => {
        fetchArticles();
    }, [])

    const fetchArticles = async () => {
        const response = await getArticles();
        setArticles(response.articles);
    }

    return {state: {articles}}
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

