import React from 'react';
import { Holder, ToggleList, ToggleListItem } from './articles.styles';

/**
 * Render an <Article> component.
 *
 * @return {JSX.Element}
 */
export const Article = () => (
  <Holder>
    <div>
      <ToggleList>
        <ToggleListItem>
          <div> Global Feed</div>
        </ToggleListItem>
      </ToggleList>
    </div>
  </Holder>
);

export default Article;
