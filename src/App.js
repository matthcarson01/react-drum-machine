import { useState } from 'react';
import DrumPad from './components/DrumPad';
import PadContext from './pad-context'
import './App.css';


const App = () => {
  const [pad, setPad] = useState('');

  const handlePress = (msg) => {
    return setPad(msg)
  }

  return (
    <PadContext.Provider value={{ drumPad: pad, pressPad: handlePress }}>
      <main>
        <header>
          <h1>Drum Machine</h1>
        </header>
        <section id="drum-machine">
          <div id="display">{pad}</div>
          {padSounds.map(pad => <DrumPad key={pad.ltr} letter={pad.ltr} sound={pad.snd} message={pad.msg} />)}
        </section>
      </main>
    </PadContext.Provider>
  );
}

const padSounds = [
  {
    ltr: 'Q',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter Q"
  },
  {
    ltr: 'W',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter W"
  },
  {
    ltr: 'E',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter E"
  },
  {
    ltr: 'A',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter A"
  },
  {
    ltr: 'S',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter S"
  },
  {
    ltr: 'D',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter D"
  },
  {
    ltr: 'Z',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter Z"
  },
  {
    ltr: 'X',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter X"
  },
  {
    ltr: 'C',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
    msg: "Letter C"
  }
]

export default App;
