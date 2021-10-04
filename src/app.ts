export default function greet(name: string) {
  console.log(`Hello ${name}!`);

  return "Hello World!";
}

greet(process.argv[2]);
