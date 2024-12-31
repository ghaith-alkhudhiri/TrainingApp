// // import React, { Component } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   Animated,
// //   StyleSheet,
// //   FlatList,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // interface State {
// //   isDropdownVisible: boolean;
// //   selectedColor: string;
// //   selectedSize: string;
// // }

// // class ShopDropDown extends Component<{}, State> {
// //   state = {
// //     isDropdownVisible: false, // Tracks the dropdown visibility
// //     selectedColor: 'Pink', // Default selected color
// //     selectedSize: 'XL', // Default selected size
// //   };

// //   toggleDropdown = () => {
// //     this.setState((prevState) => ({
// //       isDropdownVisible: !prevState.isDropdownVisible,
// //     }));
// //   };

// //   handleColorSelect = (color: string) => {
// //     this.setState({ selectedColor: color });
// //   };

// //   handleSizeSelect = (size: string) => {
// //     this.setState({ selectedSize: size });
// //   };

// //   render() {
// //     const { isDropdownVisible, selectedColor, selectedSize } = this.state;
// //     console.log(isDropdownVisible);
    
// //     return (
// //       <View style={styles.container}>
// //         {/* Main dropdown button */}
// //         <TouchableOpacity
// //           style={styles.dropdownButton}
// //           onPress={this.toggleDropdown}
// //         >
// //           <View style={styles.selectionContainer}>
// //             <View style={styles.colorCircle} />
// //             <Text style={styles.text}>
// //               {selectedColor} / {selectedSize}
// //             </Text>
// //           </View>
// //           <Icon
// //             name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
// //             size={20}
// //             color="#007BFF"
// //           />
// //         </TouchableOpacity>

// //         {/* Dropdown content */}
// //         {isDropdownVisible && (
// //         <TouchableOpacity
// //             style={styles.modalBackground}
// //             activeOpacity={1}
// //             onPress={this.toggleDropdown}
// //         >
// //             <Animated.View style={[styles.dropdownContent, { opacity: 1 }]}>
// //             {/* Dropdown content remains the same */}
// //             <Text style={styles.sectionHeader}>Select Color</Text>
// //             <FlatList
// //                 data={['Red', 'Blue', 'Green', 'Pink']}
// //                 keyExtractor={(item) => item}
// //                 horizontal
// //                 renderItem={({ item }) => (
// //                 <TouchableOpacity
// //                     style={[
// //                     styles.colorOption,
// //                     item === selectedColor && styles.selectedOption,
// //                     ]}
// //                     onPress={() => this.handleColorSelect(item)}
// //                 >
// //                     <View
// //                     style={[
// //                         styles.colorCircle,
// //                         { backgroundColor: item.toLowerCase() },
// //                     ]}
// //                     />
// //                     <Text>{item}</Text>
// //                 </TouchableOpacity>
// //                 )}
// //             />
// //             <Text style={styles.sectionHeader}>Select Size</Text>
// //             <FlatList
// //                 data={['S', 'M', 'L', 'XL']}
// //                 keyExtractor={(item) => item}
// //                 horizontal
// //                 renderItem={({ item }) => (
// //                 <TouchableOpacity
// //                     style={[
// //                     styles.sizeOption,
// //                     item === selectedSize && styles.selectedOption,
// //                     ]}
// //                     onPress={() => this.handleSizeSelect(item)}
// //                 >
// //                     <Text style={styles.sizeText}>{item}</Text>
// //                 </TouchableOpacity>
// //                 )}
// //             />
// //             </Animated.View>
// //         </TouchableOpacity>
// //         )}
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 16,
// //   },
// //   dropdownButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     backgroundColor: '#EAF3FF',
// //     padding: 10,
// //     borderRadius: 8,
// //   },
// //   selectionContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   colorCircle: {
// //     width: 16,
// //     height: 16,
// //     borderRadius: 8,
// //     backgroundColor: 'red', // Default color
// //     marginRight: 8,
// //   },
// //   text: {
// //     color: '#007BFF',
// //     fontSize: 16,
// //   },
// //   modalBackground: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   dropdownContent: {
// //     width: '90%',
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 16,
// //   },
// //   sectionHeader: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     marginBottom: 8,
// //     marginTop: 8,
// //   },
// //   colorOption: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginRight: 16,
// //   },
// //   sizeOption: {
// //     padding: 8,
// //     borderRadius: 4,
// //     backgroundColor: '#EAF3FF',
// //     marginRight: 16,
// //   },
// //   sizeText: {
// //     color: '#007BFF',
// //   },
// //   selectedOption: {
// //     borderWidth: 1,
// //     borderColor: '#007BFF',
// //   },
// // });

