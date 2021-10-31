import PropTypes from 'prop-types';
import React from 'react';
import { Holder, Tags, TagsContainer, Title } from './tags.styles';

/**
 * Render the <Tag> component.
 *
 * @param {Object} props             Props.
 * @param {Func}   props.onTagSelect Function that handles tag select.
 * @param {Array}  props.tags        The list of tags.
 *
 * @return {JSX.Element}
 */
function Tag({ onTagSelect, tags }) {
  return (
    <Holder>
      <Title> Popular Tags </Title>
      <TagsContainer>
        {tags.map((tag) => (
          <Tags key={tag.id} onClick={() => onTagSelect(tag)}>
            {tag.name}
          </Tags>
        ))}
      </TagsContainer>
    </Holder>
  );
}
Tag.propTypes = {
  onTagSelect: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Tag;
