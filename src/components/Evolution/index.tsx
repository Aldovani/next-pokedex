import { api } from "../../services"

type Species = {
  species : {
    name: string,
    url:string
    
  }
}

export async function Evolution({ species }:Species) {
  console.log(species.url)
  // const data = await api.get(species.url)
  // console.log(data)
  return (
    <div>
    </div>
  )
}