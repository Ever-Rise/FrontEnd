import React from 'react';
import { Container, SkeletonBlock, Spinner } from './styles';

const Loader = ({ fullPage = false, variant = 'spinner' }) => {
  return (
    <Container $fullPage={fullPage} aria-live='polite' aria-busy='true'>
      {variant === 'skeleton' ? <SkeletonBlock /> : <Spinner />}
    </Container>
  );
};

export default Loader;
