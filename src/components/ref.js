import React, { useRef, useState } from 'react';


const Ref = ({ music,index,setIndex}) => {

  const myRef = useRef(null)
  const [active, setActive] = useState(1)

  // const handerClick = () => {
  //   myRef.current.focus()
  // }
  const next = () => {
    setIndex(index=> index === 6 ? 0 : index + 1)
    setActive(2)
  }
  const play = () => {
    myRef.current.play()
    setActive(2)
  }
  const pause = () => {
    myRef.current.pause()
    setActive(1)
  }
  const prev = () => {
    setIndex(index => index === 0 ? 6 : index -1)
    setActive(2)
  }
  return (
    <center>
    <div className='cart'>
      <center>
      <img width={300} height={400} ref={myRef} src={music[index].image} alt="" />
      </center>
      <audio autoPlay ref={myRef} loop controls src={music[index].music}></audio>
      <center>

      <button onClick={prev}><i class="fa-solid fa-left-long"></i></button>
      {active === 2 ? <button onClick={pause}><i class="fa-solid fa-pause"></i></button>:
      <button onClick={play}><i class="fa-solid fa-play"></i></button> }
      <button onClick={next}><i class="fa-solid fa-right-long"></i></button>
      </center>
      <center>
      <h1>{music[index].title}</h1>
      </center>
    </div>
    </center>
  );
};

export default Ref;