import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const withNavProps = (WrappedComponent: any) => (props: any) => {
    const navigation = useNavigation();
    const route = useRoute();

    return <WrappedComponent {...props} navigation={navigation} route={route} />;
};

export default withNavProps;
