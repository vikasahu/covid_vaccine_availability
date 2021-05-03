import React from 'react'

function VaccineCenter(props) {
    const { centers } = props;
    const filterbyAge = (v_center, age) => {
        const v = v_center.filter(a => {
            const vv = a.sessions.filter(b => {
                if (b.min_age_limit === age && b.available_capacity > 0) return b
                return false
            })
            if (vv.length) return vv
            return false
        })
        return v
    }
    const center18 = filterbyAge(centers, 18);
    const center45 = filterbyAge(centers, 45)

    const centerName = (arr) => {
        return (<>
            {arr.map(a => {
                return (<tr key={a.center_id}>
                    <td>{a.fee_type}</td>
                    <td>{a.name}</td>
                    <td>{a.vaccine ?? 'unknown'}</td>

                    {getTDdates(a.sessions)}
                </tr>)
            })}
        </>)
    }


    const getTDdates = (arr) => {
        return (arr.map(a => <td>{a.date} / {a.available_capacity}</td>))
    }

    const getTHdates = (arr) => {
        let maxLen = -Infinity;
        arr.forEach(element => {
            if (element.sessions.length > maxLen) maxLen = element.sessions.length;
        });
        console.log(maxLen, 'max')
        let th = [];
        for (let i = 0; i < maxLen; i++) {
            th.push(<th key={`${i}_}`} className="cvs_date">Date / Available Vaccines</th>)
        }
        console.log(th, 'th')
        return th.map((a, index) => <>{a}</>)
    }

    const vaccine_center = (arr) => {
        return (
            <>
                {centers.length ?
                    <table className="styled-table" >
                        <tbody>
                            <tr>
                                <th>
                                    State
                                </th>
                                <th>
                                    District
                                </th>
                                <th> Pincode  </th>

                            </tr>
                            <tr key={arr.center_id}>
                                <td>
                                    {centers[0].state_name}
                                </td>
                                <td> {centers[0].district_name} </td>
                                <td>{centers[0].pincode}</td>

                            </tr>
                        </tbody>
                    </table>
                    : null
                }
                <br></br>
                {arr.length ? (
                    <div>
                        <table className="styled-table">

                            <thead>

                                <tr>
                                    <th>Fees</th>
                                    <th>Center Name</th>
                                    <th>Vaccine Type</th>
                                    {getTHdates(arr)}
                                    {/* <th className="cvs_available_vc">Available Vaccines</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {centerName(arr)}
                            </tbody>
                        </table>
                    </div>) : <div className="cvs_no_vc"><br></br>NO VACCINE CENTER AVAILABLE</div>}

            </>

        )
    }
    return (<div>
        <h1>Vaccine Center for 18+</h1>
        {vaccine_center(center18)}
        <br className="cvs_br"></br>
        <h1>Vaccine Center for 45+</h1>
        {vaccine_center(center45)}
    </div>)
}

export default VaccineCenter
