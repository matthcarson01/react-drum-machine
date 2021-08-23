import { useContext } from 'react';
import PadContext from '../pad-context';


const DrumPad = ({ letter, sound, message }) => {

    const pad = useContext(PadContext);
    const playAudio = () => {
        const clip = document.getElementById(letter);
        clip.play();
        pad.pressPad(message);

    }

    return (
        <div className="drum-pad" onClick={playAudio}>
            <audio id={letter} className="clip" src={sound} />
            {letter}
        </div>
    );
}

export default DrumPad;