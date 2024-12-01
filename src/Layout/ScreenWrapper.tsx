import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'
import ScreenHeader from './ScreenHeader';
import If from '../Common/If';
import { NavProps } from '../types';
import withNavProps from '../Navigation/WithNavProps';

interface Props {
    children: any;
    withoutHeader: boolean;
    title?: string;
    rightElement?: ReactNode;
    navigation?: any;
}

interface State {
    screenHeight: number;
}

type WrapperProps = NavProps & Props;

export class ScreenWrapper extends Component<WrapperProps, State> {
    static defaultProps  = {
        withoutHeader: false,
    }
    constructor(props: WrapperProps){
        super(props);
        this.state = {
            screenHeight: Dimensions.get('window').height,
        }
    }
    componentDidMount() {
        Dimensions.addEventListener('change', this.handleDimensionsChange);
    }
    
    // componentWillUnmount() {
    //     Dimensions.removeEventListener('change', this.handleDimensionsChange);
    // }

    handleDimensionsChange = (dimensions: { window: { height: number } }) => {
        this.setState({ screenHeight: dimensions.window.height });
    };
    
    render() {
        const {screenHeight} = this.state;
        const { withoutHeader, title, rightElement, navigation} = this.props;
        console.log('Screen height', screenHeight);
        return (
            <View style={[styles.wrapper, {maxHeight: screenHeight}]}>
                <ScrollView style={styles.innerContainer}>
                    <If condition={!withoutHeader}>
                        <ScreenHeader
                            navigation={this.props.navigation} 
                            route={this.props.route} 
                            backEnabled={true} 
                            title={title} 
                            rightElement={rightElement} 
                        />
                    </If>
                    <View style={styles.childrenContainer}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default withNavProps(ScreenWrapper);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    innerContainer: {
        // flexGrow: 1,
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 90,
    },
    childrenContainer: {
        gap: 22,
    }
})