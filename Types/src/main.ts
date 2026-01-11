import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TYPE ANOTATIONS</h1>

    <p class="read-the-docs">
      learning saar
    </p>
  </div>
`




//type anotations

const bool: boolean = true
const boool = true

console.log(bool);
console.log(boool);


