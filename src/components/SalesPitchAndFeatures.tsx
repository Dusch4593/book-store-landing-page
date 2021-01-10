import React from 'react'

interface SalesPitchAndFeaturesProps {
    salesPitch?: string
    features: string[]
}

const content: SalesPitchAndFeaturesProps = {
    salesPitch: "Come and expand your world at our bookstore! We are always getting new titles for you to see. Everything you need is here at an unbeatable price!",
    features: [ 
    "Tens of thousands of books to browse through",
    "Engage with the community at a book club meeting",
    "From the classics to the newest publications, there's something for everybody!"

]}

const showFeatures: any = (f: string[]) => {
    return f.map(feature => <li>{feature}</li>)
}

const SalesPitchAndFeatures = () => {
    return (
        <div className='features-container'>
            <p className='features-info'>
                {content.salesPitch}
            </p>
            <ul className='features-list'>
                {showFeatures(content.features)}
            </ul>
        </div>
    )
}

export default SalesPitchAndFeatures