import { ListRenderItemInfo, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../../../Constants/theme'
import CheckMarkIcon from '../../../Assets/Icons/CheckMarkIcon'
import CustomButton from '../../../Common/CustomButton'
import { NavProps } from '../../../types'
import { FlatList } from 'react-native'

interface PlanProps {
    title: string;
    features: string[];
    price: number;
    userState: 'noMembership' | 'withMembership' | 'visitor';
    currentPlan?: string;
    tag?: string;
}

type Props = NavProps & PlanProps;

export class PlanCard extends Component<Props> {
    renderFeatures = ({ item }: { item: string }) => (
        <View style={{
            gap: 14,
            flexDirection: 'row',
        }}>
            <CheckMarkIcon color={theme.primary} />
            <Text style={{
                color: '#000',
                fontFamily: theme.font,
                fontSize: 15,
                fontWeight: 600,
                lineHeight: 18.75,
            }}>{item}</Text>
        </View>
        )
    render() {
      const {title, features, price, userState, currentPlan, tag} = this.props;
    return (
      <View style={{
        width: '100%',
        paddingVertical: 26,
        paddingHorizontal: 22,
        gap: 20,
        alignItems: 'center',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#EEEEEF',
        backgroundColor: '#FFF',
        shadowColor: 'rgba(9, 97, 245, 1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10.4,
        elevation: 4,
        }}>
            {tag && <Text style={{
                color: '#FFF',
                fontFamily: theme.font,
                fontSize: 10,
                fontWeight: 500,
                backgroundColor: theme.primary,
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 4,
                alignSelf: 'flex-end',
                }}>{tag}</Text>
            }
            <View style={{
                gap: 16,

            }}>
                <Text style={{
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: theme.font,
                    fontSize: 14,
                    fontWeight: 700,
                }}>{title}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Text style={{
                        color: theme.primary,
                        fontFamily: theme.font,
                        fontSize: 36,
                        fontWeight: 700,
                    }}>{price} SR</Text>
                    <Text style={{
                        color: theme.primary,
                        fontFamily: theme.font,
                        fontSize: 15,
                        fontWeight: 400,
                    }}> / month</Text>
                </View>
            </View>
            <View style={{
                height: 1,
                width: '100%',
                backgroundColor: '#F2F2F2',
            }} />
            {/* <View style={{
                gap: 6,
            }}> */}
                <FlatList
                data={features}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderFeatures}
                contentContainerStyle={{gap: 6,}}
                />
            {/* </View> */}
            <View style={{
                height: 1,
                width: '100%',
                backgroundColor: '#F2F2F2',
            }} />
            {userState === 'withMembership' ? currentPlan === title ?
            <Text style={{
                color: '#898989',
                fontFamily: theme.font,
                fontSize: 15,
                fontWeight: 600,
                lineHeight: 18.75,
            }}>Your current plan</Text>
            :
            <CustomButton label='Upgrade Plan' onPress={()=>{}} styleType='secondary' buttonStyle={{borderRadius: 7, paddingVertical: 11, width: '100%',}} 
            textStyle={{
                textAlign: 'center',
                fontFamily: theme.font,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: -0.3,
            }} />
            :
            <CustomButton label='Select Plan' onPress={()=>{}} styleType='secondary' buttonStyle={{borderRadius: 7, paddingVertical: 11, width: '100%',}} 
            textStyle={{
                textAlign: 'center',
                fontFamily: theme.font,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: -0.3,
            }} />
            }
      </View>
    )
  }
}

export default PlanCard