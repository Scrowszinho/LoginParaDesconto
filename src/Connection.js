import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
export default function Connection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cupom, setCupom] = useState(false);
  const [status, setStatus] = useState('');

  const handleClicker = async () => {
    const req = fetch('https://api.b7web.com.br/loginsimples/',{
    method:'POST',
    body:JSON.stringify({email,password}),
    headers:{
      'Content-Type':'application/json'
    }  
  })
  const json = await (await req).json();
  if(json.status === 'ok'){
    setStatus('Acesso Liberado');
    setCupom(true);
  }else{
    setStatus('Acesso Negado');
    setCupom(false);
  }
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Desconto é aqui</Text>
        <TextInput style={styles.input}
        value={email} placeholder='Digite seu email'
        onChangeText={t=>setEmail(t)}
        placeholderTextColor='#111'
        />
        <TextInput style={styles.input}
        value={password} placeholder='Digite sua senha'
        onChangeText={t=>setPassword(t)}
        placeholderTextColor='#111'
        secureTextEntry={true}
        />
        <Button title='Verificar' 
        onPress={handleClicker}
        />
        <Text style={styles.status}>{status}</Text>
        {cupom &&
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Código do Cupom:</Text>
          <Text style={styles.cupom}>JAHKR1337</Text>
        </View>
      }
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#333',
  paddingTop:40,
  padding:20
  },
  header:{
    color:'white',
    fontSize:25,
    textAlign:'center',
    marginBottom:20
  },
  input:{
    height:45,
    fontSize:18,
    color:'#FFF',
    backgroundColor:'#555',
    borderRadius:5,
    marginBottom:20,
    paddingLeft:10,
    paddingRight:10
  },
  status:{
  margin:50,
  color:'white',
  fontSize:18,
  textAlign:'center'
  },
  cupomArea:{
    backgroundColor:'white',
    borderRadius:5,
    padding:30
  },
  cupomTitle:{
    fontSize:18,
    textAlign:'center',
    marginBottom:20
  },
  cupom:{
    textAlign:'center',
    fontSize:40
  }

  });