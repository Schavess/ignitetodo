import { View, Image } from "react-native";
import { styles } from "./styles";

import logoImg from "../../assets/Logo.png";

export function Header() {
  return (
    <>
      <View style={styles.container}>
        <Image source={logoImg} />
        {/* <Text style={styles.textStyle}>Home</Text> */}
      </View>
    </>
  );
}
