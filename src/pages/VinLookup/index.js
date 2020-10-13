import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useContextState } from 'dynamic-context-provider'

const VinLookup = () => {
    const { vin, updateContextState } = useContextState()
    const [query, setquery] = useState(`${vin}`)
    const [vehicleInfo, setvehicleInfo] = useState(``)
    async function handleSearch() {
        let vehicleInfo = {}
        try {
            const key = "d90bd73a03msh2d7e2f3c7dd4550p1e0f96jsned254882cb81"
            const url = `https://rapidapi.p.rapidapi.com/decode_vin?vin=${query}`
            const results = await fetch(url, { headers: { 'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com', 'X-RapidAPI-Key': key } })
            const data = await results.json()
            vehicleInfo = data
            console.log('log: data', data)
        } catch (e) {
            updateContextState({
                toaster: {
                    isOpen: true,
                    autoHideDuration: 3000,
                    severity: "error",
                    message: `Network error: ${e}`
                },
            })
        }
        setvehicleInfo(vehicleInfo)
    }
    return (
        <div>
            <div>
            <TextField
                id="vinquery"
                label="Vin #"
                value={query}
                onChange={e => setquery(e.value)}
                fullWidth
            />
            <Button onClick={handleSearch}>Search</Button>
            </div>
           <div>
               {vehicleInfo.errors && 
            <>{vehicleInfo.message}</>   
            }
             {vehicleInfo.success && 
            <>
            <div>Success</div>
            <div>
                {
                    Object.keys(vehicleInfo.specification).map(specKey=>{
                        if(!vehicleInfo.specification[specKey]){
                            return null
                        }
                    return <div key={specKey}>{specKey.toUpperCase()}: {vehicleInfo.specification[specKey]}</div>
                    })
                }
            </div>
            </>  
            }
           </div>
        </div>
    )
}

export default VinLookup
