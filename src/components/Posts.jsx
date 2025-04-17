import { useParams } from "react-router-dom";

function Posts() {
    const params = useParams()
    return(
        <>
        <h1 className="text-2xl">Post ID: {params.id}</h1>
        <h1 className="text-2xl">Slug Name: {params.slug}</h1>
        </>
    )
}
export default Posts