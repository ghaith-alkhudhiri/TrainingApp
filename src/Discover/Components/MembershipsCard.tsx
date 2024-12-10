import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import SectionHeader from '../../Home/SectionHeader'
import { NavProps } from '../../types';
import theme from '../../Constants/theme';
import ArrowRight from '../../Assets/Icons/ArrowRight';

interface Membership {
    id?: string;
    title?: string;
    description?: string;
    price?: number;
}

interface State {
    memberships: Membership[];
    loading: boolean;
}

type Props = NavProps & Membership;

export class MembershipsCard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
          memberships: [],
          loading: true,
        };
      }
    
      componentDidMount() {
        // Simulate a database/API call
        setTimeout(() => {
          const sampleMemberships: Membership[] = [
            {
              id: '1',
              title: 'Basic Membership',
              description: '1 Month membership with unlimited classes.',
              price: 1200,
            },
            {
                id: '2',
                title: 'Premium Membership',
                description: '1 Month membership with unlimited classes.',
                price: 2000,
              },
          ];
    
          this.setState({ memberships: sampleMemberships, loading: false });
        });//add timer if you want
      }
    
      // Render Memberships
      renderMembershipsItem = ({ item }: { item: Membership }) => (
        <View style={styles.container}>
            <View style={styles.rectangle} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <Text style={styles.price}>{item.price} RS</Text>
            </View>
            <View style={styles.rightSection}>
                <View style={styles.arrowContainer}>
                    <ArrowRight/>
                </View>
            </View>
        </View>
      );

  render() {

    const { memberships, loading } = this.state;
    const {navigation, route} = this.props;
    
    return (
      <View>
        <SectionHeader title='Memberships' onPress={()=>{navigation.navigate('Memberships')}}/>
        <View>
            <FlatList
            data={memberships}
            renderItem={this.renderMembershipsItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
      </View>
    )
  }
}

export default MembershipsCard

const styles = StyleSheet.create({
    separator: {
        height: 13,
        backgroundColor: 'transparent',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 83,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#EEEEEF',
        backgroundColor: '#FDFDFD',
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: { width: -2, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 16.9,
        elevation: 3,
    },
    rectangle: {
        width: 15,
        backgroundColor: theme.primary,
        height: '100%',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        // position: 'absolute',
        // left: 0,
    },
    content: {
        flex: 1,
        marginLeft: 30,
        gap: 4,
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    description: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 10,
        fontWeight: 300,
        lineHeight: 21,
    },
    price: {
        color: theme.primary,
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 17.5,
    },
    rightSection: {
        justifyContent: 'center',
        marginRight: 27,
    },
    arrowContainer: {
        width: 'auto',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 50,
        backgroundColor: theme.primary,
    },    
})