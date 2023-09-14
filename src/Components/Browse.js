import React from 'react'
import Alea from '../assets/profile/Alea.png'
import Amina from '../assets/profile/Amina.png'
import Dalia from '../assets/profile/Dalia.png'
import Daniel from '../assets/profile/Daniel.png'
import Ninou from '../assets/profile/Ninou.png'
const Browse = () => {
  return (
    <div>
      <h1>Who is Watching Now?</h1>
      <div>
        {/* list of Profiles */}
        <div>
          <img src={Alea} alt="" />
          <div>Name1</div>
        </div>

        <div>
          <img src={Amina} alt="" />
          <div>Name1</div>
        </div>

        <div>
          <img src={Dalia} alt="" />
          <div>Name1</div>
        </div>

        <div>
          <img src={Daniel} alt="" />
          <div>Name1</div>
        </div>

        <div>
          <img src={Ninou} alt="" />
          <div>Name1</div>
        </div>
        
        
      <div>

        </div>
      </div>
    </div>
  )
}

export default Browse