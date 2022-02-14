import React from 'react';
import styled from 'styled-components';
import './css/MainCenter/font.css'

const WinnersDiv=styled.div`
  height:100%;
  width:100vw;
  background-color:#524880;
  display:flex;
  flex-direction:column;
  padding:50px 0 100px 0;
`
const Title=styled.h1`
  font-size:3em;
  font-weight:bold;
  font-family:'neoneon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  text-align:center;
  margin-bottom:50px;
`
const Table=styled.table`
  border:1px solid white;
  margin:0 auto;
  width:90%;
  tr {
    border:1px solid white;
  }
  th {
    border:1px solid white;
    padding:20px 0;
    vertical-align:middle;
  }
  thead{
    font-size:1.3rem;
  }
  tbody{
    th:nth-child(1){
      font-size:2rem;
    }
    th:nth-child(2){
      font-size:1.3rem;
    }
    th:nth-child(3){
      font-size:1.3rem;
    }
    th:nth-child(4){
      font-size:2rem;
    }
    div:nth-child(1){
      color:rgb(220,52,141);
    }
    div:nth-child(2){
      color:pink;
    }
    div:nth-child(3){
      color:pink;
    }
  }
`
function Winners() {
  return (
    <WinnersDiv id='winners'>
      <Title>HALL OF WINNERS</Title>
      <Table>
        <thead>
        <tr>
          <th>LOTTO NUMBER</th>
          <th>DATE</th>
          <th>WINNING TICKETS</th>
          <th>PRIZEPOOL</th>
        </tr>
        </thead>
        <tbody>
          {data.map((data,index)=>
          <tr key={index}>
          <th style={{color:'rgb(244,134,193)'}}>{data.lottoNumber}</th>
          <th>{data.date}</th>
          <th>
            {data.winningTicket.map((winner,index)=>
            <>
              <div key={index}>
                <span style={{float:'left',marginLeft:'30px'}}>{winner[0]} </span>
                <span style={{float:'right',marginRight:'30px'}}> {winner[1]} SOL</span>
              </div>
              <div style={{clear:'both'}}></div>
            </>
            )}
          </th>
          <th style={{color:'rgb(244,134,193)'}}>{data.prizePool} SOL</th>
        </tr>)}
        </tbody>
      </Table>
    </WinnersDiv>
  );
}

const data=[
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1']]
  ,
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1']]
  ,
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1'],
    ['#2077','0.9'],
    ['#3430','0.45']]
  ,
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1']]
    ,
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1']]
    ,
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1'],
    ['#2077','0.9'],
    ['#3430','0.45']],
  prizePool:'11.04'
  },
  {
  lottoNumber:'LOTTO#14',
  date:'2022-02-11',
  winningTicket:
    [['#1866','2.21'],
    ['#2220','1.1']]
    ,
  prizePool:'11.04'
  }
]

export default Winners;