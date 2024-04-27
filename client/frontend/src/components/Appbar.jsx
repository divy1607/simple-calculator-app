import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Appbar() {
    const navigate = useNavigate();
    
    return <div style={{
        display: "flex",
        marginLeft:100,
        marginRight:100,
        justifyContent: " center",
        backgroundColor: "#ffcaff"
    }}>
        
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

        <Button
        onClick={()=>{
            navigate("/")
        }}
        >
            landing
        </Button>


    </div>
}

export default Appbar