import React from 'react'
import { CointItem } from '../CointItem/CointItem'
import './Coins.css'
import { Link } from 'react-router-dom'
import { Coin } from '../Coin/Coin'

export const Coins = (props) => {
  return (
    <div className='conatiner'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
            {props.coins.map((coins)=> {
                return ( 
                  <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                    <CointItem coins={coins} key={coins.id}/>
                  </Link>
                )
            })}
        </div>
    </div>
  )
}
