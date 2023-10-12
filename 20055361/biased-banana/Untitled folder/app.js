import { Text, TextInput, Pressable, Image, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function A2() {
  const [data, setData] = useState({ user: "", password: '' });
  const [result, setResult] = useState("");

  function updateUser(value) {
    setData({ ...data, user: value })
  }

  function updatePassword(value) {
    setData({ ...data, password: value });
  }

  const dataset = [
    {user: 'test', password: '12345'},
    {user: 'number1', password: '56789'},
    {user: 'user3', password: '987654'},
    {user: 'known', password: '23458'},
    {user: 'hello', password: 'world'},
  ]
  function checkData() {
    for (const pair of dataset) {
      if(pair.user === data.user && pair.password === data.password){
        setResult("LOGIN SUCESSFULLY");
        return;
      } 
    }
    setResult("LOGIN FAILED");
  }

  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={['rgba(251, 203, 0, 1)', 'rgba(191, 154, 0, 1)']}
    >
      <Text style={styles.title}>LOGIN</Text>

      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'rgba(242, 242, 242, 1)',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: '100%',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <TextInput
          style={styles.userFieldInput}
          placeholder='Name'
          placeholderTextColor='black'
          onChangeText={value => updateUser(value)}
          value={data.user}
        />
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'rgba(242, 242, 242, 1)',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: '100%',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Lock height={32} width={32} />
        <TextInput
          style={{ fontSize: 18, flex: 1 }}
          placeholder='Password'
          placeholderTextColor='black'
          onChangeText={value => updatePassword(value)}
          value={data.password}
        />
      </View>
      <Pressable
      style={{ width: '100%' }}
      onPress={checkData}>
        <Text style={styles.loginButton}>LOGIN</Text>
      </Pressable>
      <Pressable>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Forget your password?
        </Text>
      </Pressable>
      <Text>{result}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  userFieldInput: { fontSize: 18, flex: 1 },
  screenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
  },
  title: { fontSize: 30, fontWeight: 'bold', width: '100%' },
  loginButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});