import React, { useState, useRef } from 'react';
import VaccineCenter from '../VaccineCenter'
import { fetchPinCodeData } from '../../Api/api'


function Search() {
    const inputRef = useRef();
    const [vaccine_result, update_vaccine_result] = useState([]);
    const [showVaccineCenter, updateCenterVisibility] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const date = new Date()
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const nDate = `${da}-${mo}-${ye}`
        const pincode = inputRef.current.value;
        const result = await fetchPinCodeData(pincode, nDate);
        if (result.length) {
            update_vaccine_result(result)
            updateCenterVisibility(true)
        }
        else update_vaccine_result([])

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} className='cvs_search_input' placeholder='Enter the pincode to search' ></input>
                <input className='cvs_search_button' type="submit" value="Submit" />
            </form>

            {showVaccineCenter ? <VaccineCenter centers={vaccine_result} /> : null}
        </div>
    )
}

export default Search
