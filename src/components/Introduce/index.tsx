import React from 'react'
import GlitchText from '../GlitchText'
import SectionBase from '../SectionBase'

interface Props { }

const Introduce = () => {
  return (
    <SectionBase className="bg-white min-h-[92vh]">
      <div className="w-full">
        <h1 className="uppercase font-bold text-black font-sans text-6xl md:text-9xl leading-[0.8] w-full text-left px-4 md:container md:mx-auto">
          <GlitchText text="Creative" background="#F1F1F1" />
          <br />
          <span>Developer</span>
        </h1>
        <div className="px-4 md:container md:mx-auto">
          <div className="w-72 h-10 bg-purple-light">
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-rows justify-between">
            <div className="flex justify-end items-end">
              <span className="material-icons text-6xl md:text-9xl text-black">
                arrow_downward
              </span>
            </div>
            <div className="text-6xl md:text-9xl">
              <h1 className="text-right text-black uppercase font-bold font-sans text-6xl md:text-9xl leading-[0.8] w-full px-4 md:container md:mx-auto">
                <span className="block">Phat</span>
                <span>Nguyen</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
}

export default Introduce
