import React from "react";
import {View,Text, ImageBackground} from "react-native";
import StyledButton from "../styledButton";
import styles from "./styles";

const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>

            <ImageBackground 
            source={require("../../assets/images/ModelX.jpeg")}
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
                type="primary" 
                content={"Custom Order"} 
                onPress={() => {
                    console.log("custom Order");
            }}/>

            <StyledButton 
                type="secondary" 
                content={"Existing inventory"} 
                onPress={() => {
                    console.log("Existing inventory");
            }}/>

        </View>
    )
}

export default CarItem