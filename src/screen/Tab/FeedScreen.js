import React  from 'react'
import { Text, View, Button } from 'react-native'

export default class FeedScreen extends React.Component {

    static navigationOptions = {
        header: null
      };

  render() {

    const {navigate} = this.props.navigation;

    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>หน้า Profile</Text>
        <Button
        title="ไปหน้า Tab"
        onPress={() => navigate('Gate2')}
      />
      </View>

    )
  }
}
