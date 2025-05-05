import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = width - 32; // Full width minus padding

type SplitImageCardProps = {
  originalImage: string;
  generatedImage: string;
  operationType: string;
  createdAt: string;
  creditsUsed?: number;
};

const formatOperationType = (type: string): string => {
  return type.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const SplitImageCard: React.FC<SplitImageCardProps> = ({
  originalImage,
  generatedImage,
  operationType,
  createdAt,
  creditsUsed
}) => {
  const colors = useThemeColors();
  const formattedType = formatOperationType(operationType);
  const formattedDate = formatDate(createdAt);
  
  // Get operation icon based on operation type
  const getOperationIcon = (type: string) => {
    switch (type) {
      case 'generative_fill':
        return 'auto-fix-high';
      case 'restore':
        return 'restore';
      case 'recolor':
        return 'palette';
      case 'remove_object':
        return 'content-cut';
      default:
        return 'image';
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: colors.card, borderColor: colors.border }
    ]}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={getOperationIcon(operationType)} size={24} color={colors.primary} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{formattedType}</Text>
          <View style={styles.metadataRow}>
            <Text style={[styles.date, { color: colors.secondaryText }]}>{formattedDate}</Text>
            {creditsUsed !== undefined && (
              <View style={styles.creditsContainer}>
                <MaterialIcons name="stars" size={14} color={colors.primary} style={styles.creditsIcon} />
                <Text style={[styles.creditsText, { color: colors.secondaryText }]}>{creditsUsed} credits</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      
      <View style={styles.imageContainer}>
        {/* Original image on the left side */}
        <Image source={{ uri: originalImage }} style={styles.leftImage} resizeMode="cover" />
        
        {/* Generated image on the right side */}
        <Image source={{ uri: generatedImage }} style={styles.rightImage} resizeMode="cover" />
        
        {/* Diagonal split line */}
        <View style={styles.splitLine} />
        
        {/* Labels */}
        <View style={[styles.imageLabel, styles.originalLabel, { backgroundColor: colors.surface }]}>
          <Text style={{ color: colors.text, fontSize: 12 }}>Original</Text>
        </View>
        <View style={[styles.imageLabel, styles.generatedLabel, { backgroundColor: colors.primary }]}>
          <Text style={{ color: colors.text, fontSize: 12 }}>Generated</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  date: {
    fontSize: 12,
  },
  creditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditsIcon: {
    marginRight: 2,
  },
  creditsText: {
    fontSize: 12,
    fontWeight: '500',
  },
  imageContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  leftImage: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    left: 0,
  },
  rightImage: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    right: 0,
  },
  splitLine: {
    position: 'absolute',
    width: 3,
    height: '100%',
    left: '50%',
    backgroundColor: 'white',
    zIndex: 10,
  },
  imageLabel: {
    position: 'absolute',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 5,
  },
  originalLabel: {
    bottom: 10,
    left: 10,
  },
  generatedLabel: {
    bottom: 10,
    right: 10,
  },
});

export default SplitImageCard;
