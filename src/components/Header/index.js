import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons';
import { MotiView, MotiText} from "moti";

const statusbarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight  + 22 : 65;

export default function Header({nome}) {
  return (
    <View style={styles.container}>
        <MotiView 
            style={styles.content}
            from={{
                opacity: 0,
                translateY: -150,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
                type: 'spring',
                duration: 2000,
                delay: 300,
            }}
            >
            <MotiText 
                style= {styles.username}
                from={{
                    translateX: -300,
                }}
                animate={{
                    translateX: 0,
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 800,
                }}
                >
                {nome}
            </MotiText>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="user" size={27} color="#000"/>
            </TouchableOpacity>    

        </MotiView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(73,240,100,1) 76%, rgba(0,212,255,1) 100%);
        backgroundColor: 'rgb(131,58,180)',
        paddingTop: statusbarHeigth,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 30,
        paddingTop: 50,
        //borderBottomEndRadius: 20,
        //borderBottomStartRadius: 20,
        },
        content: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        username: {
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold',
        },
        buttonUser: {
            padding: 5,
            borderRadius: 50,
            backgroundColor: 'rgba(253,29,29,0.12368697478991597)',
            alignItems: 'center',
        },
});