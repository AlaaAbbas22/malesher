import { useState } from 'react'
import { Button, Transition } from '@headlessui/react'
import clsx from 'clsx'
import './App.css'

function App() {
  let [isShowing, setIsShowing] = useState(false)
  let [malesh, setMalesh] = useState(false)
  let [maleshcounter, setMaleshCounter] = useState(0)
  let [lang, setLang] = useState("AR")
  return (
    <>
    
    <div className='fixed right-2 top-2'><label>Language</label><br></br>
    <select value={lang} onChange={(e)=>{setLang(e.target.value)}} className=' bg-white text-black '>
      <option value={"AR"}>
        عربي
      </option>
      <option value={"EN"}>
        English
      </option>
    </select>
    </div>
    <div className="mt-8 flex flex-col items-center">
      <h1 className=' font-mono mb-7'>
        {lang=="AR"&&"الممعلش العالمي"||"Universal Malesher"}
      </h1>
      <div className="size-[12.25rem] flex flex-col items-center justify-center">
        {(!malesh&&<div>
            <textarea
              type="text"
              //value={"value"}
              onChange={"onChange"}
              placeholder={lang=="AR"&&"ايه المشكلة؟"||"What's up?"}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
              
            </span>


        </div>)}
        {malesh&&<Transition show={isShowing} className="flex items-center justify-center">
          <div
            className={clsx(
              'size-full rounded-xl bg-white shadow-lg transition duration-400 text-black font-bold',
              'data-[closed]:scale-50 data-[closed]:rotate-[-120deg] data-[closed]:opacity-0',
              'data-[leave]:duration-200 data-[leave]:ease-in-out',
              'data-[leave]:data-[closed]:scale-95 data-[leave]:data-[closed]:rotate-[0deg]'
            )}
          >
            <div>
              معلش <br/> (Ma'lesh)
            </div>
            
          </div>
          
        </Transition>}
      </div>

      <Button
        onClick={() => {
          setMalesh(true)
          setMaleshCounter((old)=>old+1)
          if (!isShowing){
            setTimeout(() => setIsShowing(true), 500)
          } else {
            setIsShowing(false)
            setTimeout(() => setIsShowing(true), 500)
          }
          
        }}
        className="mt-2 flex items-center gap-2 rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
      >
        
        <span>{malesh&&(lang!="AR"&&"Not satisfied?"||"لسة زعلان؟")||(lang=="AR"&&"حلهالي"||"Solve it")}</span>
      </Button>

      {malesh&&<Button
        onClick={() => {
          setMalesh(false)
          setMaleshCounter(0)
          setIsShowing(false)
            
          
        }}
        className="mt-1 flex items-center gap-2 rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
      >
        
        <span>{lang=="AR"&&"عندك مشكلة تانية؟"||"Another problem?"}</span>
      </Button>}
      {malesh&&lang=="EN"&&<div>
        Malesh Counter = {maleshcounter}
        </div>}
      {malesh&&lang=="AR"&&<div>
        عداد المعلشات = {maleshcounter}
        </div>}
    </div>
    </>
  )
}

export default App
