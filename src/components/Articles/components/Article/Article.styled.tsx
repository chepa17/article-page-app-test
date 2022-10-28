import styled from 'styled-components';

export const ArticleStyledListElement = styled.li`
  box-sizing: border-box;
  -webkit-box-flex: 0;
  flex-grow: 0;
  width: 50%;
  @media (min-width: 1280px)
   {
      width: 20%;
  }
  @media (min-width: 768px) and (max-width: 1279px)
  {
    width: 25%;
  }
`;

export const ArticleWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 4px;
`;


export const ArticleStyled = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  position: relative;
`;

export const ArticleLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-decoration: none;
  font-weight: 500;
  color: rgb(245, 246, 246);
  cursor: pointer;
`;

export const ArticleCard = styled.article`
  position: relative;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgb(0 0 0 / 8%) 0 2px 4px;
  overflow: hidden;
  
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0 2px 8px;
  }
`;

export const ArticleImageCard = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 0;
  box-sizing: border-box;
  display: flex;
  height: 268px;
  flex-shrink: 0;
`;

export const ArticleImageWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
`;

export const ArticleImage = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 0;
  box-sizing: border-box;
  display: flex;
  height: fit-content;
  flex-shrink: 0;
`;

export const ArticleImageContainer = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%; 
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 100%;
  height: 268px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

export const ArticleOldPrice = styled.span`
    margin-top: 15px;
`;

export const ArticleNewPrice = styled.span`
  font-style: normal;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 0;
  font-weight: 800;
  color: rgb(255, 87, 118);
  @media (min-width: 1280px)
  {
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: 0;
    font-weight: 800;
  }
`;

export const ArticleTitle = styled.p`
  font-style: normal;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: rgb(64, 64, 64);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  hyphens: none;
  margin: 0 5px;
`;

export const ArticleDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const ArticleDetail = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.03em;
  color: rgb(0, 131, 138);
  font-weight: 700;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  hyphens: none;
`;