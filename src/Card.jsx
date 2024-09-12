import imranKhanImage from './assets/imran khan.webp';






function Card() {
  return (
    <div className='Card'>
   <img src={imranKhanImage} alt="" />

        <h2>Imran Khan</h2>
        <p>Create First Card in React</p>
    
    </div>
  )
}

export default Card
