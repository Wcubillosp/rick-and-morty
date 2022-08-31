const Exercise1 = () => {
  const sumFunc = (arr: number[]): number => {
    const sumAll = arr
      .map((item) => item)
      .reduce((prev, curr) => prev + (curr > 20 && curr % 2 === 0 ? 20 : curr), 0)
    return sumAll
  }

  const other = (func: any) => {
    console.log(func)
  }

  const sum = (arr: number[]) => {
    return other(sumFunc(arr))
  }

  sum([1, 2, 3])

  return <div>Console.log()</div>
}

export default Exercise1