// // export default ShopDropDown;

// import React, { Component } from "react";
// import {
//   Animated,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";

// interface DropdownProps {
//   onValueChange: (color: string, size: string) => void;
// }

// interface DropdownState {
//   isOpen: boolean;
//   animatedHeight: Animated.Value;
//   selectedColor: string;
//   selectedSize: string;
// }

// class ShopDropDown extends Component<DropdownProps, DropdownState> {
//   constructor(props: DropdownProps) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       animatedHeight: new Animated.Value(0),
//       selectedColor: "pink",
//       selectedSize: "XL",
//     };
//   }

//   toggleDropdown = () => {
//     const { isOpen, animatedHeight } = this.state;

//     if (isOpen) {
//       Animated.timing(animatedHeight, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.timing(animatedHeight, {
//         toValue: 150, // Adjust based on the dropdown content height
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     }
//     this.setState({ isOpen: !isOpen });
//   };

//   selectColor = (color: string) => {
//     this.setState({ selectedColor: color }, () => {
//       this.props.onValueChange(this.state.selectedColor, this.state.selectedSize);
//     });
//   };

//   selectSize = (size: string) => {
//     this.setState({ selectedSize: size }, () => {
//       this.props.onValueChange(this.state.selectedColor, this.state.selectedSize);
//     });
//   };

//   render() {
//     const { isOpen, animatedHeight, selectedColor, selectedSize } = this.state;

//     return (
//       <View style={styles.container}>
//         {/* Dropdown Header */}
//         <Pressable onPress={this.toggleDropdown} style={styles.headerContainer}>
//           <View style={[styles.swatch, {backgroundColor: this.state.selectedColor}]} />
//           <Text style={styles.selectedText}>{`${selectedColor} / ${selectedSize}`}</Text>
//           <Icon
//             name={isOpen ? "chevron-up" : "chevron-down"}
//             size={18}
//             color="blue"
//             style={styles.icon}
//           />
//         </Pressable>

//         {/* Dropdown Content */}
//         <Animated.View style={[styles.dropdown, { height: animatedHeight }]}>
//           <Text style={styles.dropdownLabel}>Select Color</Text>
//           <View style={styles.swatchesContainer}>
//             <Pressable
//               style={[styles.swatch, { backgroundColor: "pink" }]}
//               onPress={() => this.selectColor("pink")}
//             />
//             <Pressable
//               style={[styles.swatch, { backgroundColor: "blue" }]}
//               onPress={() => this.selectColor("blue")}
//             />
//           </View>

