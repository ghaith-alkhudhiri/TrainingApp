import React, { Component } from 'react';
import { Image, Pressable } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import RightChevron from '../../Assets/Icons/RightChevron';

interface FamilyMemberListItemProps {
    name: string;
    relation: string;
    avatarUrl: string;
}

class FamilyMemberListItem extends Component<FamilyMemberListItemProps> {
    render() {
        const { name, relation, avatarUrl } = this.props;
        return (
            <Pressable 
                style={styles.container} 
                onPress={() => console.log("Family member card pressed")}
            >
                <View style={styles.contentContainer}>
                    <Image
                        source={{ uri: avatarUrl }}
                        style={styles.image}
                        />
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.relation}>{relation}</Text>
                    </View>
                </View>
                <View style={styles.chevronContainer}>
                    <RightChevron fill={"#0165FC"} />
                </View>
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    contentContainer: {
        gap: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "Inter",
        color: "#2E3538"
    },
    relation: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 17,
        color: '#0165FC',
    },
    chevronContainer: {
        padding: 16,
    },
    image: {
        width: 49,
        height: 49,
        resizeMode: 'cover',
        borderRadius: 24,
    }
});


export default FamilyMemberListItem;