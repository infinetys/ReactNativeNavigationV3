import React  from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigate('Details')}
      />
      </View>
    )
  }
}