//           <Text style={styles.dropdownLabel}>Select Size</Text>
//           <View style={styles.sizeContainer}>
//             <Pressable
//               style={styles.sizeOption}
//               onPress={() => this.selectSize("M")}
//             >
//               <Text style={styles.sizeText}>M</Text>
//             </Pressable>
//             <Pressable
//               style={styles.sizeOption}
//               onPress={() => this.selectSize("XL")}
//             >
//               <Text style={styles.sizeText}>XL</Text>
//             </Pressable>
//           </View>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     backgroundColor: "#f0f4ff",
//     borderRadius: 8,
//     padding: 8,
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     // padding: 8,
//     backgroundColor: "#f0f4ff",
//     borderRadius: 8,
//   },
//   swatch: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: "red",
//     marginRight: 8,
//   },
//   selectedText: {
//     fontSize: 14,
//     color: "blue",
//   },
//   icon: {
//     marginLeft: 4,
//   },
//   dropdown: {
//     overflow: "hidden",
//     backgroundColor: "#f0f4ff",
//     borderRadius: 8,
//     marginTop: 8,
//   },
//   dropdownLabel: {
//     fontSize: 14,
//     color: "blue",
//     marginVertical: 8,
//     marginLeft: 8,
//   },
//   swatchesContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     marginLeft: 8,
//   },
//   sizeContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     marginLeft: 8,
//   },
//   sizeOption: {
//     padding: 8,
//     borderWidth: 1,
//     borderColor: "blue",
//     borderRadius: 4,
//     marginRight: 8,
//   },
//   sizeText: {
//     fontSize: 14,
//     color: "blue",
//   },
// });

// export default ShopDropDown;

import React, { Component, createRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground, Pressable } from 'react-native';
import CustomBottomSheet from '../../Common/CustomBottomSheet';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomRadioButton from '../../Common/CustomRadioButton';
import theme from '../../Constants/theme';
import CustomButton from '../../Common/CustomButton';

const { width } = Dimensions.get('window');

interface State {
  isVisible: boolean;
}

class DropdownWithBottomSheet extends Component<{}, State> {
  bottomSheetRef: React.RefObject<any>;

  constructor(props: {}) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.bottomSheetRef = createRef();
  }

  openBottomSheet = () => {
    this.setState({ isVisible: true });
  };

  closeBottomSheet = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <View style={styles.container}>
        {/* Dropdown Button */}
        <TouchableOpacity style={styles.dropdownButton} onPress={this.openBottomSheet}>
          <View style={styles.dropdownHeader}>
            <View style={styles.colorSwatch} />
            <Text style={styles.dropdownText}>pink / L</Text>
            <Icon name="chevron-down" size={20} color="blue" />
          </View>
        </TouchableOpacity>

        {/* CustomBottomSheet Component */}
        <CustomBottomSheet
          ref={this.bottomSheetRef}
          visible={isVisible}
          onClose={this.closeBottomSheet}
        >
          <View style={{gap: 23, paddingTop: 24}}>
            <ImageBackground
                source={require('../../Assets/Images/item.jpg')}
                resizeMode='cover'
                style={[{height: 225,
                  width: '100%'}]}
            />
            <View style={{gap: 19}}>
              <Text style={styles.title}>Select Size</Text>
              <CustomRadioButton 
                SegmentedControl 
                options={[
                  { label: 'S', value: 'Small' }, 
                  { label: 'M', value: 'Medium' }, 
                  { label: 'L', value: 'Large' } 
                ]} 
                selectedOption={'Medium'} 
                onOptionSelect={()=>{}} layout='row' 
              />
            </View>

            <View style={{gap: 19}}>
              <Text style={styles.title}>Select Color</Text>
              <CustomRadioButton
                Swatch 
                options={[
                  { label: 'pink', value: 'pink' }, 
                  { label: 'blue', value: 'blue' }, 
                  { label: 'darkblue', value: 'darkblue' }, 
                  { label: 'red', value: 'red' }, 
                ]} 
                selectedOption={'pink'} 
                onOptionSelect={()=>{}} layout='row' 
              />
            </View>

            <CustomButton label='Update' onPress={this.closeBottomSheet}/>
          </View>
        </CustomBottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 102,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  dropdownButton: {
    // width: width * 0.9,
    backgroundColor: '#f4f6fb',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 102,
  },
  colorSwatch: {
    width: 20,
    height: 20,
    backgroundColor: 'red', // Default color
    borderRadius: 10,
  },
  dropdownText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: 'blue',
    fontWeight: '600',
  },
  bottomSheetContent: {
    padding: 20,
    alignItems: 'center',
  },
  sheetItem: {
    fontSize: 14,
    color: 'black',
    marginVertical: 10,
  },
  title: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: -0.3,
  },
});

export default DropdownWithBottomSheet;
