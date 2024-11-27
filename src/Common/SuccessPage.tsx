import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import SuccessView from './SuccessView';
import SuccessMark from '../Assets/Icons/SuccessMark';

interface Props {
    navigation: any;
    route: any;
}

interface State {
    height: number;
    width: number;
}

class SuccessPage extends Component<Props, State> {
    constructor(props: Props){
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
        const {nextPage} = route.params || {};

        setTimeout(() => {
            if(nextPage){
                navigation.navigate(nextPage);
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
        <View style={[styles.container]}>
            <SuccessView
                image={SuccessMark}
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
    }
})