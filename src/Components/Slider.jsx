import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons/lib/icons"
import styled from "styled-components"

const Container = styled.div`
    width:30%;
    height:100px;
    display:flex;
    background-color:brown;
    position:relative;
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    top:0;
    bottom:0;
    margin:auto;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor:pointer;
`

function Slider() {
    return (


        <Arrow direction="right" style={{ margin: "10px" }}>
            <ArrowRightOutlined />
        </Arrow>

    )
}

export default Slider
