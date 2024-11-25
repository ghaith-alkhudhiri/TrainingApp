import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'
import ScreenHeader from './ScreenHeader';
import If from '../Common/If';

interface Props {
    children: any;
    withoutHeader: boolean;
    title?: string;
    rightElement?: ReactNode;
}

interface State {
    screenHeight: number;
}


export class ScreenWrapper extends Component<Props, State> {
    static defaultProps  = {
        withoutHeader: false,
    }
    constructor(props: Props){
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
        const { withoutHeader, title, rightElement} = this.props;
        console.log('Screen height', screenHeight);
        return (
            <View style={[styles.wrapper, {minHeight: screenHeight}]}>
                <ScrollView style={styles.innerContainer}>
                    <If condition={!withoutHeader}>
                        <ScreenHeader backEnabled={true} title={title} rightElement={rightElement} />
                    </If>
                    <View style={styles.childrenContainer}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ScreenWrapper;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    innerContainer: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 90,
    },
    childrenContainer: {
        gap: 22,
    }
})