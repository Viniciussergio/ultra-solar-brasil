import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import AboutUs from '../pages/AboutUs';
import Residencias from '../pages/Residencias';
import Empresas from '../pages/Empresas';
import Rural from '../pages/Rural';
import Contato from '../pages/Contact';

import MyRoute from './MyRoute';

export default function Rotas() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/sobre-a-ultra-solar/" component={AboutUs} />

      <MyRoute exact path="/instalacoes/residencia/" component={Residencias} />
      <MyRoute exact path="/instalacoes/rural/" component={Rural} />
      <MyRoute exact path="/instalacoes/empresa/" component={Empresas} />
      <MyRoute exact path="/contato/" component={Contato} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
