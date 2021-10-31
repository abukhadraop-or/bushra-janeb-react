import styled from 'styled-components';
import colors from 'styles/global-colors';
import { ReactComponent as heart } from '../../../assests/heart.svg';

export const ArticleContainer = styled.div`
  border-top: 0.063rem solid ${colors.Gray90};
  padding: 1.5rem 0;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  row-gap: 0.625rem;
`;

export const AuthorInfo = styled.div`
  align-items: center;
  column-gap: 0.625rem;
  display: flex;
  width: fit-content;
`;

export const Avatar = styled.img`
  border-radius: 1.875rem;
  cursor: pointer;
  display: inline-block;
  height: 2.5rem;
  vertical-align: middle;
  width: 2.5rem;
`;

export const AuthorDetails = styled.div`
  line-height: 0;
`;

export const AuthorName = styled.p`
  color: ${colors.fern};
  cursor: pointer;
  display: block;
  font-weight: 500;
`;

export const PublishDate = styled.p`
  color: ${colors.lightGrey};
  display: block;
  font-size: 0.8rem;
  line-height: 0.5rem;
`;

export const ArticleTitle = styled.h1`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.188rem;
`;

export const ArticleBody = styled.p`
  color: ${colors.lightGrey};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.3rem;
  margin-bottom: 0.938rem;
`;

export const ReadMore = styled.p`
  color: ${colors.lightGrey};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 300;
  vertical-align: middle;
`;

export const LikeButton = styled.button`
  background-color: ${colors.transparent};
  border: 0.125rem solid ${colors.fern};
  border-radius: 0.2rem;
  color: ${colors.fern};
  column-gap: 0.313rem;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 400;
  height: fit-content;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: ${colors.fern};
    color: ${colors.white};
    path {
      fill: ${colors.white};
    }
  }
`;

export const HeartIcon = styled(heart)`
  height: 0.938rem;
  width: 0.938rem;
`;
