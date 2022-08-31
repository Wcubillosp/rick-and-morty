import {useState} from 'react'
import {Button, Container} from 'react-bootstrap'

import CharacterDetail from './CharacterDetail'
import Characteres from './Characteres'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import {doc} from 'firebase/firestore'
import CharacteresFavorites from './CharacteresFavorites'

const CharacteresMain = () => {
  const [character, setCharacter] = useState<null | string>(null)
  const [favorites, setFavorites] = useState<boolean>(false)

  const favoriteRef = doc(useFirestore(), 'favorites', 'favorite')
  const {data} = useFirestoreDocData(favoriteRef)

  return (
    <Container className='mt-4'>
      {favorites && data ? (
        <>
          <Button className='ms-2' onClick={() => setFavorites(false)}>
            Atras
          </Button>
          <CharacteresFavorites
            setCharacter={setCharacter}
            ids={data.ids}
            setFavorites={setFavorites}
          />
        </>
      ) : character ? (
        <CharacterDetail characterId={character} setCharacter={setCharacter} />
      ) : (
        <>
          <Button onClick={() => setFavorites(true)}>Favorites</Button>
          <Characteres setCharacter={setCharacter} />
        </>
      )}
    </Container>
  )
}

export default CharacteresMain
