import Pagination from 'react-bootstrap/Pagination'

interface IndexProps {
  page: number
  setPage: (page: number) => void
}

const Pag = ({page, setPage}: IndexProps) => {
  return (
    <Pagination size='lg' className='mt-2'>
      <Pagination.First onClick={() => setPage(1)} />
      {page - 1 <= 0 ? (
        <>
          <Pagination.Prev disabled />
          <Pagination.Item disabled>...</Pagination.Item>
        </>
      ) : (
        <>
          <Pagination.Prev onClick={() => setPage(page - 1)} />
          <Pagination.Item onClick={() => setPage(page - 1)}>{page - 1}</Pagination.Item>
        </>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {page + 1 > 42 ? (
        <>
          <Pagination.Item disabled>...</Pagination.Item>
          <Pagination.Next disabled />
        </>
      ) : (
        <>
          <Pagination.Item onClick={() => setPage(page + 1)}>{page + 1}</Pagination.Item>
          <Pagination.Next onClick={() => setPage(page + 1)} />
        </>
      )}
      <Pagination.Last onClick={() => setPage(42)} />
    </Pagination>
  )
}

export default Pag
