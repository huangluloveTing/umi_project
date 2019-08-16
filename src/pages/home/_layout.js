export default (props) => {
    return (
        <div>
            <div style={{background:'#ff0' , height:'100px'}}></div> 
            {props.children}
        </div>
    )
}
