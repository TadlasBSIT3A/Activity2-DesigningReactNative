import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginLeft: 12,
      marginRight: 5,
      marginTop: 50
    },

    menu: {
        width: 15,
        height: 22,
        marginLeft: 25,
        marginTop: 12,
       
    },
    
    menurow: {
        width: 22,
        height: 15,
        marginLeft: 140,
        marginTop: 15,
    },

    pp:{
        width: 35,
        height: 35,
        marginLeft: 10,
        marginTop: 6,
        borderRadius: 100 /2
    },

    head: {
       flexDirection: 'row',
        width: 400,
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 20
    },

    headtexts: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 13,
    },

    titles: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 8,
        marginBottom: 10
    },

    p: {
        fontSize: 14,
        marginLeft: 15,
        paddingRight: 8,
        paddingBottom: 1
    },

    boxone: {
        width:  195,
        height: 350,
        backgroundColor: '#BDC581',
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 5,
        marginTop: 30,
        elevation: 5 
    },

    boxtwo: {
        width:  195,
        height: 350,
        backgroundColor: '#F8EFBA',
        borderRadius: 10,
        marginRight: 8,
        marginTop: 30,
        elevation: 5
    },
    
    boxthree: {
        width:  195,
        height: 155,
        backgroundColor: '#bdc3c7',
        borderRadius: 10,
        marginRight: 5,
        marginTop: 5 ,
        elevation: 5
    },
    
    boxfour: {
        width:  195,
        height: 250,
        backgroundColor: '#2ecc71',
        borderRadius: 10,
        marginRight: 8,
        marginTop: 5,
        elevation: 5
    },

    options:{
        flexDirection: 'row',
        width:  395,
        height: 60,
        borderRadius: 10,
        marginTop: 85,
        elevation: 10
    },

    imgs: {
        width: 22,
        height: 25,
        marginLeft: 30,
        marginTop: 20
    }
  });