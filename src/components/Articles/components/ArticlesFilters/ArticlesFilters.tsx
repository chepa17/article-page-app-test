import {
    ArticleFiltersSorting, ArticleFiltersSortingTitle,
    ArticlesFiltersCheckbox,
    ArticlesFiltersCheckboxLabel,
    ArticlesFiltersCheckboxTitle,
    ArticlesFiltersStyled
} from "./Articles.styled";

type Props = {
    cheaper: boolean;
    setCheaper: (arg: boolean) => void;
    sorting: string;
    setSorting: (arg: string) => void;
}

const options = [
    { value: 'relevance', label: 'Mest relevanta' },
    { value: 'priceHigh', label: 'Dyrast först' },
    { value: 'priceLow', label: 'Billigast först' },
    { value: 'ratingHigh', label: 'Högsta betyg' },
    { value: 'ratingLow', label: 'Lägsta betyg' },
]

const ArticlesFilters = (props: Props) => {
    const {cheaper, setCheaper, sorting, setSorting} = props;
    return <ArticlesFiltersStyled>
        <ArticlesFiltersCheckboxLabel>
            <ArticlesFiltersCheckbox type='checkbox' checked={cheaper} onChange={() => {setCheaper(!cheaper)}} />
            <ArticlesFiltersCheckboxTitle>Cheaper then 50kr</ArticlesFiltersCheckboxTitle>
        </ArticlesFiltersCheckboxLabel>
        <ArticleFiltersSorting>
            <ArticleFiltersSortingTitle>Sortera pä</ArticleFiltersSortingTitle>
            <select onChange={(event) => setSorting(event.target.value)} value={sorting}>
                {options.map(option => <option key={option.value} value={option.value}>
                    {option.label}
                </option>)}
            </select>
        </ArticleFiltersSorting>
    </ArticlesFiltersStyled>
}

export default ArticlesFilters;
