import 'bootstrap/dist/css/bootstrap.min.css'
import {getFirestore} from 'firebase/firestore'
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import {FirestoreProvider, useFirebaseApp} from 'reactfire'

import Layout from './pages/Layout'
import CharacteresMain from './pages/characteres/CharacteresMain'
import Exercise1 from './pages/Exercise1'
import ListNicknames from './pages/Exercise2'

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp())

  return (
    <HashRouter>
      <FirestoreProvider sdk={firestoreInstance}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<CharacteresMain />} />

            <Route path='/exercise1' element={<Exercise1 />} />
            <Route
              path='/list-nicknames'
              element={
                <ListNicknames
                  names={['Triviño TI', 'Homer Dev', ' ', ' Ragnar Front', 'Loki UX']}
                  order='ASC'
                />
              }
            />
            <Route path='/*' element={<CharacteresMain />} />
          </Route>
        </Routes>
      </FirestoreProvider>
    </HashRouter>
  )
}

export default App
