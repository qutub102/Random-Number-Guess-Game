import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 8, // work only in andriod
        // below shadow properties only work in IOS
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRaduis: 6,
        shadowOpacity: 0.25,
      },
})