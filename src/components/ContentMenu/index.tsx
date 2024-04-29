import { View } from "react-native";
import { AppText as Text } from "../../components/AppText";
import { styles } from "./styles";

interface contentMenuProps {
  totalTasks: number;
  totalTaskCompleted: number;
}

export function ContentMenu({
  totalTasks,
  totalTaskCompleted,
}: contentMenuProps) {
  return (
    <>
      <View style={styles.contentMenu}>
        <Text style={styles.contentMenuText}>
          <View style={styles.contentMenuTextView}>
            <Text style={styles.contentMenuTextBlue}>Criadas</Text>
          </View>
          <View style={styles.contentMenuNumberView}>
            <Text style={styles.contentMenuNumber}>{totalTasks}</Text>
          </View>
        </Text>
        <Text style={styles.contentMenuText}>
          <View style={styles.contentMenuTextView}>
            <Text style={styles.contentMenuTextPurple}>Concluídas</Text>
          </View>
          <View style={styles.contentMenuNumberView}>
            <Text style={styles.contentMenuNumber}>{totalTaskCompleted}</Text>
          </View>
        </Text>
      </View>
    </>
  );
}
