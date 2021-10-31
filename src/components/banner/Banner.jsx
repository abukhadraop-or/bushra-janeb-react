import React from 'react';
import { BannerContainer, BannerHeading, BannerWrapper } from './banner.style';

/**
 * Render an <Banner> component.
 *
 * @return {JSX.Element}
 */
function Banner() {
  return (
    <BannerContainer>
      <BannerWrapper>Conduit</BannerWrapper>
      <BannerHeading>A place to share your knowledge</BannerHeading>
    </BannerContainer>
  );
}

export default Banner;
