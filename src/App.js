import {Data, MyImage, ActionAlert} from './profile/Profile';

function App() {
  const myStyle = {color:'#white', fontSize: 15, fontWeight: 500, 
    backgroundColor: "#808080", textAlign: "center"};
  const handleName = e => {
    e.preventDefault();
    alert("Chris hemsworth");
  };
  return (
    <>
    <header style={myStyle}>
      <Data fullName ="Chris hemsworth" bio ="37 years old " profession="Acteur"></Data>
      <MyImage>picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;
