import axios from 'axios'

const fetchPinCodeData = async (pincode, date) => {
    try {
        const { data } = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`);
        return data.centers
    }
    catch (err) {
        console.log(err)
        return {}
    }

}

export { fetchPinCodeData }