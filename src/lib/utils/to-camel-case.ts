export default function toCamelCase(text: string) {
  return text[0].toLowerCase() + text.slice(1).replace(' ', '')
}
