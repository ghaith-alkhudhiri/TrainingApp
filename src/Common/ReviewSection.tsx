import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import StarIcon from '../Assets/Icons/StartIcon';

class ReviewSection extends Component {
  state = {
    selectedFilter: 'All',
    reviews: [
      {
        id: '1',
        name: 'Noor M. Ali',
        rating: 4.5,
        time: '2 Weeks ago',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.',
      },
      {
        id: '2',
        name: 'Noor M. Ali',
        rating: 5,
        time: '1 Month ago',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.',
      },
    ],
  };

  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  renderReviewItem = ({ item }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewerName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewTime}>{item.time}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
    </View>
  );

  render() {
    const { selectedFilter, reviews } = this.state;

    return (
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search in reviews"
          placeholderTextColor="#C4C4C4"
        />

        {/* Filters */}
        <View style={styles.filtersContainer}>
          {['Filter', 'All', 'Latest', 'Oldest'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.selectedFilterButton,
              ]}
              onPress={() => this.handleFilterSelect(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.selectedFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Reviews List */}
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id}
          renderItem={this.renderReviewItem}
          contentContainerStyle={styles.reviewList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F7F7F7',
    marginBottom: 16,
    fontSize: 14,
    color: '#000',
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    marginRight: 8,
  },
  selectedFilterButton: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#000',
  },
  selectedFilterText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  reviewList: {
    paddingBottom: 16,
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingBottom: 16,
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 4,
  },
  starIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  reviewTime: {
    fontSize: 12,
    color: '#797979',
    marginTop: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
    lineHeight: 20,
  },
});

export default ReviewSection;
