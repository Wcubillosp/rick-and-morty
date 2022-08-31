import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './utils/reportWebVitals'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {FirebaseAppProvider} from 'reactfire'
import {Suspense} from 'react'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql#',
  cache: new InMemoryCache(),
})

const firebaseConfig = {
  apiKey: 'AIzaSyA_Zrufc1Dje2skTnBQeDQMgtVpWG4CiHQ',
  authDomain: 'rick-and-morty-ce062.firebaseapp.com',
  projectId: 'rick-and-morty-ce062',
  storageBucket: 'rick-and-morty-ce062.appspot.com',
  messagingSenderId: '457218295549',
  appId: '1:457218295549:web:6b375ea779fff348a3a094',
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>Loading...</p>}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
