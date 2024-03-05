import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

        <Text style={styles.title}>Ingredientes</Text>


      </View>

    <FlatList
          data={["1"]} 
          keyExtractor={item => item}
          renderItem={() => <Recipe recipe={{ name: "Omelete", image: "https://th.bing.com/th/id/OIP.nq_bQTn3cdbzCYWpnK0hFAHaEr?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", minutes: 10 }} />} />


    </View>
  )
}