import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native'
const {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    Button
} = ReactNative
import { requestApiData } from "../actions";

class Home extends Component{

    constructor(props){
        super(props);
        this.state = { ingredientsInput: ''}
    }

    componentDidMount() {
        //this.props.requestApiData();
    }
    
    searchPressed(){
        /*
        this.setState({searching:true});
        this.props.fetchRecipes(this.state.ingredientsInput);
        this.setState({searching:false});*/
    }

    recipes(){
        //return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key]);
    }
    
    render(){
        return <View style={appStyle.scene}>
            <View style={appStyle.searchSection}>
                <TextInput style={ appStyle.searchInput}
                    returnKeyType="search"
                    placeholder="Ingredientes (comma delimited)"
                />
            </View>
        </View>
    }
}

const appStyle = StyleSheet.create({
    scene: {
      marginTop: 10,
      flex:1
    },
    searchSection: {
      top:10,
      height: 50,
      flexDirection: 'row',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      padding: 5
    },
    scrollSection: {
      flex: 0.8,
      top:20,
    },
    searchButton: {
      backgroundColor: 'green',
      width:150,
      height:150,
      flex:1
    },
    searchInput: {
      flex: 1,
      color: 'black',
      alignSelf: 'flex-start',
      fontSize: 18
    },
    resultImage: {
        height: 100,
        width: 100,
    },
    resultText: {
        backgroundColor: '#000',
        color: '#FFF',
        height: 20,
    }
  });

function mapStateToProps(state) {
    return {
      searchedRecipes: state.searchedRecipes
    };
  }
  
  export default connect(mapStateToProps)(Home);