// src/app/(tabs)/tentang.tsx
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, typeScale } from "../../constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView style={{ flex: 1, padding: spacing.sedang }}>
      <Text
        accessibilityLabel="Judul halaman Tentang Aplikasi Jelajah Aman"
        style={{ fontSize: typeScale.judul, fontWeight: "bold" }}
      >
        Tentang Aplikasi
      </Text>
      <Text style={{ fontSize: typeScale.subjudul, marginTop: spacing.kecil }}>
        Jelajah Aman v1.0.0
      </Text>
      <Text style={{ fontSize: typeScale.isi, marginTop: spacing.kecil }}>
        Pengembang: Furqon
      </Text>
    </SafeAreaView>
  );
}
