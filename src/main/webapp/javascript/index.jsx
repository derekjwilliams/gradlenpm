import React from 'react';
import {render} from 'react-dom';
import Table from './table';
import '../css/general.css';

render(
  <div>
    <Table number={1} openSeats={[1,2]}/>
    <Table number={2} openSeats={[1,2,3]}/>
    <Table number={3} openSeats={[1]}/>
    <Table number={4} openSeats={[1,2,3,4]}/>
  </div>,
  document.getElementById('content')
);
