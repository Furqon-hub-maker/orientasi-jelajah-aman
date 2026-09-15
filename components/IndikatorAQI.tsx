// components/IndikatorAQI.tsx
import { Text, View } from "react-native";
import { LaporanUdara } from "../types/cuaca";

export default function IndikatorAQI({
  kota,
  indeksAQI,
  tingkat,
  diperbaruiPada,
}: LaporanUdara) {
  const dapatkanWarna = () => {
    switch (tingkat) {
      case "BAIK":
        return "green";
      case "SEDANG":
        return "orange";
      case "TIDAK_SEHAT":
        return "red";
      case "BERBAHAYA":
        return "purple";
      default:
        return "black";
    }
  };

  return (
    <View
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: dapatkanWarna(),
        borderRadius: 6,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Laporan Udara: {kota}</Text>
      <Text style={{ color: dapatkanWarna() }}>
        Indeks AQI: {indeksAQI} ({tingkat})
      </Text>
      {diperbaruiPada && (
        <Text style={{ fontSize: 10, color: "gray" }}>
          Diperbarui: {diperbaruiPada}
        </Text>
      )}
    </View>
  );
}
