import Userprofile from "./componets/Userprofile"
import './App.css'

const userDetailsList = [
    {
        uniqueNo: 1,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Esther Howard',
        role: 'Software Developer'
      },
      {
        uniqueNo: 2,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
        name: 'Floyd Miles',
        role: 'Software Developer'
      },
      {
        uniqueNo: 3,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
        name: 'Jacob Jones',
        role: 'Software Developer'
      },
      {
        uniqueNo: 4,
        imageUrl:
        'https://www.freepik.com/free-photo/young-bearded-man-with-striped-shirt_9660042.htm#query=person&position=1&from_view=search&track=sph&uuid=68c1bffe-11f2-48fc-8f9f-32b3cfe02ad2',
        name: 'Devon Lane',
        role: 'Software Developer'
      }
]

const App = () => (
    <div className="list_container">
        <h1 className="card_heading">User List</h1>
        <ul>
            {userDetailsList.map(eachItem =>(
                <Userprofile userDetails = {eachItem} key = {eachItem.uniqueNo}/>
            ))}
        </ul>
    </div>
)

export default App