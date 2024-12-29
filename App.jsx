import { View, Text, Button } from 'react-native'
import React from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment the count" onPress={() => setCount(count + 1)} />
    </View>
  )
}

export default App