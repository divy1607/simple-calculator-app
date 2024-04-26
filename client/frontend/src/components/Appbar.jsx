import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Appbar() {
    const navigate = useNavigate();

return <div>
    <Button
        onClick={() => {
            navigate("/simple")
        }}>
        simple
    </Button>
    <Button
        onClick={() => {
            navigate("/scientific")
        }}>
        scientific
    </Button>
    </div>
}

export default Appbar