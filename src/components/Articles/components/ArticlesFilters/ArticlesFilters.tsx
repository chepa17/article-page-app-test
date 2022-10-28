import {
    ArticleFiltersSorting, ArticleFiltersSortingTitle,
    ArticlesFiltersCheckbox,
    ArticlesFiltersCheckboxLabel,
    ArticlesFiltersCheckboxTitle,
    ArticlesFiltersStyled
} from "./Articles.styled";
import {useCallback, useEffect, useState} from "react";

type Props = {
    onFilterHandler: (arg: boolean) => void;
    onSortingHandler: (arg: string) => void;
}

const options = [
    { value: 'relevance', label: 'Mest relevanta' },
    { value: 'priceHigh', label: 'Dyrast först' },
    { value: 'priceLow', label: 'Billigast först' },
    { value: 'ratingHigh', label: 'Högsta betyg' },
    { value: 'ratingLow', label: 'Lägsta betyg' },
]

const ArticlesFilters = ({onFilterHandler, onSortingHandler}: Props) => {
    const [filter, setFilter] = useState(false);
    const [sorting, setSorting] = useState<string>("relevance");
    const onFilterChange = useCallback(() => {
        setFilter(!filter);
        onFilterHandler(!filter);
    }, [filter])

    const onSortingChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSorting(event.target.value);
        onSortingHandler(event.target.value);
    }, [])

    return <ArticlesFiltersStyled>
        <ArticlesFiltersCheckboxLabel>
            <ArticlesFiltersCheckbox type='checkbox' checked={filter} onChange={onFilterChange} />
            <ArticlesFiltersCheckboxTitle>Cheaper then 50kr</ArticlesFiltersCheckboxTitle>
        </ArticlesFiltersCheckboxLabel>
        <ArticleFiltersSorting>
            <ArticleFiltersSortingTitle>Sortera pä</ArticleFiltersSortingTitle>
            <select onChange={onSortingChange} value={sorting}>
                {options.map(option => <option key={option.value} value={option.value}>
                    {option.label}
                </option>)}
            </select>
        </ArticleFiltersSorting>
    </ArticlesFiltersStyled>
}

export default ArticlesFilters;
