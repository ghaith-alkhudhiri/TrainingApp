import React, { Component, createRef } from 'react';
import { View, Text, StyleSheet, Button, Pressable, FlatList } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomButton from '../Common/CustomButton';
import AddIcon from '../Assets/Icons/Add';
import DocumentIcon from '../Assets/Icons/DocumentIcon';
import DiscoverIcon from '../Assets/Icons/DiscoverIcon';
import ArtBoard from '../Assets/Icons/ArtBoard';
import CustomBottomSheet from '../Common/CustomBottomSheet';
import {Sheet} from 'react-modal-sheet';
import UserAdd from '../Assets/Icons/UserAdd';
import UserMinus from '../Assets/Icons/UserMinus';
import LineDividier from '../Common/LineDivider';
import FamilyMemberListItem from './Components/FamilyMemberListItem';

interface State {
    isBottomSheetVisible: boolean;
    familyMembers: {id: number; name: string; relation: string; avatarUrl: string;}[];
}

class MyFamily extends Component<any, State> {
    bottomSheetRef = createRef<any>();

    constructor(props: any){
        super(props);
        this.state = {
            isBottomSheetVisible: false,
            familyMembers: [],
        };
    }


    toggleBottomSheet = () => {
        console.log("Before Toggle:", this.state.isBottomSheetVisible);
        console.log("Bottom Sheet Toggled", this.state.isBottomSheetVisible);
        this.setState({ isBottomSheetVisible: !this.state.isBottomSheetVisible });
    };

    addNewFamilyMember = () => {
        this.setState((prevState) => ({
            familyMembers: [...prevState.familyMembers, {
                id: Date.now(), 
                name: `Member ${prevState.familyMembers.length + 1}`,
                relation: "Son",
                avatarUrl: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }]
        }));
        this.toggleBottomSheet();
    }

    closeBottomSheet = () => {
        if (this.bottomSheetRef.current) {
            this.bottomSheetRef.current.closeAnimation();
        }
    };

    removeFamilyMember = () => {
        this.setState((prevState) => ({
            familyMembers: prevState.familyMembers.slice(0, -1),
        }))
        console.log("Remove family member");
    }

    render() {
        const {isBottomSheetVisible, familyMembers} = this.state;


        
        const bottomSheetOptions = [
            {
                icon: <UserAdd />,
                title: "Add new family member",
                onPress: this.addNewFamilyMember
            },
            {
                icon: <UserMinus />,
                title: "Delete family member",
                onPress: this.removeFamilyMember
            }
        ]
        return (
            <ScreenWrapper 
                title="My Family" 
                rightElement={
                <CustomButton 
                    label="Add Family Member" styleType='rounded' 
                    onPress={() => this.toggleBottomSheet()} 
                    icon={<AddIcon />}
                />}
                fullScreenChildren
                scrollViewContainerStyle={{flex: 1}}
                childrenContainerStyle={{flex: 1}}
                style={styles.container}>
                    {familyMembers.length === 0 ? (
                        <View style={styles.emptyFamilyContainer}>
                            <ArtBoard />
                            <View style={styles.emptyFamilyContentContainer}>
                                <Text style={styles.emptyFamilyTitle}>You Don't Have Any Family Member Yet</Text>
                                <Text style={styles.addFamilyText}>Add and manage all of your family members</Text>
                            </View>
                        </View>

                    ): (
                        <FlatList
                            data={familyMembers}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <FamilyMemberListItem
                                    name={item.name}
                                    relation={item.relation}
                                    avatarUrl={item.avatarUrl}
                                />
                            )}
                            // ItemSeparatorComponent={() => <LineDivider />}
                        />
                    )}
                <Sheet 
                    isOpen={isBottomSheetVisible} 
                    rootId="root"
                    onClose={() => this.toggleBottomSheet()}
                    detent='content-height'
                    // snapPoints={[600, 400, 200, 0]}
                    initialSnap={0}
                    onSnap={(snapIndex) =>{
                        console.log('> Current snap point index: ', snapIndex);
                    }}
                    >
                    <Sheet.Container style={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                        <Sheet.Header />
                        <Sheet.Content>
                            <View style={styles.bottomSheetContainer}>
                                {bottomSheetOptions.map((option, index) => (
                                    <Pressable key={index} onPress={option.onPress}>
                                        <View style={styles.bottomSheetListItem} key={index}>
                                            {option.icon}
                                            <Text style={styles.bottomSheetTitle}>{option.title}</Text>
                                        </View>

                                        <LineDividier />
                                    </Pressable>
                                ))}
                            </View>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop onTap={this.toggleBottomSheet}/>
                </Sheet>
                {/* <CustomBottomSheet
                    ref={this.bottomSheetRef}
                    visible={isBottomSheetVisible}
                    onClose={this.toggleBottomSheet}
                    >
                        <View>
                            <Text>BottomSheet Opened</Text>
                        </View>
                    </CustomBottomSheet> */}
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    emptyFamilyContainer: {
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    emptyFamilyContentContainer: {
        gap: 8,
    },
    emptyFamilyTitle: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
    },
    addFamilyText: {
        color: "#000",
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 17,
        fontFamily: "Inter"
    },
    bottomSheetContainer: {
        paddingHorizontal: 25,
        paddingBottom: 22,
    },
    bottomSheetListItem: {
        flexDirection: 'row',
        gap: 23,
        paddingVertical: 2,
    },
    bottomSheetTitle: {
        color: "#4B4949",
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    }
});

export default MyFamily;