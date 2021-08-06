
import './App.css';
import axios from 'axios';
import {useEffect} from 'react'
import Dropdown from './components/Dropdown'
import Table from './components/Table'

const typesOfData = [
  'number of flights',
  '% of flights on time',
  '% of flights canceled',
  '% of flights diverted',
  '% of flights delayed',
  '% of flights delayed due to carrier delay',
  '% of flights delayed due to late aircraft',
  '% of flights delayed due to weather',
  '% of flights delayed due to security',
  '% of flights delayed due to air traffic control (“National Aviation System” in the data set)'
]

const years = [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const airportCodes = ['ATL','DFW','DEN','ORD','LAX','CLT','LAS','PHX','MCO','SEA','MIA','IAH','JFK','FLL','SFO','EWR','MSP','DTW','BOS','SLC','PHL','BWI','TPA','SAN','MDW','IAD','BNA','LGA','DAL','DCA','PDX']

console.log(years)

function App() {

  const getData = async () => {
    try {
      const allData = await axios.get(`${process.env.REACT_APP_DATA_URL}`)
      const airlineData = allData.data
      console.log(airlineData)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown selectOptions={years}/>
        <Dropdown selectOptions={typesOfData}/>
        <Dropdown selectOptions={airportCodes}/>
        <Table months={months}/>

      </header>
    </div>
  );
}

export default App;
