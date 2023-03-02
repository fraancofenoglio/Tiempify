import React from 'react'

const Additional = ({weather}) => {

    const {main, clouds, wind} = weather
  return (
    <div className='additional-info'>
        <h3 className='first-additional'>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M626 523q22.5 0 38.25-15.75T680 469q0-22.5-15.75-38.25T626 415q-22.5 0-38.25 15.75T572 469q0 22.5 15.75 38.25T626 523Zm-292 0q22.5 0 38.25-15.75T388 469q0-22.5-15.75-38.25T334 415q-22.5 0-38.25 15.75T280 469q0 22.5 15.75 38.25T334 523Zm146 272q66 0 121.5-35.5T682 663h-52q-23 40-63 61.5T480.5 746q-46.5 0-87-21T331 663h-53q26 61 81 96.5T480 795Zm0 181q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/></svg>
            Sens. Térmica: <span className='results'>{Math.round(main.feels_like)}°</span>
        </h3>
        <h3 className='first-additional'>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M690 536V406H560v-60h130V216h60v130h130v60H750v130h-60ZM320 936q-75.53 0-128.765-53.235Q138 829.53 138 754q0-49.099 24-91.55Q186 620 228 594V308q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q358 216 385 242.833q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q395.53 936 320 936Zm-32-468h64V308q0-14-9.2-23t-22.8-9q-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v160Z"/></svg>

            Temp. Máx: <span className='results'>{Math.round(main.temp_max)}°</span>
        </h3>
        <h3 className='first-additional'>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M880 406H560v-60h320v60ZM320 936q-75.53 0-128.765-53.235Q138 829.53 138 754q0-49.099 24-91.55Q186 620 228 594V308q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q358 216 385 242.833q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q395.53 936 320 936Zm-32-468h64V308q0-14-9.2-23t-22.8-9q-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v160Z"/></svg>

            Temp. Mín: <span className='results'>{Math.round(main.temp_min)}°</span>
        </h3>
        <h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M251 896q-88 0-149.5-61.5T40 685q0-75 52.5-127.5T220 505q75 0 127.5 48T400 676h60q0-83-61.5-153T225 445q25-82 97-135.5T481 256q112 0 189.5 82.5T748 534v24q74 0 123 48t49 121q0 69-50 119t-119 50H251Z"/></svg>
            Nubosidad: <span className='results'>{clouds.all}%</span>
        </h3>
        <h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M465 896q-54 0-85.5-28T348 783h68q0 26 11.5 39.5T465 836q27 0 38.5-12t11.5-41q0-29-11.5-42.5T465 727H80v-60h385q54 0 82 28t28 88q0 57-28 85t-82 28ZM80 488v-60h548q37 0 54-17.5t17-58.5q0-41-17-58.5T628 276q-38 0-55 20.5T556 348h-60q0-58 35-95t97-37q61 0 96 35.5T759 352q0 65-35 100.5T628 488H80Zm672 330v-60q35 0 51.5-19.5T820 682q0-38-18.5-55T748 610H80v-60h668q62 0 97 35t35 97q0 64-33 100t-95 36Z"/></svg>
            Viento: <span className='results'>{Math.round(wind.speed*3.6)} km/h</span>
        </h3>
        <h3 className='first-additional'>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M580.118 806Q601 806 615.5 791.382q14.5-14.617 14.5-35.5Q630 735 615.382 720.5q-14.617-14.5-35.5-14.5Q559 706 544.5 720.618q-14.5 14.617-14.5 35.5Q530 777 544.618 791.5q14.617 14.5 35.5 14.5ZM378 800l246-246-42-42-246 246 42 42Zm2.118-194Q401 606 415.5 591.382q14.5-14.617 14.5-35.5Q430 535 415.382 520.5q-14.617-14.5-35.5-14.5Q359 506 344.5 520.618q-14.5 14.617-14.5 35.5Q330 577 344.618 591.5q14.617 14.5 35.5 14.5ZM480 976q-137 0-228.5-94T160 648q0-100 79.5-217.5T480 176q161 137 240.5 254.5T800 648q0 140-91.5 234T480 976Z"/></svg>
            Humedad:  <span className='results'>{main.humidity}%</span>
        </h3>
        <h3 className='first-additional'>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60"><path d="M449 976V818l-77 76-42-42 149-148 147 148-42 42-75-76v158h-60ZM161 646v-60h639v60H161Zm0-121v-60h639v60H161Zm318-117L331 260l42-42 75 76V136h60v158l77-76 42 42-148 148Z"/></svg>
            Presión: <span className='results'>{main.pressure} hPa</span>
        </h3>
        
    </div>
  )
}

export default Additional