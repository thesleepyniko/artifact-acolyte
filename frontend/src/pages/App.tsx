// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import '../assets/App.css'
import ClerkHeader from './components/header'

export default function App() {
  return (
    <>
      <ClerkHeader />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-[clamp(1rem,3vw,4rem)] transition-all drop-effect-red font-jetbrains mt-2">
          Everything you need for the Athena Award and Parthenon.
          </h1>
        <h1 className="text-[clamp(.8rem,2vw,1.5rem)] font-jetbrains mt-1">
          Track progress, find travel, and calculate prizes, all in one place.
          </h1>
        <button className="green-button bg-[#3B5435] text-white font-bold py-2 px-4 rounded drop-effect-green outline-[#567d52] mt-2">
            Start Now
        </button>
      </div>
      <div>
        <div className="flex flex-col text-left items-left justify-left">
          <h1 className="font-jetbrains text-[clamp(1rem,3vw,2rem)]">
            this is some sample text detailing a feature
          </h1>
          <h1>
            woah look, subtitles!
          </h1>
        </div>
      </div>
        {/* <img src="https://parthenon.hackclub.com/elements/athena-orpheus.png"
          className="logo w-64 h-auto" 
          alt="Athena Award Orpheus" 
          // width="500"
          // height="800"
          /> */}
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      {/* </div> */}
      {/* <div className="card">
        <button>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}