import { StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: -100, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: '#222',
    width: '70%',
    paddingHorizontal: 10,
  },
  spacing: {
    marginBottom: 20, 
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: 'white',
  },
  icon: {
    padding: 10,
  },
  signUpAndloginButton: {
    marginTop: 30, 
    backgroundColor: '#555', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red', 
  },
  
  emojiButton: {
    padding: 10,
  },
  emojiPickerOverlay: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  emojiPicker: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    width: 300,
  },
  emojiItem: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

});



export default baseStyles;