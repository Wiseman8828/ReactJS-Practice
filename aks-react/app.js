import React from 'react'
import ReactDOM from 'react-dom/client'
import AdminTable from './userAdmin/adminTable'

// React functional component
const HeadingComponent = () => {
  return <h1>hey i'm functional component</h1>
}

const HeadingComponent1 = () => (
  <h1 className="hey">hey i'm functional component</h1>
)

const data =[
  {
      "name": "Alice Smith",
      "email": "alice.smith@example.com",
      "maker": true,
      "checker": false,
      "HNI": true,
      "admin": false,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "maker": false,
      "checker": true,
      "HNI": false,
      "admin": true,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Carol Williams",
      "email": "carol.williams@example.com",
      "maker": true,
      "checker": true,
      "HNI": true,
      "admin": false,
      "headOfLPM": true,
      "Action": true
  },
  {
      "name": "David Brown",
      "email": "david.brown@example.com",
      "maker": false,
      "checker": false,
      "HNI": true,
      "admin": true,
      "headOfLPM": false,
      "Action": false
  },
  {
      "name": "Eva Davis",
      "email": "eva.davis@example.com",
      "maker": true,
      "checker": false,
      "HNI": false,
      "admin": true,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Frank Miller",
      "email": "frank.miller@example.com",
      "maker": true,
      "checker": true,
      "HNI": false,
      "admin": false,
      "headOfLPM": true,
      "Action": true
  },
  {
      "name": "Grace Wilson",
      "email": "grace.wilson@example.com",
      "maker": false,
      "checker": true,
      "HNI": true,
      "admin": false,
      "headOfLPM": false,
      "Action": false
  },
  {
      "name": "Henry Moore",
      "email": "henry.moore@example.com",
      "maker": true,
      "checker": false,
      "HNI": false,
      "admin": true,
      "headOfLPM": true,
      "Action": true
  },
  {
      "name": "Ivy Taylor",
      "email": "ivy.taylor@example.com",
      "maker": false,
      "checker": false,
      "HNI": true,
      "admin": true,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Jack Anderson",
      "email": "jack.anderson@example.com",
      "maker": true,
      "checker": true,
      "HNI": false,
      "admin": false,
      "headOfLPM": false,
      "Action": false
  },
  {
      "name": "Kelly Thomas",
      "email": "kelly.thomas@example.com",
      "maker": true,
      "checker": false,
      "HNI": true,
      "admin": false,
      "headOfLPM": true,
      "Action": true
  },
  {
      "name": "Leo Jackson",
      "email": "leo.jackson@example.com",
      "maker": false,
      "checker": true,
      "HNI": false,
      "admin": true,
      "headOfLPM": true,
      "Action": false
  },
  {
      "name": "Mia Harris",
      "email": "mia.harris@example.com",
      "maker": true,
      "checker": false,
      "HNI": true,
      "admin": false,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Noah Martin",
      "email": "noah.martin@example.com",
      "maker": true,
      "checker": true,
      "HNI": false,
      "admin": true,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Olivia Lee",
      "email": "olivia.lee@example.com",
      "maker": false,
      "checker": false,
      "HNI": true,
      "admin": true,
      "headOfLPM": true,
      "Action": false
  },
  {
      "name": "Paul Young",
      "email": "paul.young@example.com",
      "maker": true,
      "checker": false,
      "HNI": false,
      "admin": true,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Quinn Walker",
      "email": "quinn.walker@example.com",
      "maker": false,
      "checker": true,
      "HNI": true,
      "admin": false,
      "headOfLPM": true,
      "Action": true
  },
  {
      "name": "Ryan Hall",
      "email": "ryan.hall@example.com",
      "maker": true,
      "checker": false,
      "HNI": false,
      "admin": true,
      "headOfLPM": true,
      "Action": false
  },
  {
      "name": "Sophia King",
      "email": "sophia.king@example.com",
      "maker": true,
      "checker": true,
      "HNI": true,
      "admin": false,
      "headOfLPM": false,
      "Action": true
  },
  {
      "name": "Tom Perez",
      "email": "tom.perez@example.com",
      "maker": false,
      "checker": false,
      "HNI": true,
      "admin": true,
      "headOfLPM": true,
      "Action": true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render([
  <HeadingComponent></HeadingComponent>,
  <HeadingComponent1></HeadingComponent1>,
  <AdminTable data={data} itemsPerPage={5} />
  
])
