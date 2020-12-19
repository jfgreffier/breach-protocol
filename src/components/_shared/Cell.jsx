import { useCallback } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const StyledCell = styled.span`
  position: relative;
  display: inline-block;
  width: 60px;
  padding: 2px;
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  &:hover&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px dashed var(--primary-color-dark);
  }
`;

const Cell = ({
  children,
  disabled,
  selected,
  completed,
  onClick,
  ...props
}) => {
  const getColor = useCallback(() => {
    if (disabled) {
      return 'var(--disabled-color-dark)';
    }

    return 'var(--primary-color)';
  }, [disabled]);

  const getBackgroundColor = useCallback(() => {
    if (disabled) {
      return 'var(--disabled-color)';
    } else if (completed) {
      return 'var(--sucess-color)';
    } else if (selected) {
      return 'var(--active-color)';
    }

    return 'initial';
  }, [disabled, completed, selected]);

  return (
    <StyledCell
      color={getColor}
      backgroundColor={getBackgroundColor}
      isDisabled={disabled}
      {...props}
      onClick={disabled ? null : onClick}
    >
      {children}
    </StyledCell>
  );
};

export default observer(Cell);