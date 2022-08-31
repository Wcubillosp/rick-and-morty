import {gql, useQuery} from '@apollo/client'
import {Button, Card} from 'react-bootstrap'
import Favorite from './components/Favorite'

// interface CharacterInterface {
//   id: string
//   name: string
//   status: string
//   species: string
//   gender: string
//   origin: {
//     dimension: string
//     name: string
//   }
//   image: string
// }

interface CardProps {
  characterId: string
  setCharacter: (id: string | null) => void
}

const CharacterDetail = ({characterId, setCharacter}: CardProps) => {
  const GET_CHARACTER = gql`
    {
      character(id: ${characterId}) {
        id
        name
        status
        species
        gender
        origin {
          dimension
          name
        }
        image
      }
    }
  `
  const {loading, data} = useQuery(GET_CHARACTER)

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {data && (
        <>
          <Card className='m-2' style={{width: '60rem'}}>
            <Card.Body className='d-flex'>
              <Card.Img variant='top' src={data.character.image} />
              <div className='ms-5 d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title className='mb-5 '>
                    {data.character.name} {`(${data.character.status})`}
                  </Card.Title>
                  <Favorite id={data.character.id} />
                  <Card.Text>Species: {data.character.species}</Card.Text>
                  <Card.Text>Gender: {data.character.gender}</Card.Text>
                  <Card.Text>Dimension: {data.character.origin.dimension}</Card.Text>
                  <Card.Text>Origin: {data.character.origin.name}</Card.Text>
                </div>
                <Button onClick={() => setCharacter(null)}>Back</Button>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  )
}

export default CharacterDetail
