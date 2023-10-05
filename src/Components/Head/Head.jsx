import { useEffect } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { useState } from 'react';
import Marquee from '../Marquee/Marquee';

const Head = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const renderTime = setTimeout(() => {
      setTime(moment().format('dddd ,MMMM D YYYY, h:mm:ss a'))
    }, 1000);

    return () => {
     clearTimeout(renderTime)
    }
  }, [time])

  return (
    <div>
      <img className='mx-auto mt-2' src={logo} alt="the dragon news" />
      <p className='text-center text-gray-400 mt-2'>Journalism Without Fear or Favour</p>
      <p className='text-center'>{time}</p>
    </div>
  )
}

export default Head
