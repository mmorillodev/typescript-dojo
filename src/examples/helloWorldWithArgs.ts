export default function greet(name: string) {
  return `Hello ${name}!`
}

console.log(greet(process.argv[2]))
