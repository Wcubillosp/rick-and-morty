import {useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import {Card, Col, Row} from 'react-bootstrap'

import Favorite from './components/Favorite'
import Pag from './components/Pagination'

interface CharacterInterface {
  id: string
  name: string
  image: string
}

interface CharacterProps {
  setCharacter: (id: string) => void
}

const Characteres = ({setCharacter}: CharacterProps) => {
  const [page, setPage] = useState(1)

  const GET_CHARACTERS = gql`
    {
      characters(page: ${page}) {
        results {
          id
          name
          image
        }
      }
    }
  `
  const {loading, data} = useQuery(GET_CHARACTERS)

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Row>
            {data.characters.results.map((res: CharacterInterface) => (
              <Col sm className='d-flex' key={res.id}>
                <Card className='m-2' style={{width: '18rem'}}>
                  <Card.Img
                    variant='top'
                    style={{cursor: 'pointer'}}
                    src={res.image}
                    onClick={() => setCharacter(res.id)}
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
          <Pag page={page} setPage={setPage} />
        </>
      )}
    </>
  )
}

export default Characteres
