import {
    ArticleCard,
    ArticleDescription, ArticleDetail,
    ArticleImage, ArticleImageCard, ArticleImageContainer, ArticleImageWrapper, ArticleLink,
    ArticleNewPrice,
    ArticleOldPrice,
    ArticleStyled, ArticleStyledListElement, ArticleTitle, ArticleWrapper, Image
} from "./Article.styled";
import type {ArticleType} from "../../../../types/insex";
import {useState} from "react";

type Props = {
    data: ArticleType;
}

const Article = ({data}: Props) => {
    const [imageExist, setImageExist] = useState(true);
    function onError() {
        setImageExist(false);
    }
    return <ArticleStyledListElement>
        <ArticleWrapper>
            <ArticleCard>
                <ArticleLink title={data.title} href={data.articleUrl}/>
                <ArticleStyled >
                    <ArticleImageCard>
                        {imageExist && <ArticleImageWrapper>
                            <ArticleImage>
                                <ArticleImageContainer>
                                    <Image src={data.images[0]?.url} alt={data.title} onError={onError}/>
                                </ArticleImageContainer>
                            </ArticleImage>
                        </ArticleImageWrapper>}
                    </ArticleImageCard>
                    <ArticleDescription>
                        {data.oldPrice
                            ? <ArticleOldPrice style={{textDecoration: 'line-through'}} >
                                {data.oldPrice.formatted}
                              </ArticleOldPrice>
                            : <ArticleOldPrice style={{color: '#ff5776'}}>Endast</ArticleOldPrice>}
                        <ArticleNewPrice>{data.price.formatted}</ArticleNewPrice>
                        <ArticleTitle>{data.title}</ArticleTitle>
                        <ArticleDetail>
                            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="sc-hBxehG jqVsbC"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="hsla(43, 100%, 66%, 1)"
                                      d="m6 6 2-4 2 4 4 .333L11.333 10 12 14l-4-2-4 2 .667-4L2 6.333 6 6Z"></path>
                            </svg>
                            <span style={{margin: '0 5px'}}>{data.averageRating}</span>
                            <svg fill="none" viewBox="0 0 16 16" className="sc-hBxehG jqVsbC" width="16" height="16"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill="hsla(183, 100%, 27%, 1)" fillRule="evenodd"
                                      d="M1.14645 3.14645C1.24022 3.05268 1.36739 3 1.5 3L9.5 3.00002C9.77614 3.00002 10 3.22388 10 3.50002V4.50002H11C11.1082 4.50002 11.2134 4.53511 11.3 4.60002L13.3 6.1C13.3621 6.14657 13.4125 6.20696 13.4472 6.27639L14.6972 8.77641C14.7319 8.84584 14.75 8.9224 14.75 9.00002V11.5L15 11.5C15.2761 11.5 15.5 11.7238 15.5 12C15.5 12.2761 15.2762 12.5 15 12.5L13.937 12.5C13.715 13.3626 12.9319 14 12 14C11.0681 14 10.285 13.3626 10.063 12.5H6.93699C6.71497 13.3626 5.93192 14 5 14C4.06809 14 3.28504 13.3626 3.06301 12.5L1.5 12.5C1.22385 12.5 1 12.2761 1 12V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645ZM10.063 11.5C10.285 10.6374 11.0681 10 12 10C12.753 10 13.4088 10.4161 13.75 11.031V9.50002H10V11.5L10.063 11.5ZM9 11.5L6.93699 11.5C6.71497 10.6374 5.93192 10 5 10C4.06807 10 3.28502 10.6374 3.063 11.5L2 11.5V4L9 4.00002V11.5ZM5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13ZM10 8.50002H13.441L12.6056 6.82918L10.8333 5.50002H10V8.50002ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span style={{margin: '0 5px'}}>{data.shippingTimeMin}-{data.shippingTimeMax} dagar</span>
                        </ArticleDetail>
                    </ArticleDescription>
                </ArticleStyled>
            </ArticleCard>
        </ArticleWrapper>
    </ArticleStyledListElement>
}

export default Article;