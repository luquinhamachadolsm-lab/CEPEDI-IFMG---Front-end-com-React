const Header = () => {
const myStyle = {
color: "peru",
backgroundColor: "beige",
padding: "10px",
fontFamily: "Sans-Serif"
};
const myStyle1 = {
color: "white",
backgroundColor: "red",
padding: "10px",
fontFamily: "Sans-Serif",
margin:"50px"
};
return (
<>
<h1 style={myStyle}>Hello Style!</h1>
<p>Add a little style!</p>
<h2 style={myStyle1}>Texto usando H2</h2>
</>
);
}

ReactDOM.render(<Header />, document.getElementById('root'));