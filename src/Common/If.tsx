import { Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'

interface IfProps {
    condition: boolean;
    children: ReactNode;
}

export class If extends Component<IfProps> {
  render() {
    const { condition, children} = this.props;
    if(!condition){
        return null;
    }

    return (
      <View>
        {children}
      </View>
    )
  }
}

export default If