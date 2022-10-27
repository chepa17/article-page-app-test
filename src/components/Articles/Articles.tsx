import useArticles from "./hooks/useArticles";
import Article from "./components/Article";
import {ArticlesList, ArticlesPageStyled} from "./Articles.styled";
import ArticlesFilters from "./components/ArticlesFilters";
import {useState} from "react";

const Articles = () => {
    const [cheaper, setCheaper] = useState(false);
    const [sorting, setSorting] = useState<string>("relevance")
    const {state} = useArticles({cheaper, sorting});
    const {articles} = state;
    return <ArticlesPageStyled>
        <ArticlesFilters cheaper={cheaper} setCheaper={setCheaper} sorting={sorting} setSorting={setSorting}/>
        <ArticlesList>{articles.map(article => <Article data={article} key={article.articleId}/>)}</ArticlesList>
    </ArticlesPageStyled>
}

export default Articles;