import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import SuccessView from './SuccessView';
import SuccessMark from '../Assets/Icons/SuccessMark';
import { NavProps } from '../types';
import ScreenWrapper from '../Layout/ScreenWrapper';

interface Props {
    navigation?: any;
    route?: any;
    onComplete: ()=>{};
}

interface State {
    height: number;
    width: number;
}

type SuccessProps = Props & NavProps;

class SuccessPage extends Component<SuccessProps, State> {
    constructor(props: SuccessProps){
        super(props);
        const { height, width} = Dimensions.get('window');
        this.state = {
            height,
            width
        };
    }

    updateDimensions = () => {
        const {height, width} = Dimensions.get('window');
        this.setState({height, width});
    }

    componentDidMount(): void {
        Dimensions.addEventListener('change', this.updateDimensions);

        const {navigation, route} = this.props;
        const {nextPage, nextPageParameters} = route.params || {};

        setTimeout(() => {
            if(nextPage){
                console.log("Navigating to next page", nextPage)
                navigation.navigate(nextPage, nextPageParameters);
            }
        }, 4000);
    }

    render() {
        const {height}= this.state;
        const {route} = this.props;
        const { title, description } = route.params || {};
        console.log("Route", route);
        console.log("Height changed", height);
        return (
            <View style={styles.container}>
                <SuccessView
                    image={SuccessMark}
                    // containerStyle={styles.container}
                    title={title}
                    description={description}
                />
            </View>
        )
    }
}

export default SuccessPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})