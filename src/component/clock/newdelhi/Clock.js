import React from 'react'
import './clock.css'

export default function Clock(props) {

  return (
    <>
    <div>
        <div id="clock">
        <span style={{rotate:"30"*1+"deg"}}  ><b style={{rotate:"-30"*1+"deg"}} >1</b></span>
        <span style={{rotate:"30"*2+"deg"}}  ><b style={{rotate:"-30"*2+"deg"}} >2</b></span>
        <span style={{rotate:"30"*3+"deg"}}  ><b style={{rotate:"-30"*3+"deg"}} >3</b></span>
        <span style={{rotate:"30"*4+"deg"}}  ><b style={{rotate:"-30"*4+"deg"}} >4</b></span>
        <span style={{rotate:"30"*5+"deg"}}  ><b style={{rotate:"-30"*5+"deg"}} >5</b></span>
        <span style={{rotate:"30"*6+"deg"}}  ><b style={{rotate:"-30"*6+"deg"}} >6</b></span>
        <span style={{rotate:"30"*7+"deg"}}  ><b style={{rotate:"-30"*7+"deg"}} >7</b></span>
        <span style={{rotate:"30"*8+"deg"}}  ><b style={{rotate:"-30"*8+"deg"}} >8</b></span>
        <span style={{rotate:"30"*9+"deg"}}  ><b style={{rotate:"-30"*9+"deg"}} >9</b></span>
        <span style={{rotate:"30"*10+"deg"}}><b style={{rotate:"-30"*10+"deg"}} >10</b></span>
        <span style={{rotate:"30"*11+"deg"}}><b style={{rotate:"-30"*11+"deg"}} >11</b></span>
        <span style={{rotate:"30"*12+"deg"}}><b style={{rotate:"-30"*12+"deg"}} >12</b></span>
        <div className="arrows">
          <div className="hand hand1" style={{backgroundColor: 'black', height: '50px', rotate:`${props.hRot}deg`}} />
          <div className="hand hand2" style={{backgroundColor: 'blue', height: '65px', rotate:`${props.mRot}deg`}} />
          <div className="hand hand3" style={{backgroundColor: 'red', height: '80px', rotate:`${props.sRot}deg`}} />
        </div>
      </div>
    </div>
    </>
  )
}
