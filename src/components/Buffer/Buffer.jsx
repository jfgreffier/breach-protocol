import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Cell } from '../_shared';

const StyledAside = styled.aside`
  min-height: 52px;
  min-width: ${(props) => `calc(45px * ${props.size})`};
  border: 1px solid var(--primary-color);
`;

/**
 *
 * @param {Object} props
 * @param {number} props.capacity
 */
const Buffer = ({ capacity, values }) => {
  return (
    <StyledAside size={capacity}>
      {[...Array(capacity)].map((_, i) => {
        if (i >= values.length) return <Cell key={i} symbol={''} />;
        return <Cell key={i} symbol={values[i] || null} />;
      })}
    </StyledAside>
  );
};

export default observer(Buffer);
