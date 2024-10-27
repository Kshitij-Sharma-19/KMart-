import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min"

const Products = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const params = useParams()
    const history = useHistory();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search).get("search")
    useEffect(() => {
        async function fetchItems() {
            try {
                let slug = `items.json`
                if(params.category){
                    slug = `${params.category}.json`
                }
                if(queryParams){
                    slug += `?search=${queryParams}`
                }
                const response = await axios.get(`https://react-project-862f0-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data
                if(!data){
                    handleNotFound();
                }
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                // setLoader(false)
                setItems(transformedData)   
            } 
            catch (error) {
                // setLoader(false)
                console.log("Error: ", error)
                // alert("Some error occurred");
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();
        return () => {
            setItems([])
            setLoader(true)
        }
    }, [params.category, queryParams])


    const handleNotFound = () => {
        history.push("/404")
    }
    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products