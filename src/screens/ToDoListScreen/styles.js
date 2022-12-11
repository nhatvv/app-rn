import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0.5,
        height: "60%",
        alignItems: 'center',
        
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    buttonModal: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 120,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTextModal: {
        color: 'white',
        fontSize: 16,
        width: 80,
        // backgroundColor:'red',
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
        width: 400,
        height: 600,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16,
        flexDirection: 'row',
    },
    entityText: {
        fontSize: 20,
        color: '#333333',
        width: '85%',
      
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 100,
      },
      text: {
        color: '#3f2949',
        marginTop: 10,
        paddingBottom:10,
      },
})