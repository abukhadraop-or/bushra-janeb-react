import PropTypes from "prop-types";
import React from "react";
import { Holder, Tags, TagsContainer, Title } from "./tags.styles";

/**
 * Render the <Tag> component.
 *
 * @param {Object}     props                 Props.
 * @param {Func}       props.onTagSelect     Function that handles tag select.
 * @param {Array}      props.tags            The list of tags.
 *
 * @return {JSX.Element}
 */
export const Tag = (props) => {
  const { onTagSelect, tags } = props;

  return (
    <Holder>
      <Title> Popular Tags </Title>
      <TagsContainer>
        {tags.map((tag) => (
          <Tags key={tag._id} onClick={() => onTagSelect(tag)}>
            {tag.name}
          </Tags>
        ))}
      </TagsContainer>
    </Holder>
  );
};

Tag.propTypes = {
  onTagSelect: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(Object).isRequired,
};

export default Tag;
