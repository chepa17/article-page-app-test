import styled from "styled-components";

export const ArticlesFiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ArticlesFiltersCheckboxLabel = styled.label`
`;

export const ArticlesFiltersCheckbox = styled.input`
`;

export const ArticlesFiltersCheckboxTitle = styled.span`
  color: rgb(0,131,138);
  padding-left: 3px;
`;

export const ArticleFiltersSorting = styled.label``;

export const ArticleFiltersSortingTitle = styled.span`
  padding-right: 3px
`;