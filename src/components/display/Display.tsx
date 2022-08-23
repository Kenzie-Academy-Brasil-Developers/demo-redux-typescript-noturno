import { useSelector } from "react-redux"

interface Store {
    counter: number
}

const Display = () =>{

    const {counter} = useSelector((store: Store) => store)

    return (
        <div>{counter}</div>
    )
}

export default Display