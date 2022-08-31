import {gql, useQuery} from '@apollo/client'
import {Card, Col, Row} from 'react-bootstrap'

import Favorite from './components/Favorite'

interface CharacterInterface {
  id: string
  name: string
  image: string
}

interface CharacterProps {
  setCharacter: (id: string) => void
  ids: string[]
  setFavorites: (state: boolean) => void
}

const CharacteresFavorites = ({setCharacter, ids, setFavorites}: CharacterProps) => {
  const GET_CHARACTERS_IDS = gql`
    {
      charactersByIds(ids: [${ids}]) {
          id
          name
          image
        }
      }
      `

  const detail = (id: string) => {
    setCharacter(id)
    setFavorites(false)
  }

  const {loading, data} = useQuery(GET_CHARACTERS_IDS)
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Row>
            {data.charactersByIds.map((res: CharacterInterface) => (
              <Col sm className='d-flex' key={res.id}>
                <Card className='m-2' style={{width: '18rem'}}>
                  <Card.Img
                    variant='top'
                    style={{cursor: 'pointer'}}
                    src={res.image}
                    onClick={() => {
                      detail(res.id)
                    }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <Favorite id={res.id} />
                      &nbsp; {res.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default CharacteresFavorites
