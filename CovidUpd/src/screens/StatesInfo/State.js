import React from 'react'
import {useEffect,useState} from 'react'
import { View, Text } from 'react-native'
import Custominput from '../../components/Custominput'

const State = () => {
  const [stateName,setstateName]=useState();
  // const [posts,setposts]=useState([]);

  useEffect(() => {
    const url = "https://www.mohfw.gov.in/data/datanew.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <View>
      <Custominput  placeholder="Enter the statename"
        value={stateName}
        setvalue={setstateName}
        secureTextEntry={false}/>
      <Text></Text>
    </View>
  )
}

export default State
