import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { listStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"List">;

const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case "laptop":
      return COLORS.categoryLaptop;
    case "phone":
      return COLORS.categoryPhone;
    case "tablet":
      return COLORS.categoryTablet;
    default:
      return COLORS.categoryDefault;
  }
};

const getCategoryIcon = (category: string): string => {
  switch (category.toLowerCase()) {
    case "laptop":
      return "💻";
    case "phone":
      return "📱";
    case "tablet":
      return "📟";
    default:
      return "🔌";
  }
};

export const ListScreen = ({ navigation }: Props) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      loadGadgets();
    }, [])
  );

  const loadGadgets = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await gadgetService.getAll();
      setGadgets(data);
    } catch (error) {
      Alert.alert("Error", "No se pueden cargar los gadgets");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredGadgets = gadgets.filter(
    (gadget) =>
      gadget.name.toLowerCase().includes(searchText.toLowerCase()) ||
      gadget.brand.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={listStyles.container}>
      {/* Header */}
      <View style={listStyles.headerSection}>
        <Text style={listStyles.headerLabel}>INVENTORY</Text>
        <Text style={listStyles.headerTitle}>My Gadgets</Text>
        <Text style={listStyles.headerSubtitle}>Track your tech collection</Text>
        <View style={listStyles.badgeContainer}>
          <Text style={listStyles.badgeCount}>{gadgets.length}</Text>
          <Text style={listStyles.badgeLabel}>ITEMS</Text>
        </View>
      </View>

      {/* Search */}
      <View style={listStyles.searchContainer}>
        <TextInput
          style={listStyles.searchInput}
          placeholder="🔍  Search by name or brand..."
          placeholderTextColor={COLORS.textLight}
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <Text style={listStyles.resultsText}>
            {filteredGadgets.length} result{filteredGadgets.length !== 1 ? "s" : ""} found
          </Text>
        )}
      </View>

      <Text style={listStyles.sectionLabel}>RECENTLY ADDED</Text>

      <FlatList
        data={filteredGadgets}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.list}
        ListEmptyComponent={
          <Text style={listStyles.emptyText}>
            {loading
              ? "Loading..."
              : searchText
              ? "No gadgets found for that search."
              : "No gadgets yet. Add your first gadget!"}
          </Text>
        }
        renderItem={({ item }) => {
          const color = getCategoryColor(item.category);
          return (
            <TouchableOpacity
              style={listStyles.card}
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <View style={[listStyles.cardIconBox, { backgroundColor: color + "22" }]}>
                <Text style={listStyles.cardIcon}>{getCategoryIcon(item.category)}</Text>
              </View>
              <View style={listStyles.cardContent}>
                <Text style={listStyles.cardName}>{item.name}</Text>
                <Text style={listStyles.cardBrand}>{item.brand}</Text>
                <View style={[listStyles.categoryPill, { backgroundColor: color }]}>
                  <Text style={listStyles.categoryPillText}>{item.category}</Text>
                </View>
              </View>
              <View style={listStyles.cardRight}>
                <Text style={listStyles.cardPrice}>${item.price.toFixed(0)}</Text>
                <Text style={listStyles.cardYear}>{item.purchaseYear}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View style={listStyles.fabRow}>
        <Text style={listStyles.fabLabel}>Add new gadget</Text>
        <TouchableOpacity
          style={listStyles.fab}
          onPress={() => navigation.navigate("Form", {})}
        >
          <Text style={listStyles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
