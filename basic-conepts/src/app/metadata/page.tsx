import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata={
      title:"Metadata Exmaple",
      description:"This is my meta data example"
}



function MetaDataExample() {
      const example = [
            {
                  id: "1", title: "One"
            },
            {
                  id: "2", title: "two"

            },
            {
                  id: "3", title: "three"

            },
      ]
      return (
            <div>
                  <h1>Meta Data Example</h1>
                  <ul>
                        {
                              example.map(item=>(
                                    <li key={item.id}> 
                                    <Link href={`/metadata/${item.id}`}>{item.title}</Link>
                                    </li>
                              ))
                        }
                  </ul>
            </div>
      )
}
export default MetaDataExample