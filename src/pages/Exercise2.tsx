interface HeaderProps {
  names: string[]
  order: 'ASC' | 'DESC'
}

const ListNicknames = ({names, order}: HeaderProps) => {
  // names.replace(/ /g, '')

  names = names.filter((name) => name.trim())
  names = names.map((element) => {
    return element.trim()
  })

  if (order === 'ASC') {
    names = names.sort()
  } else {
    names = names.reverse()
  }

  return (
    <>
      {names.map((res: string) => (
        <ul>{res}</ul>
      ))}
    </>
  )
}

export default ListNicknames
