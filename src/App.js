import React from 'react';
import { reusableFunction } from 'utils/common'
import { AppHeader, AppFooter } from 'components';
import AppRenderRoutes from 'global/AppRenderRoutes.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'global/global.css';
import { Container } from 'react-bootstrap';

function App() {
  reusableFunction()
  return (
    <div className="App">
      <AppHeader />
      <Container>
        <AppRenderRoutes />
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
