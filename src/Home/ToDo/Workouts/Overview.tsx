import { Image, ImageBackground, Text, View } from 'react-native'
import React, { Component } from 'react'
import InfoCard from '../Components/InfoCard'
import PersonIcon from '../../../Assets/Icons/PersonIcon'
import theme from '../../../Constants/theme'
import ScreenHeader from '../../../Layout/ScreenHeader'
import { NavProps } from '../../../types'

export class Overview extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    return (
      <View>
        <Text>Overview</Text>
        <ImageBackground 
        resizeMode='cover'
        style={{
            width: '100%',
            height: 211,
            backgroundColor: require('../../../Assets/Images/img.png'),
        }}>
            <ScreenHeader backEnabled navigation={navigation} route={route} />
        </ImageBackground>
        {/* <Image style={{width: '100%', height: 211,}} source={require('../../../Assets/Images/img.png')} /> */}
        <View style={{gap: 18,}}>
            <View style={{alignItems: 'flex-start', gap: 8,}}>
                <Text style={{
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: theme.font,
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: -0.3,
                    textTransform: 'uppercase',
                }}>About upper workout</Text>
                <View style={{height: 1, width: '100%', backgroundColor: '#E1E1E1'}} />
                <Text style={{
                    color: '#797979',
                    fontFamily: theme.font,
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: 18,
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed.</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 17, alignSelf: 'stretch',}}>
                <InfoCard
                    icon={<PersonIcon />}
                    number={10}
                    unit="Workouts"
                />
                <InfoCard
                    icon={<PersonIcon />}
                    number={30}
                    unit="Minutes"
                />
                <InfoCard
                    icon={<PersonIcon />}
                    number={2000}
                    unit="Workouts"
                />
            </View>
            <View>
                <Text style={{
                    textTransform: 'capitalize',
                    color: theme.primary,
                    fontFamily: theme.font,
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 17.5,
                    marginBottom: 13,
                    }}>Arms Workouts</Text>
                <View style={{gap: 14,}}>
                    <View style={{gap: 14,}}>
                        <Image source={require('../../../Assets/Images/img.png')} />
                        <View>
                            <Text style={{
                                color: '#000',
                                fontFamily: theme.font,
                                fontSize: 14,
                                fontWeight: 600,
                                lineHeight: 17.5,
                                textTransform: 'uppercase',
                            }}>Workout name</Text>
                            <Text style={{
                                color: '#000',
                                fontFamily: theme.font,
                                fontSize: 12,
                                fontWeight: 300,
                                lineHeight: 17,
                            }}>3 set x 12 reps</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

      </View>
    )
  }
}

export default Overview