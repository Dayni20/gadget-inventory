import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { detailStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"Detail">;

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
      return "📳";
    default:
      return "🔌";
  }
};

export default function DetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const [gadget, setGadget] = useState<Gadget | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadGadget();
    }, [])
  );

  const loadGadget = async (): Promise<void> => {
    try {
      const data = await gadgetService.getById(id);
      if (data === null) {
        Alert.alert("Error", "Gadget not found");
        navigation.goBack();
        return;
      }
      setGadget(data);
    } catch (error) {
      Alert.alert("Error", "Could not load gadget");
      console.error(error);
    }
  };

  const confirmDelete = (): void => {
    if (gadget === null) return;
    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        `Are you sure you want to delete "${gadget.name}"? This action cannot be undone.`
      );
      if (confirmed) handleDelete();
      return;
    }
    Alert.alert(
      "Delete Gadget",
      `Are you sure you want to delete "${gadget.name}"? This action cannot be undone.`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: handleDelete },
      ]
    );
  };

  const handleDelete = async (): Promise<void> => {
    if (gadget === null) return;
    try {
      await gadgetService.delete(gadget.id);
      Alert.alert("Success", "Gadget deleted successfully.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Could not delete the gadget.");
      console.error(error);
    }
  };

  if (gadget === null) {
    return (
      <View style={detailStyles.container}>
        <Text style={detailStyles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const color = getCategoryColor(gadget.category);

  return (
    <ScrollView
      style={detailStyles.container}
      contentContainerStyle={detailStyles.scrollContent}
    >
      {/* Hero section with icon and category badge */}
      <View style={detailStyles.heroSection}>
        <View style={[detailStyles.heroIconBox, { backgroundColor: color + "22" }]}>
          <Text style={detailStyles.heroIcon}>{getCategoryIcon(gadget.category)}</Text>
        </View>
        <View style={[detailStyles.heroCategoryPill, { backgroundColor: color }]}>
          <Text style={detailStyles.heroCategoryText}>{gadget.category}</Text>
        </View>
      </View>

      {/* Product info card */}
      <View style={detailStyles.card}>
        <Text style={detailStyles.cardSectionLabel}>PRODUCT INFO</Text>
        <Text style={detailStyles.nameValue}>{gadget.name}</Text>
      </View>

      {/* Brand & Year row */}
      <View style={detailStyles.card}>
        <View style={detailStyles.rowFields}>
          <View style={detailStyles.fieldBox}>
            <Text style={detailStyles.fieldLabel}>BRAND</Text>
            <Text style={detailStyles.fieldValue}>{gadget.brand}</Text>
          </View>
          <View style={detailStyles.fieldBox}>
            <Text style={detailStyles.fieldLabel}>YEAR</Text>
            <Text style={detailStyles.fieldValue}>{gadget.purchaseYear}</Text>
          </View>
        </View>
      </View>

      {/* Price card */}
      <View style={detailStyles.priceCard}>
        <Text style={detailStyles.priceLabel}>PRICE</Text>
        <Text style={detailStyles.priceValue}>${gadget.price.toFixed(2)}</Text>
      </View>

      {/* Action buttons */}
      <View style={detailStyles.buttonContainer}>
        <TouchableOpacity
          style={detailStyles.editButton}
          onPress={() => navigation.navigate("Form", { id: gadget.id })}
        >
          <Text style={detailStyles.editButtonText}>Edit</Text>
          <Text style={detailStyles.editButtonHint}>UPDATE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={detailStyles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={detailStyles.deleteButtonText}>Delete</Text>
          <Text style={detailStyles.deleteButtonHint}>DELETE w/ confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
