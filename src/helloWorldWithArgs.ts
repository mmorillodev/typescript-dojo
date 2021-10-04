export default function greet(name: string) {
  console.log(`Hello ${name}!`);

  return `Hello ${name}!`;
}

greet(process.argv[2]);
