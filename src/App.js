import './App.css';
import React, { useState } from 'react';
import Ref from './components/ref';
import Audio from './music/4g8hp7qo9c6ewa49wq.m4a'
import Audio2 from './music/d86f4jw3fjdaerel1t.m4a'
import Audio3 from './music/9k5j129auml4kw4bcr.m4a'
import Audio4 from './music/1fl1715zvi3clixwc0.m4a'
import Audio5 from './music/mhw547x0x99indt4u6.m4a'
import Audio6 from './music/9kn6or7e5dn4n8sylc.m4a'
import Audio7 from './music/5jwcdnbi7llgs39kta.m4a'
import Image1 from './images/e380634b-ed10-4c9b-bbed-03ae8928f01f_1024.jpg'
import Image2 from './images/c64830b3b7a70015664ecfa26ff920f6.1000x1000x1.jpg'
import Image3 from './images/ab67616d0000b273b3c07f49b631ccb5d9551ae1.jfif'
import Image4 from './images/The_Playlist_S1_00_00_45_03_Ulf_Brantas-1-scaled.webp'
import Image5 from './images/m1000x1000.jfif'
import Image6 from './images/maxresdefault.jpg'
import Image7 from './images/https___imagestore.ffm.to_link_88e807ab71e6e554c8aef652d5049d18.jpeg'

const App = () => {

  const [music, setMusic] = useState([
    {
      image:Image1,
      id: 1,
      music: Audio,
      title: "Космос"
    },
    {
      image:Image3,
      id: 2,
      music: Audio2,
      title: 'universe'
    },
    {
      image:Image2,
      id: 3,
      music: Audio3,
      title: 'Омега'
    },
    {
      image:Image4,
      id: 4,
      music: Audio4,
      title: 'Human'
    },
    {
      image:Image5,
      id: 5,
      music: Audio5,
      title: "Эталон кросоты"
    },
    {
      image:Image6,
      id: 6,
      music: Audio6,
      title: "Дениздеги"
    },
    {
      image:Image7,
      id: 7,
      music: Audio7,
      title: "Кечки Бишкек"
    }
  ])
  const [index, setIndex] = useState(0)

  return (
    <div className="App">
      <Ref
        index={index}
        music={music}
        setIndex={setIndex}/>
    </div>
  );
}

export default App;
