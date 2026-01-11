
function App() {

  let name: string = 'hunain saar'

  function helloGreet(name : string): string{
    return 'Hello' + name
  }
  console.log(helloGreet(name))

  let numb = 1
  numb = 3

  const random = Math.random() > 0.5 ? 10 : 'number is to much smaller';



  return (
    <div>

    <p>{name}</p>
    <p>{random}</p>
    
    </div>
  )
}

export default App