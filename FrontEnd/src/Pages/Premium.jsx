import React from 'react'
import PremiumCards from '../Components/PremiumCards'

const CardData = [
  {
    plan: "Starter",
    price: "0",
    note: "Free Forever",
    features: ["Access to full content","Create Posts","Like Posts","Download Posts","Save Posts"],
    isButton: false
  },
  {
    plan: "Professional",
    price: "10",
    note: "One Time Payment",
    features: ["All Free Features","Ad-Free Experience","Priority Support","Exclusive Content","Access to New Features"],
    isButton: true
  }
  
]

const Premium = () => {
  return (
    <div className='w-full bg-black text-white flex flex-wrap justify-evenly items-center min-h-screen '>
      {
      CardData.map((card, index) => (
        <PremiumCards 
        cardData={card}
          key={index}
          />
      ) )
      }
      
     </div>
  )
}

export default Premium
