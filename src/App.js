import DrumPad from './components/DrumPad';
import './App.css';



const App = () => {

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  return (
    <main>
      <header>
        <h1>Drum Machine</h1>
      </header>
      <section id="drum-machine">
        <div id="display"></div>
        {padSounds.map(pad => <DrumPad letter={pad.ltr} sound={pad.snd} />)}
      </section>
    </main>
  );
}

const padSounds = [
  {
    ltr: 'Q',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'W',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'E',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'A',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'S',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'D',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'Z',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'X',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  },
  {
    ltr: 'C',
    snd: "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  }
]

export default App;
