import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Special offer</h1>
      <p>Learn React js in one month</p>
      <FeatureButton>Connect</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;