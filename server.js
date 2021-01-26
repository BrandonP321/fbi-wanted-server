const express = require('express')
const cors = require('cors')
const axios = require('axios')

const PORT = process.env.PORT || 8000

const app = express();

app.use(cors({ origin: true }));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/wanted', (req, res) => {
    // get all wanted people from fbi api
    getAllWanted(1, res)
})

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT)
})


// because of limitations to fbi api, this function will recursively call itself to get all records 
// of wanted people.
const getAllWanted = async (page, res, wantedArr=[], lastAPICallLength=null) => {
    // if the last api call returned 0 wanted people, we can now return the array of all wanted people
    if (lastAPICallLength === 0) {
        return res.json(wantedArr).end();
    }

    // make api request for current page of wanted people, maxes out at 50 per page
    const newPeople = await axios.get('https://api.fbi.gov/@wanted?pageSize=50&page=' + page)

    // spread new array into array with current array of wanted people
    const updatedArr = [...wantedArr, ...newPeople.data.items]

    // recursively call function to get next page of people
    return getAllWanted(page + 1, res, updatedArr, newPeople.data.items.length)
}