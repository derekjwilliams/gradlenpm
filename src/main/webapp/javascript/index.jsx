import React from 'react';
import {render} from 'react-dom';
import Table from './table';
import User from './user';
import WebsocketConnection from './websocketConnection'
import '../css/general.css';

render(
  <div>
  <User/>
  <WebsocketConnection/>
    <div>
      <Table number={1} openSeats={[1,2]}/>
      <Table number={2} openSeats={[1,2,3]}/>
      <Table number={3} openSeats={[1]}/>
      <Table number={4} openSeats={[1,2,3,4]}/>
    </div>
  </div>,
  document.getElementById('content')
);
