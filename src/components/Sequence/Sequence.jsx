import { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import HighlightedSymbolContext from 'providers/HighlightSymbolContext';
import styled from 'styled-components';
import { Cell } from '../_shared';

const StyledAside = styled.aside`
  min-height: 52px;
  min-width: ${(props) => `calc(45px * ${props.size})`};
  background-color: ${(props) => `${props.color}`};
`;

const getNumberOfCorrectSymbols = (buffer, sequence) => {
  for (let i = sequence.length - 1; i > 0; i--) {
    if (buffer.values.length >= i) {
      if (
        buffer.values
          .slice(buffer.values.length - i, buffer.values.length)
          .toString() === sequence.slice(0, i).toString()
      ) {
        return i;
      }
    }
  }
  return -1;
};

/**
 *
 * @param {Object} props
 * @param {number} props.sequence
 */
const Sequence = ({ sequence, buffer }) => {
  const [focusedCell, setFocusedCell] = useState(null);
  const { setHighlightedSymbol } = useContext(HighlightedSymbolContext);

  let numberOfCorrectSymbols = 0;
  let color = 'black';
  if (buffer.containsSequence(sequence)) {
    color = 'green';
  } else if (!buffer.canContainSequence(sequence)) {
    color = 'red';
  } else {
    numberOfCorrectSymbols = getNumberOfCorrectSymbols(buffer, sequence);
  }

  return (
    <StyledAside color={color}>
      {sequence.map((symbol, i) => {
        return (
          <Cell
            onMouseEnter={() => {
              setHighlightedSymbol(symbol);
              setFocusedCell(i);
            }}
            onMouseLeave={() => {
              setHighlightedSymbol(null);
              setFocusedCell(null);
            }}
            key={i}
            symbol={sequence[i]}
            correct={numberOfCorrectSymbols > i}
            highlighted={focusedCell === i}
          />
        );
      })}
    </StyledAside>
  );
};

export default observer(Sequence);
