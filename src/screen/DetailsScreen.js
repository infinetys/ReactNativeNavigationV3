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
        <Text>หน้า Details</Text>
        <Button
        title="ไปหน้า Home"
        onPress={() => navigate('Home')}
      />
      </View>
    )
  }
}
