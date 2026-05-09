import { StyleSheet } from "react-native";

export const COLORS = {
  // Dark dashboard theme
  background: "#0F0F1A",
  headerBg: "#0F0F1A",
  cardBg: "#1A1A2E",
  cardBorder: "#2A2A4A",
  primary: "#00B4D8",
  white: "#FFFFFF",
  textDark: "#FFFFFF",
  textMedium: "#B0B0C0",
  textLight: "#6B6B8A",
  priceGreen: "#00D4A0",
  danger: "#FF4757",
  dangerBg: "#3D1A1F",
  success: "#00D4A0",
  border: "#2A2A4A",
  inputBg: "#1A1A2E",
  inputBorder: "#3A3A5A",
  shadow: "#000000",
  fabBg: "#00B4D8",

  // Category pill colors
  categoryLaptop: "#00B4D8",
  categoryPhone: "#9B59B6",
  categoryTablet: "#F39C12",
  categoryDefault: "#27AE60",
};

export const SIZES = {
  paddingSmall: 8,
  paddingMedium: 16,
  paddingLarge: 24,
  borderRadius: 12,
  fontSmall: 12,
  fontMedium: 15,
  fontLarge: 17,
  fontTitle: 22,
  fabSize: 60,
};

// ============================================================
// LIST SCREEN STYLES
// ============================================================

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerSection: {
    paddingHorizontal: SIZES.paddingLarge,
    paddingTop: SIZES.paddingLarge,
    paddingBottom: SIZES.paddingMedium,
  },
  headerLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.primary,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
    marginTop: 2,
  },
  headerSubtitle: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  badgeContainer: {
    position: "absolute",
    top: SIZES.paddingLarge,
    right: SIZES.paddingLarge,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 52,
  },
  badgeCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
  badgeLabel: {
    fontSize: 9,
    color: COLORS.white,
    fontWeight: "700",
    letterSpacing: 1,
  },
  searchContainer: {
    paddingHorizontal: SIZES.paddingLarge,
    paddingBottom: SIZES.paddingMedium,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: SIZES.paddingMedium,
    paddingVertical: 10,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
    color: COLORS.white,
  },
  resultsText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 6,
    marginLeft: 4,
  },
  sectionLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginHorizontal: SIZES.paddingLarge,
    marginBottom: SIZES.paddingSmall,
  },
  list: {
    paddingHorizontal: SIZES.paddingLarge,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.paddingMedium,
  },
  cardIcon: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  cardName: {
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
    color: COLORS.white,
  },
  cardBrand: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  categoryPill: {
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 6,
  },
  categoryPillText: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.white,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  cardRight: {
    alignItems: "flex-end",
  },
  cardPrice: {
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
    color: COLORS.priceGreen,
  },
  cardYear: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
    fontSize: SIZES.fontMedium,
  },
  fabRow: {
    position: "absolute",
    bottom: SIZES.paddingLarge,
    right: SIZES.paddingLarge,
    flexDirection: "row",
    alignItems: "center",
  },
  fabLabel: {
    color: COLORS.textMedium,
    fontSize: SIZES.fontSmall,
    marginRight: 10,
    letterSpacing: 0.5,
  },
  fab: {
    width: SIZES.fabSize,
    height: SIZES.fabSize,
    borderRadius: SIZES.fabSize / 2,
    backgroundColor: COLORS.fabBg,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  fabText: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 34,
  },
});

// ============================================================
// DETAIL SCREEN STYLES
// ============================================================

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SIZES.paddingLarge,
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: SIZES.paddingLarge,
  },
  heroIconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  heroIcon: {
    fontSize: 36,
  },
  heroCategoryPill: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  heroCategoryText: {
    fontSize: SIZES.fontSmall,
    fontWeight: "700",
    color: COLORS.white,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingLarge,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginBottom: SIZES.paddingMedium,
  },
  cardSectionLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: SIZES.paddingSmall,
  },
  nameValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  rowFields: {
    flexDirection: "row",
    gap: 12,
  },
  fieldBox: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
  },
  fieldLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  fieldValue: {
    fontSize: SIZES.fontMedium,
    color: COLORS.white,
    fontWeight: "600",
    marginTop: 4,
  },
  priceCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingLarge,
    borderWidth: 1.5,
    borderColor: COLORS.priceGreen,
    marginBottom: SIZES.paddingLarge,
  },
  priceLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.priceGreen,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  priceValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.priceGreen,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
  },
  editButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  editButtonHint: {
    color: COLORS.white,
    fontSize: 10,
    opacity: 0.8,
    marginTop: 2,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: COLORS.dangerBg,
    padding: 14,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.danger,
  },
  deleteButtonText: {
    color: COLORS.danger,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  deleteButtonHint: {
    color: COLORS.danger,
    fontSize: 10,
    opacity: 0.8,
    marginTop: 2,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
    fontSize: SIZES.fontMedium,
  },
});

// ============================================================
// FORM SCREEN STYLES
// ============================================================

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SIZES.paddingLarge,
    paddingBottom: 40,
  },
  modeBadge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: SIZES.paddingMedium,
  },
  modeBadgeText: {
    color: COLORS.white,
    fontSize: SIZES.fontSmall,
    fontWeight: "700",
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: SIZES.fontTitle,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginBottom: SIZES.paddingLarge,
  },
  label: {
    fontSize: SIZES.fontSmall,
    fontWeight: "700",
    color: COLORS.textMedium,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginTop: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: SIZES.paddingMedium,
    paddingVertical: 12,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
    color: COLORS.white,
  },
  inputFocused: {
    borderColor: COLORS.primary,
  },
  rowInputs: {
    flexDirection: "row",
    gap: 12,
  },
  rowInputGroup: {
    flex: 1,
  },
  helperText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    marginTop: 4,
    marginLeft: 2,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: SIZES.borderRadius,
    marginTop: SIZES.paddingLarge,
    alignItems: "center",
  },
  saveButtonDisabled: {
    backgroundColor: COLORS.textLight,
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 14,
    borderRadius: SIZES.borderRadius,
    marginTop: SIZES.paddingSmall,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cancelButtonText: {
    color: COLORS.textMedium,
    fontSize: SIZES.fontMedium,
  },
});
