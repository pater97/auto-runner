import { Player, Controls } from '@lottiefiles/react-lottie-player';
import '../gameOver/gameOver.css'

function GameOver() {

    return (
        <div id="gameOver">
            <Player
                className='lottiAstro lottieMeteor'
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_if8bcea1.json"
            >
                <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                />
            </Player>
        </div>
    )
}

export default GameOver