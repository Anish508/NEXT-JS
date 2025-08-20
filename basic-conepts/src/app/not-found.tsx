'use client'
import { useRouter } from "next/navigation"

function pageNotFound(){
      const router = useRouter()
      
      return (
            <div>
                  <h1>Page you are looking for not exist</h1>
                  <button className="p-5 text-black" onClick={()=>router.push('/')}>Go to HomePage</button>
            </div>
      )
}
export default pageNotFound