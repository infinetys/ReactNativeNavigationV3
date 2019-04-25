import React  from 'react'
import { Text, View, Button } from 'react-native'

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        header: null
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
      </View>
    )
  }
}
