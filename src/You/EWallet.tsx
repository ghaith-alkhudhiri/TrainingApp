import React, { Component } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import LineDividier from '../Common/LineDivider';
import CardReceive from '../Assets/Icons/CardReceive';
import DollarCircle from '../Assets/Icons/DollarCircle';
import MoreIcon from '../Assets/Icons/More';
import ListIcon from '../Assets/Icons/List';
import SearchIcon3 from '../Assets/Icons/SearchIcon3';
import FilterIcon from '../Assets/Icons/Filter';
import WalletNotFound from '../Assets/Icons/WalletNotFound';
import CustomizedBottomSheet from '../Common/CustomizedBottomSheet';
import UserAdd from '../Assets/Icons/UserAdd';
import UserMinus from '../Assets/Icons/UserMinus';

interface EWalletProps {
    // Define your props here
    navigation: any;
}

interface EWalletState {
    isBottomSheetVisible: boolean;
}

class EWallet extends Component<EWalletProps, EWalletState> {
    constructor(props: EWalletProps) {
        super(props);
        this.state = {
            isBottomSheetVisible: false,
        };
    }

    toggleBottomSheet = () => {
        this.setState((prevState) => ({
            isBottomSheetVisible: !prevState.isBottomSheetVisible
        }))
    }

    renderTransactionItem = ({item}: { item: any}) => (
        <View style={styles.transactionCard}>
            <View style={styles.typeAmountContainer}>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionAmount}>BHD {item.amount.toFixed(3)}</Text>
            </View>
            <View>
                <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
        </View>
    )

    render() {
        const { navigation } = this.props;
        const { isBottomSheetVisible } = this.state;

        const eWalletCards = [
            {
                icon: <CardReceive />,
                title: "Topup",
                onLongPress: () => {
                    console.log("Topup long press")
                    this.toggleBottomSheet();
                },
                onPress: () => {
                    navigation.navigate("Topup");
                }
            },
            {
                icon: <DollarCircle />,
                title: "Pay",
                onLongPress: () => {
                    console.log("Pay Long press")
                },
                onPress: () => {

                }
            },
            {
                icon: <MoreIcon />,
                title: "More",
                onLongPress: () => {
                    console.log("More long press");
                },
                onPress: () => {
                    console.log("More on press")
                }
            }
        ];

        const transactions = [
            {
                type: "Top up",
                date: "25-10-2024",
                amount: 10,
            },
            {
                type: 'Withdraw',
                date: "25-10-2024",
                amount: 1,
            },
            {
                type: 'Withdraw',
                date: "25-10-2024",
                amount: 1,
            },
            {
                type: 'Withdraw',
                date: "25-10-2024",
                amount: 1,
            },
            {
                type: 'Withdraw',
                date: "25-10-2024",
                amount: 1,
            },
        ];

        const bottomSheetOptions = [
            {
                image: require("./../Assets/Images/applePay.png"),
                imageDimensions: {width: 34, height: 23},
                title: 'Apple pay',
                onPress: () => {},
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/benefit.png"),
                imageDimensions: {width: 35, height: 33},
                title: 'BenefitPay',
                onPress: () => {},
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/stcPay2.png"),
                imageDimensions: {width: 34, height: 33},
                title: 'STC pay',
                onPress: () => {},
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/visa.png"),
                imageDimensions: { width: 29, height: 20},
                title: 'Bank Account',
                onPress: () => {},
            },
        ];


        return (
            <ScreenWrapper title="E-wallet" fullScreenChildren scrollViewContainerStyle={{flex: 1}}
            childrenContainerStyle={{flex: 1}}>
                <View style={{flex: 1, gap: 22,}}>
                    <LinearGradient
                        colors={['#246BFD', '#1247B5']}
                        start={{ x: 0.5, y: 0}}
                        end={{ x: 0.5, y: 1}}
                        style={styles.gradient}
                    >
                        <View>
                            <Text style={styles.userNameText}>User full name</Text>
                            <Text style={styles.userIdText}>201283474</Text>
                        </View>
                        <Text style={styles.amountAvailable}>
                            BD 0.000
                        </Text>
                        <LineDividier containerStyle={{marginVertical: 0}} lineStyle={{backgroundColor: '#5F93FF'}} />
                        <View style={styles.eWalletCardsContainer}>
                            {eWalletCards.map((eWalletCard, index) => (
                                <Pressable 
                                    key={index}
                                    style={styles.eWalletCard} 
                                    onLongPress={eWalletCard.onLongPress}
                                    onPress={eWalletCard.onPress}
                                    delayLongPress={500}
                                    >
                                    {eWalletCard.icon}
                                    <Text style={styles.titleText}>{eWalletCard.title}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </LinearGradient>
                    <View style={styles.transactionsContainer}>
                        <View style={styles.controlsContainer}>
                            <View style={styles.transactionsControlContainer}>
                                <ListIcon />
                                <Text>Transactions</Text>
                            </View>
                            <View style={styles.searchAndFilterContainer}>
                                <View style={styles.controlContainer}>
                                    <SearchIcon3 />
                                    <Text>Search</Text>
                                </View>
                                <View style={styles.controlContainer}>
                                    <FilterIcon />
                                    <Text>Filter</Text>
                                </View>
                            </View>
                        </View>
                        {transactions && transactions.length === 0 ? (
                            <View style={styles.emptyTransactionsContainer}>
                                <WalletNotFound />
                                <View style={styles.emptyTextContainer}>
                                    <Text style={styles.emptyText}>Empty</Text>
                                    <Text style={styles.emptyDescriptionText}>You Do not have any <Text style={{fontWeight: 700}}>Transactions</Text> yet</Text>
                                </View>
                            </View>
                        ) : (
                            <FlatList
                                data={transactions}
                                renderItem={this.renderTransactionItem}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={styles.transactionList}
                                showsVerticalScrollIndicator={false}
                            />

                        )}
                        <View>

                        </View>
                    </View>
                </View>
                <CustomizedBottomSheet
                    isVisible={isBottomSheetVisible}
                    options={bottomSheetOptions}
                    onClose={this.toggleBottomSheet}
                />
            </ScreenWrapper>
        );
    }
}

export default EWallet;

const styles = StyleSheet.create({
    container: {

    },
    userInfoContainer: {

    },
    gradient: {
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 22,
        gap: 13,
    },
    userNameText: {
        color: "#F4F6F9",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    },
    userIdText: {
        color: "#F4F6F9",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 17,
    },
    amountAvailable: {
        color: "#FFF",
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 25,
    },
    eWalletCardsContainer: {
        flexDirection: 'row',
        gap: 13,
        flexWrap: 'wrap'
        // justifyContent: 'space-between'
    },
    eWalletCard: {
        borderRadius: 7,
        backgroundColor: 'rgba(228,228,228,0.29)',
        width: 86,
        height: 66,
        gap: 5,
        justifyContent: 'center',
        alignItems: "center"
    },
    titleText: {
        color: "#FFF",
        textAlign: 'center',
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 17.5,
    },
    transactionsContainer: {
        // flex: 1,
        // backgroundColor: 'red',
        flex: 1,
    },
    transactionsControlContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        gap: 6,
    },
    controlContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    emptyText: {
        color: "#000",
        textAlign: 'center',
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 600
    },
    emptyDescriptionText: {
        color: "#848484",
        textAlign: 'center',
        fontFamily: "Inter",
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 17,
    },
    emptyTransactionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        // backgroundColor: 'blue',
        // flex: 1,

    },
    emptyTextContainer: {
        gap: 8,
    },
    transactionCard: {
        paddingVertical: 16,
        paddingHorizontal: 23,
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        gap: 6,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    transactionList: {
        paddingTop: 10,
        gap: 10,

    },
    transactionType: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 16.25,
    },
    transactionAmount: {
        color: "#006C35",
        textAlign: "right",
        fontFamily: "Inter",
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 16.25,
    },
    transactionDate: {
        color: "#64748B",
        fontFamily: "Inter",
        fontWeight: 500,
        lineHeight: 16.25,
    },
    typeAmountContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});