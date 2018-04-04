import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions'
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
        const { dispatch } = this.props;
        this.props.actions.fetchData();
    }
    
    render(){
        const { appData } = this.props;
        let gender;
        if (appData.dataFetched)
            gender = <Text>{appData.data.gender}</Text>;
        return <View style={appStyle.scene}>
            <View style={appStyle.searchSection}>
                <TextInput style={ appStyle.searchInput}
                    returnKeyType="search"
                    placeholder="Ingredientes (comma delimited)"
                />
            </View>
            {gender}
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

  function mapStateToProps (state) {
    return {
        appData: state.appData
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)