// import { Dice1Icon } from 'lucide-react';
import { useState } from 'react';
import Dice1 from './images/Dice1.png';
import Dice2 from './images/Dice2.png';
import Dice3 from './images/Dice3.png';
import Dice4 from './images/Dice4.png';
import Dice5 from './images/Dice5.png';
import Dice6 from './images/Dice6.png';

const App = () => {
  const dImgs = [ Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 ];

  // const [image, setImage] = useState<string>(dImgs[0]);
  // const [image2, setImage2] = useState<string>(dImgs[1]);
  const [dice, setDice] = useState<[number, number]>([1, 1]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newDice: [number, number] = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      setDice(newDice);
      setRolling(false);
    }, 500);
  };

  return (
    <>
      <div 
        className='bg-[#001f24]/80 min-h-screen flex flex-col 
        items-center gap-6 p-2 text-center'
      >
        <center className='rounded'>
          <h1 
            className='text-white bg-slate-500 text-7xl font-semibold mb-4 
            shadow-xl shadow-teal-400 px-8 py-4 rounded-xl'
          >
            Roll 🎲 Dice
          </h1>
          
          <div className='flex flex-col gap-6 bg-blue items-center justify-center'>
            {dice.map((num, i) => (
              <img
                key={i}
                  src={dImgs[num - 1]} 
                    alt={`Dice ${num}`}
                      className={`w-64 h-64 shadow-xl shadow-teal-400 rounded-xl transition-transform ${
                        rolling ? 'animate-bounce' : ''
                      }
                      `}
              />
            ))}
          </div>

          <button 
            onClick={rollDice}
              disabled={rolling}
                className='text-yellow-100 font-bold text-4xl rounded-lg shadow-xl 
                shadow-teal-400 mt-10 px-8 py-4 bg-teal-700 hover:bg-teal-400 
                hover:shadow-none disabled:opacity-50'
          >
            {rolling ? "Rolling 🎲" : "Roll 🎲"}
          </button>
        </center>
      </div>
    </>
  )
}

export default App;

{/* <div className="text-center p-[2rem] m-[1rem] rounded-lg flex flex-row justify-center items-center gap-1">
  <img 
    className='h-[300px] w-[300px] bg-white inline-block align-middle p-[1rem]' 
      src={image}
  />
  <div className='w-[5px] inline-block'></div>
  <img 
    className='h-[300px] w-[300px] bg-white inline-block align-middle p-[1rem]' 
      src={image2}
  />
</div> */}
