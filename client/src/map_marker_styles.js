const K_WIDTH = 45;

const mapMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  left: -K_WIDTH / 2,
  top: -10,

  border: '1px solid black',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 7,
  fontWeight: 'bold',
  padding: 1
};

export { mapMarkerStyle };