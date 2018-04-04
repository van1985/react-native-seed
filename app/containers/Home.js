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

class Home extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchData();
    }
    
    render(){
        const { appData } = this.props;
        let gender;
        if (appData.dataFetched)
            gender = <Text>{appData.data.gender}</Text>;
        return <View style={appStyle.scene}>
            {gender}
        </View>
    }
}

const appStyle = StyleSheet.create({
    scene: {
      marginTop: 10,
      flex:1
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