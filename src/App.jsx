import logoBlue from './assets/top-left-element/logos/logo-blue.svg'
import logoBlueUnderline from './assets/top-left-element/rectangles/rectangle-blue.svg'
import topVector from './assets/decoratives/Vector_hor_up.svg'
import bottomVector from './assets/decoratives/Vector_hor_down.svg'
import Quiz from './components/Quiz';
import jeuAutom from './assets/logos/autom_cyan_logo.svg'
import TooltipInfo from './components/TooltipInfo';
import TooltipExit from './components/TooltipExit';


function App() {

  return (
    <>
      <div className="flex justify-between">

        <div className="mr-auto logo">
          <div className="flex">
            <img src={logoBlue} className="mr-5" alt="logo blue" width={70} height={70} />
            <div className='relative'>
              <h3 className='text-2xl font-bold'>Bienvenue</h3>
              <img src={logoBlueUnderline} className='w-full' alt="logo blue underline" />
            </div>
          </div>
        </div>
        <TooltipInfo className='self-center mr-4' />
        <div className="relative progress">
          <h3 className='text-2xl font-bold'><span className='text-base'>Question</span> 03 / 10</h3>
          <div className="progress_bar"></div>
          <div className="progress_bar_percent_one"></div>
          <div className="progress_bar_percent_two"></div>
        </div>

      </div>

      <div className="mt-4 font-semibold top-decorative">
        <img src={topVector} className="w-full" alt="decorative top vector" />

        <div className='flex justify-between mt-6'>
          <div>
            <p className='mr-10 text-xl timer'><span className='text-lg'>Temps restant: </span>01:25</p>
          </div>
          <TooltipExit />
        </div>

        <span>
          <img src={jeuAutom} className="mx-auto mb-6" alt="jeu autom logo" />
        </span>

        <Quiz />
        <img src={bottomVector} className="w-full" alt="decorative bottom vector" />

      </div>
    </>
  )
}

export default App
