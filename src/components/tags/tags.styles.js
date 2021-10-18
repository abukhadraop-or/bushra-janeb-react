import styled from "styled-components";

export const Holder = styled.div`
  background-color: #f3f3f3;
  border-radius: 0.25rem;
  height: fit-content;
  margin-left: 0;
  margin-top: 1.7rem;
  padding: 0.313rem 0.625rem 0.625rem 0.625rem;
  width: fit-content;
  @media screen and (min-width: 1044px) {
    margin-left: 3rem;
  }
  @media screen and (max-width: 1092px) {
    padding: 0;
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Tags = styled.div`
  background-color: #818a91;
  border-radius: 10rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  margin-right: 0.188rem;
  padding: 0.1rem 1rem;
  text-align: center;
  width: fit-content;

  &:hover {
    color: #00000066;
  }
`;

export const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-right: 0.6em;
  width: fit-content;
`;
