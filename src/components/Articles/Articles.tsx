import useArticles from "./hooks/useArticles";
import Article from "./components/Article";
import {ArticlesList, ArticlesPageStyled} from "./Articles.styled";
import ArticlesFilters from "./components/ArticlesFilters";
import {useState} from "react";

const Articles = () => {
    const [cheaper, setCheaper] = useState(false);
    const [sorting, setSorting] = useState<string>("relevance");
    const onFilterHandler = (cheaper: boolean) => setCheaper(cheaper);
    const onSortingHandler = (sorting: string) => setSorting(sorting);
    const {articles} = useArticles({cheaper, sorting});

    return (
        <ArticlesPageStyled>
            <ArticlesFilters onFilterHandler={onFilterHandler} onSortingHandler={onSortingHandler}/>
            <ArticlesList>{articles.map(article => <Article data={article} key={article.articleId}/>)}</ArticlesList>
        </ArticlesPageStyled>
    )
}

export default Articles;