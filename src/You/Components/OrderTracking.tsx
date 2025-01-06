import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Step {
  title: string;
  timestamp: string;
  icon: string;
  isCompleted: boolean;
}

interface Props {
  steps?: Step[];
}

interface State {
  steps: Step[];
}

class OrderTracking extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      steps: [
        { title: 'Order Placed', timestamp: '23 Aug 2023, 03:05 AM', icon: 'cart-outline', isCompleted: true },
        { title: 'In Progress', timestamp: '23 Aug 2023, 03:05 AM', icon: 'progress-clock', isCompleted: true },
        { title: 'Shipped', timestamp: 'Expected 02 Sep 2023', icon: 'truck-delivery-outline', isCompleted: false },
        { title: 'Delivered', timestamp: '23 Aug 2023, 03:05 AM', icon: 'package-variant', isCompleted: false },
      ],
    };
  }

  renderStep = ({ item, index }: { item: Step; index: number }) => {
    const isLastStep = index === this.state.steps.length - 1;
    return (
      <View style={styles.stepContainer}>
        {/* Line and Circle */}
        <View style={styles.lineContainer}>
          <View style={[styles.circle, item.isCompleted && styles.circleCompleted]} />
          {!isLastStep && <View style={[styles.line, item.isCompleted && styles.lineCompleted]} />}
        </View>

        {/* Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.iconContainer}>
            <Icon name={item.icon} size={24} color={item.isCompleted ? '#007AFF' : '#C4C4C4'} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, item.isCompleted && styles.titleCompleted]}>{item.title}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { steps } = this.props;
    return (
      <FlatList
        data={steps ? steps : this.state.steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderStep}
        contentContainerStyle={styles.container}
      />
    );
  }
}

export default OrderTracking;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lineContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#C4C4C4',
    marginBottom: 4,
  },
  circleCompleted: {
    backgroundColor: '#007AFF',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#C4C4C4',
  },
  lineCompleted: {
    backgroundColor: '#007AFF',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    flex: 1,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C4C4C4',
  },
  titleCompleted: {
    color: '#000',
  },
  timestamp: {
    fontSize: 14,
    color: '#808080',
  },
});
