import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { formStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { NewGadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"Form">;

export const FormScreen = ({ route, navigation }: Props) => {
  const id = route.params?.id;
  const isEditMode: boolean = id !== undefined;

  const [form, setForm] = useState<NewGadget>({
    name: "",
    brand: "",
    category: "",
    price: undefined,
    purchaseYear: undefined,
  });

  const [saving, setSaving] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>("");

  useEffect(() => {
    if (isEditMode && id !== undefined) {
      loadGadget(id);
    }
  }, [id]);

  const loadGadget = async (gadgetId: number): Promise<void> => {
    try {
      const gadget = await gadgetService.getById(gadgetId);
      if (gadget === null) {
        Alert.alert("Error", "Gadget not found");
        navigation.goBack();
        return;
      }
      setForm({
        name: gadget.name,
        brand: gadget.brand,
        category: gadget.category,
        price: gadget.price,
        purchaseYear: gadget.purchaseYear,
      });
    } catch (error) {
      Alert.alert("Error", "Could not load gadget");
      console.error(error);
    }
  };

  const handleInputChange = (key: keyof NewGadget, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (): Promise<void> => {
    if (form.name.trim() === "") {
      Alert.alert("Validation Error", "The name field cannot be empty.");
      return;
    }
    if (form.brand.trim() === "") {
      Alert.alert("Validation Error", "The brand field cannot be empty.");
      return;
    }
    if (form.category.trim() === "") {
      Alert.alert("Validation Error", "The category field cannot be empty.");
      return;
    }

    const priceNum = Number(form.price);
    if (form.price === undefined || isNaN(priceNum) || priceNum <= 0) {
      Alert.alert("Validation Error", "Price must be a number greater than 0.");
      return;
    }

    const yearNum = Number(form.purchaseYear);
    if (
      form.purchaseYear === undefined ||
      isNaN(yearNum) ||
      yearNum < 2000 ||
      yearNum > 2026
    ) {
      Alert.alert(
        "Validation Error",
        "Purchase year must be a number between 2000 and 2026."
      );
      return;
    }

    try {
      setSaving(true);
      const payload: NewGadget = {
        name: form.name.trim(),
        brand: form.brand.trim(),
        category: form.category.trim(),
        price: priceNum,
        purchaseYear: yearNum,
      };

      if (isEditMode && id !== undefined) {
        await gadgetService.update(id, payload);
        Alert.alert("Success", "Gadget updated successfully.");
      } else {
        await gadgetService.create(payload);
        Alert.alert("Success", "Gadget created successfully.");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Could not save the gadget.");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = (field: string) => [
    formStyles.input,
    focusedField === field && formStyles.inputFocused,
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={formStyles.container}
        contentContainerStyle={formStyles.scrollContent}
      >
        {/* Mode badge */}
        <View style={formStyles.modeBadge}>
          <Text style={formStyles.modeBadgeText}>
            {isEditMode ? "EDIT" : "CREATE"}
          </Text>
        </View>

        <Text style={formStyles.heroTitle}>
          {isEditMode ? "Edit gadget" : "Add to inventory"}
        </Text>
        <Text style={formStyles.heroSubtitle}>
          Fill in the gadget information
        </Text>

        {/* NAME */}
        <Text style={formStyles.label}>NAME *</Text>
        <TextInput
          style={inputStyle("name")}
          value={form.name}
          onChangeText={(v) => handleInputChange("name", v)}
          placeholder="MacBook Pro 14"
          placeholderTextColor={COLORS.textLight}
          maxLength={80}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField("")}
        />

        {/* BRAND */}
        <Text style={formStyles.label}>BRAND *</Text>
        <TextInput
          style={inputStyle("brand")}
          value={form.brand}
          onChangeText={(v) => handleInputChange("brand", v)}
          placeholder="Apple"
          placeholderTextColor={COLORS.textLight}
          maxLength={60}
          onFocus={() => setFocusedField("brand")}
          onBlur={() => setFocusedField("")}
        />

        {/* CATEGORY */}
        <Text style={formStyles.label}>CATEGORY *</Text>
        <TextInput
          style={inputStyle("category")}
          value={form.category}
          onChangeText={(v) => handleInputChange("category", v)}
          placeholder="Laptop"
          placeholderTextColor={COLORS.textLight}
          maxLength={40}
          onFocus={() => setFocusedField("category")}
          onBlur={() => setFocusedField("")}
        />

        {/* PRICE & YEAR in two columns */}
        <View style={formStyles.rowInputs}>
          <View style={formStyles.rowInputGroup}>
            <Text style={formStyles.label}>PRICE *</Text>
            <TextInput
              style={inputStyle("price")}
              value={form.price?.toString()}
              onChangeText={(v) => handleInputChange("price", v)}
              placeholder="1999.99"
              placeholderTextColor={COLORS.textLight}
              keyboardType="decimal-pad"
              onFocus={() => setFocusedField("price")}
              onBlur={() => setFocusedField("")}
            />
          </View>
          <View style={formStyles.rowInputGroup}>
            <Text style={formStyles.label}>YEAR *</Text>
            <TextInput
              style={inputStyle("purchaseYear")}
              value={form.purchaseYear?.toString()}
              onChangeText={(v) => handleInputChange("purchaseYear", v)}
              placeholder="2024"
              placeholderTextColor={COLORS.textLight}
              keyboardType="number-pad"
              maxLength={4}
              onFocus={() => setFocusedField("purchaseYear")}
              onBlur={() => setFocusedField("")}
            />
            <Text style={formStyles.helperText}>Range: 2000-2026</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[formStyles.saveButton, saving && formStyles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={saving}
        >
          <Text style={formStyles.saveButtonText}>
            {saving
              ? "Saving..."
              : isEditMode
              ? "Update Gadget"
              : "Save Gadget"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={formStyles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={formStyles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
