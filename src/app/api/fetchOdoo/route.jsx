export async function POST(req, res) {
  const data = await req.json()
  const url = process.env.URL_ODOO_CRM
  console.log({url, data});
  
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  })
  
  return response
}
