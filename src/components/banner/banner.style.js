import styled from 'styled-components';
import colors from 'styles/global-colors';

export const BannerContainer = styled.div`
  align-items: center;
  background-color: ${colors.fern};
  box-shadow: inset 0 -0.438rem 0.563rem -0.438rem ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 1.5rem 0;
`;

export const BannerWrapper = styled.div`
  color: white;
  font-size: 3.5rem;
  font-weight: 700 !important;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const BannerHeading = styled.p`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 300 !important;
  margin-bottom: 0;
  text-align: center;
`;
