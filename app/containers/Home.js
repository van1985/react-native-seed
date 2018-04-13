import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native'

import Fabric from 'react-native-fabric';
const { Crashlytics } = Fabric;

// crashlytics config
Crashlytics.setUserName('daniel llach');
Crashlytics.setUserEmail('daniel.llach@globant.com');
Crashlytics.setUserIdentifier('1234');
Crashlytics.setBool('has_posted', true);
Crashlytics.setString('organization', 'Globant');

// Forces a native crash for testing
Crashlytics.crash();

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
        this.state = { ingredientsInput: ''}
    }

    searchPressed(){
        this.setState({searching:true});
        this.props.fetchRecipes(this.state.ingredientsInput);
        this.setState({searching:false});
    }

    recipes(){
        return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key]);
    }

    render(){
        return <View style={appStyle.scene}>
            <View style={appStyle.searchSection}>
                <TextInput style={ appStyle.searchInput}
                    returnKeyType="search"
                    placeholder="Ingredientes (comma delimited)"
                    onChangeText={ (ingredientsInput) => this.setState({ingredientsInput})}
                    value={this.state.ingredientsInput}
                />
            </View>
            <Button
            onPress={ () => this.searchPressed()}
            title="Search"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
            <ScrollView style={appStyle.scrollSection}>
                {!this.state.searching && this.recipes().map( (recipe) => {
                    return <View key={recipe.trackId}>
                        <Image source= {{ uri:recipe.artworkUrl100 }} style={appStyle.resultImage} />
                        <Text style={ appStyle.resultText }> {recipe.trackName} </Text>
                        <Text style={ appStyle.resultText }> {recipe.collectionName} </Text>
                        <Text style={ appStyle.resultText }> {recipe.artistName} </Text>
                    </View>
                })}
            { this.state.searching ? <Text> Searching...</Text> : null }
            </ScrollView>
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
