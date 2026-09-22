// src/components/WeatherCard.tsx
import { Text, View } from "react-native";
// Gunakan ../ untuk naik satu folder ke src/types
import { WeatherCardProps } from "../types/cuaca";
// Gunakan ../ untuk naik satu folder ke src/constants
import { spacing, typeScale } from "../src/constants/styles";

export default function WeatherCard({
  kota,
  suhu,
  tingkatAQI,
}: WeatherCardProps) {
  const warnaAQI = tingkatAQI === "BAIK" ? "green" : "orange";
  return (
    <View
      style={{
        padding: spacing.sedang,
        borderRadius: 8,
        backgroundColor: "#F4F7FA",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: typeScale.judul }}>
        {kota}
      </Text>
      <Text style={{ fontSize: 32 }}>{suhu}°C</Text>
      <Text style={{ color: warnaAQI, fontSize: typeScale.isi }}>
        AQI: {tingkatAQI}
      </Text>
    </View>
  );
}
