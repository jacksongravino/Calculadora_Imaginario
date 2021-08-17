import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import fonts from "../styles/fonts"

export function Polar ( {navigation}){

    const [num1, setNum1] = useState(0);
    const [img1, setImg1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [img2, setImg2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [resultado2, setResultado2] = useState('+'+0);
    const [complex, setComplex] = useState(0);
    const [degResult, setDegResult] = useState (0);
  
  
    const x = parseFloat(num1);
    const y = parseFloat(img1);
    const x1 = x*Math.cos(y*(Math.PI/180));
    const y1 = x*Math.sin(y*(Math.PI/180));
    
    const a = parseFloat(num2);
    const b = parseFloat(img2);
    const a1 = a*Math.cos(b*(Math.PI/180));
    const b1 = a*Math.sin(b*(Math.PI/180));

  
  
    const somar = () =>{
      let result = x1+a1;
      setResultado (result);
      let resultI = (y1+b1);
      if (resultI >= 0){
        setResultado2('+'+resultI);
      }
      else {
      setResultado2 (resultI);
      }
      let trasResult = Math.hypot(result,resultI);
      let trasResultDeg = Math.atan2(resultI,result) *(180/Math.PI);
      setComplex (trasResult);
      setDegResult (trasResultDeg);
    }
    const subtrair = () =>{
      let result = x1-a1;
      setResultado (result);
      let resultI = (y1-b1);
      if (resultI >= 0){
        setResultado2('+'+resultI);
      }
      else {
      setResultado2 (resultI);
      }
      let trasResult = Math.hypot(result,resultI);
      let trasResultDeg = Math.atan2(resultI,result) *(180/Math.PI);
      setComplex (trasResult);
      setDegResult (trasResultDeg);
  
    }
  
    const multiplicar = () =>{
      let result= (x1*a1)-(y1*b1);
      setResultado (result);
      let resultI = (x1*b1)+(y1*a1);
      if (resultI >= 0){
        setResultado2('+'+resultI);
      }
      else {
      setResultado2 (resultI);
      }
      let trasResult = Math.hypot(result,resultI);
      let trasResultDeg = Math.atan2(resultI,result) *(180/Math.PI);
      setComplex (trasResult);
      setDegResult (trasResultDeg);
    }
  
    const dividir = () =>{
      let c = b1-(2*b1);
      let d = (a1*a1+b1*b1);
      let result= ((x1*a1)-(y1*c))/d;
      setResultado (result);
      let resultI = ((x1*c)+(y1*a1))/d;
      if (resultI >= 0){
        setResultado2('+'+resultI);
      }
      else {
      setResultado2 (resultI);
      }
      let trasResult = Math.hypot(result,resultI);
      let trasResultDeg = Math.atan2(resultI,result) *(180/Math.PI);
      setComplex (trasResult);
      setDegResult (trasResultDeg);
    }
    
    return (
      <View style={styles.container}>
      <View>
      <Text style={{fontSize:32, fontFamily: fonts.title, textAlign: 'center'}}>Imaginary Number Calculator</Text>
      </View>
      <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
        <TouchableOpacity style={styles.item}>
          <Text style={{color: 'white', fontSize:18}} onPress={ () => navigation.navigate('Imaginary')}>Imaginary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itembuttom}>
          <Text style={{color: '#141414', fontSize:18}}>Polar</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
        <Text style={{fontSize:24, fontFamily: fonts.text}}>Z1=</Text>
        <TextInput keyboardType="numeric" placeholder="Re" style={styles.input} value={num1} onChangeText={setNum1}></TextInput>
        <Text style={{fontSize:36, fontFamily: fonts.text}}>{"<"}</Text>
        <TextInput keyboardType="numeric" placeholder="θ" style={styles.input} value={img1} onChangeText={setImg1}></TextInput>
        <Text style={{fontSize:36, fontFamily: fonts.text}}>°</Text>
      </View>
      <Text style={{fontFamily: fonts.text}}>{x1}+({y1}i)</Text>

      <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
        <Text style={{fontSize:24, fontFamily: fonts.text}}>Z2=</Text>
        <TextInput keyboardType="numeric" placeholder="Re" style={styles.input} value={num2} onChangeText={setNum2}></TextInput>
        <Text style={{fontSize:36, fontFamily: fonts.text}}>{"<"}</Text>
        <TextInput keyboardType="numeric" placeholder="θ" style={styles.input} value={img2} onChangeText={setImg2}></TextInput>
        <Text style={{fontSize:36, fontFamily: fonts.text}}>°</Text>
      </View>
      <Text style={{paddingBottom:20, fontFamily: fonts.text}}>{a1}+({b1}i)</Text>

      <View style={{flexDirection:'row',height:'10%',alignItems:'center'}}>
        <TouchableOpacity style={styles.simbolos} onPress={()=>somar()}><Text style={styles.button}>Z1+Z2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.simbolos} onPress={()=>subtrair()}><Text style={styles.button}>Z1-Z2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.simbolos} onPress={()=>multiplicar()}><Text style={styles.button}>Z1*Z2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.simbolos} onPress={()=>dividir()}><Text style={styles.button}>Z1/Z2</Text></TouchableOpacity>
      </View>

      <Text style={{padding:10, fontFamily: fonts.text}}>{resultado} {resultado2}i</Text>
      <Text style={{padding:10, marginBottom: 30 ,fontFamily: fonts.text}}>{complex}  {"<"+degResult}°</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      textAlign: 'center',
      alignSelf: 'stretch',
      marginHorizontal: 5,
      height: 50,
      fontSize: 36,
      fontWeight: '100',
      borderWidth: 2,
      borderColor: '#141414',
      width:'35%',
      fontFamily: fonts.title,
      backgroundColor: '#ebebeb'
    },
    simbolos:{
      marginHorizontal: 5,
      backgroundColor:'#141414',
      justifyContent:'center',
      alignItems: 'center',
      height:70,
      width:85,
      borderRadius:20,
    },
    button:{
        fontSize:24,
        color:'white',
        fontFamily: fonts.text,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 2,
      borderRadius: 40,
      height:50,
      width:130,
      borderColor:'#141414',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: fonts.text,
      backgroundColor:'#141414',
    },
    itembuttom: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 2,
      borderRadius: 40,
      height:50,
      width:130,
      borderColor:'#141414',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: fonts.text,
    }
  });
