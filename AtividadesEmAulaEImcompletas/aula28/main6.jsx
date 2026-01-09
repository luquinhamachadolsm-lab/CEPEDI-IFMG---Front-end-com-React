const MyHeader = styled.h1`
padding: 10px 20px;
background-color: #007bff;
color: white;
text-align: center
`;

const MyHeader2 = styled.h2`
padding: 10px 20px;
background-color:indianred;
color: white;
text-align: center
`;


function App() {
return (
<>
<MyHeader>Welcome!</MyHeader>
<MyHeader2>Hello!</MyHeader2>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));