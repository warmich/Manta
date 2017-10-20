import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import styled from 'styled-components';
const Content = styled.div`
  flex: 1;
  max-height: 80px;
  background: #f9fafa;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-around;
  display: flex;
  align-items: center;
  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background: #c4c8cc;
  margin: 0 4px;
  border-radius: 10px;
  ${props =>
    props.active &&
    `
    background: #c80000;
  `};
`;

import Button from '../../app/components/shared/Button';

function Actions(props) {
  const {
    endTour,
    nextSlide,
    currentSlide,
    totalSlide,
  } = props;

  let indicators = [];
  for (let i = 0; i < totalSlide; i++) {
    indicators.push(
      <Dot
        key={uuidv4()}
        active={i + 1 === currentSlide}
      />
    );
  }

  return (
    <Content>
      <div>
        {currentSlide < totalSlide && (
          <Button link danger onClick={endTour}>
            Skip
          </Button>
        )}
      </div>

      <div>
        { currentSlide === totalSlide
          ? <Button success onClick={endTour}>
              Start Invoicing
            </Button>
          : indicators }
      </div>

      <div>
        {currentSlide < totalSlide && (
          <Button primary onClick={nextSlide}>
            Next
          </Button>
        )}
      </div>
    </Content>
  );
}

Actions.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  endTour: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  totalSlide: PropTypes.number,
};

Actions.defaultProps = {
  totalSlide: 5,
};

export default Actions;
