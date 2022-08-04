export default async function getAllCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  return response.json();
}
