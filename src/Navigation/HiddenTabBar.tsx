import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HiddenTabBar = (WrappedComponent: React.ComponentType<any>) => {
    const Wrapper = (props: any) => {
        const navigation = useNavigation();

        useEffect(() => {
            const hideTabBar = () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
            const showTabBar = () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });

            hideTabBar();

            const unsubscribeFocus = navigation.addListener('focus', hideTabBar);
            const unsubscribeBlur = navigation.addListener('blur', showTabBar);

            return () => {
                unsubscribeFocus();
                unsubscribeBlur();
            };
        }, [navigation]);

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default HiddenTabBar;
