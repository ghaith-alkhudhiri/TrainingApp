import { Image, Pressable, StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    sectionTitle?: string;
    image?: string | React.ReactElement<any>;
    title?: string;
    description?: string;
    styleType?: 'default' | 'border';
    actionLabel?: string;
    actionIcon?: React.ReactElement<any>;
    onPress?: () => void;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
}

export class CustomSectionCard extends Component<Props> {
  render() {
    const {sectionTitle, image, title, description, styleType, onPress, actionLabel, actionIcon, titleStyle, descriptionStyle} = this.props;
    return (
      <View style={styles.rootContainer}>
        <Text style={[styles.title, styles.sectionTitle]}>{sectionTitle}</Text>
        <View style={styleType === 'border' ? styles.borderContainer : styles.container}>
          {image && typeof image === 'string' && (
              <Image source={{ uri: image }} style={styles.image} />
          )}
          {image && React.isValidElement(image) && image}
          <View style={styles.textContainer}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.description, descriptionStyle]}>{description}</Text>
            {actionLabel && 
              <Pressable onPress={onPress} style={styles.pressable}>
                <Text style={styles.actionLabel}>{actionLabel}</Text>
                <View style={styles.actionIconContainer}>
                  {actionIcon && React.isValidElement(actionIcon) && React.cloneElement(actionIcon)}
                </View>
              </Pressable>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default CustomSectionCard

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // padding: 10,
    gap: 13,
  },
  container: {
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  borderContainer: {
    alignItems: 'center',
    gap: 20,
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#EEEEEF',
    shadowColor: 'rgba(36, 107, 253, 0.10)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    width: 283,
  },
  sectionTitle: {
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.3,
    // textAlign: 'center',
  },
  description: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '400',
    // textAlign: 'center',
    lineHeight: 17,
    color: '#848484',
  },
  actionContainer: {
    flex: 1,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  actionLabel: {
    color: '#0165FC',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
  },
  actionIconContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})