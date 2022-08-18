import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';

import './style.css';

import UnorderList from './UnorderList';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const priceUpateInterval = () =>
  variants[Math.floor(Math.random() * variants.length - 1)] || 'info';

const App = () => {
  const [variat, setAlerts] = useState(priceUpateInterval());

  useEffect(() => {
    const setinterval = setInterval(() => {
      setAlerts(() => priceUpateInterval());
    }, 5000);

    return () => {
      clearInterval(setinterval);
    };
  }, [variat]);

  return (
    <Container>
      Random notification for price update:
      <Alert variant={variat}>{variat}!!!, Alert will render every 5 sec</Alert>
      <UnorderList />
    </Container>
  );
};

export default App;
