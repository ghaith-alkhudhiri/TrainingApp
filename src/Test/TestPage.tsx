// import React, { Component, createRef } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import CustomBottomSheet from '../Common/CustomBottomSheet'; // Adjust the import according to your project structure

// interface AppState {
//     isBottomSheetVisible: boolean;
// }

// export class TestPage extends Component<{}, AppState> {
//     bottomSheetRef = createRef<any>();

//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             isBottomSheetVisible: false,
//         };
//     }

//     toggleBottomSheet = () => {
//         console.log("Bottom Sheet Toggled", this.state.isBottomSheetVisible);
//         this.setState({ isBottomSheetVisible: !this.state.isBottomSheetVisible });
//     };

//     closeBottomSheet = () => {
//         if (this.bottomSheetRef.current) {
//             this.bottomSheetRef.current.closeAnimation();
//         }
//     };

//     render() {
//         const { isBottomSheetVisible } = this.state;

//         return (
//             <View style={styles.container}>
//                 <Button title="Toggle Bottom Sheet" onPress={this.toggleBottomSheet} />
//                 <CustomBottomSheet
//                     ref={this.bottomSheetRef}
//                     visible={isBottomSheetVisible}
//                     onClose={this.toggleBottomSheet}
//                 >
//                     <View style={styles.content}>
//                         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi, enim illum rem neque tempore ullam numquam nostrum, saepe, hic ipsum vel fugiat ipsa maiores praesentium quia a repellendus excepturi!</Text>
//                         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi, enim illum rem neque tempore ullam numquam nostrum, saepe, hic ipsum vel fugiat ipsa maiores praesentium quia a repellendus excepturi!</Text>
//                         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi, enim illum rem neque tempore ullam numquam nostrum, saepe, hic ipsum vel fugiat ipsa maiores praesentium quia a repellendus excepturi!</Text>
//                         <Button title="Close" onPress={this.closeBottomSheet} />
//                     </View>
//                 </CustomBottomSheet>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     content: {
//         padding: 16,
//     },
// });

// export default TestPage;

// Switch Test
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Switch from '../Common/Switch'; // Adjust the import according to your project structure

// interface AppState {
//     isSwitchOn: boolean;
// }

// export class TestPage extends Component<{}, AppState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             isSwitchOn: false,
//         };
//     }

//     toggleSwitch = (value: boolean) => {
//         this.setState({ isSwitchOn: value });
//     };

//     render() {
//         const { isSwitchOn } = this.state;

//         return (
//             <View style={styles.container}>
//                 <Text>Switch is {isSwitchOn ? 'On' : 'Off'}</Text>
//                 <Switch
//                     value={isSwitchOn}
//                     onValueChange={this.toggleSwitch}
//                     trackColor={{ false: '#D1D1D6', true: '#0165FC' }}
//                     thumbColor="#f4f3f4"
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default TestPage;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Switch from '../Common/Switch'; // Adjust the import according to your project structure
import Accordion from '../Common/Accordion';


export class TestPage extends Component<{}> {
    constructor(props: {}) {
        super(props);
        
    }

    toggleSwitch = (value: boolean) => {
        this.setState({ isSwitchOn: value });
    };

    render() {
        const accordionItems = [
            {
                title: 'Item 1',
                content: 'Content for item 1',
            },
            {
                title: 'Item 2',
                content: 'Content for item 2',
            },
            {
                title: 'Item 3',
                content: 'Content for item 3',
            },
        ]
        return (
            <View style={styles.container}>
                <Accordion items={accordionItems} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TestPage;