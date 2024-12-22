import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import DownArrow from '../Assets/Icons/downArrow'
import theme from '../Constants/theme';

interface Props {
    filters: string[],
}

interface State {
    selectedFilters: boolean[];
}

export class FilterSet extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedFilters: new Array(props.filters.length).fill(false),
        }
    }

    toggle = (index: number) => {
        this.setState(prevState => {
            const newSelectedFilters = [...prevState.selectedFilters];
            newSelectedFilters[index] = !newSelectedFilters[index];
            return { selectedFilters: newSelectedFilters };
        });
    }
    
  render() {
    return (
        <View style={{
            flexDirection: 'row',
            gap: 9,
            width: '100%',
            flex: 1,
            }}>
            {this.props.filters.map((filter, index) => (
                <Pressable onPress={() => this.toggle(index)} key={index} style={{
                    flexDirection: 'row',
                    gap: 10,
                    paddingVertical: 6,
                    paddingHorizontal: 15,
                    borderRadius: 7,
                    backgroundColor: this.state.selectedFilters[index] ? theme.primary : '#F4F6F9',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    height: 30,
                    }}>
                    <Text style={{
                        color: this.state.selectedFilters[index] ? '#EAF2FF' : theme.primary,
                        fontFamily: 'Inter',
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 17,
                    }}>{filter}</Text>
                    <DownArrow color={this.state.selectedFilters[index] ? '#EAF2FF' : theme.primary} />
                </Pressable>
            ))}
        </View>
    )
  }
}

export default FilterSet