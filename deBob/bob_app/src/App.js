import React from 'react'

import Owner from './Owner'
import ownersData from './ownersData'


console.log(ownersData)

function App() {
    const ownerComponents = ownersData.map(j => <Owner key={j.id} 
                                                       owner={j.owner} 
                                                       phone={j.phone}
                                                       shareType={j.shareType} 
                                                       shares={j.shares}
                                                       used={j.used}
                                                       remaining={j.remaining}
                                                />)
    
    return (
        <div>
            {ownerComponents}            
        </div>
    )
}

export default App