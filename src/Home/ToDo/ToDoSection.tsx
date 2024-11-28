import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

interface Workout {
  id: string;
  title: string;
  tags: string[];
  progress: number;
  total: number;
  image: string;
  instructor: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  completed: boolean;
}

interface State {
  workouts: Workout[];
  tasks: Task[];
  loading: boolean;
}

class ToDoSection extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      workouts: [],
      tasks: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate a database/API call
    setTimeout(() => {
      const sampleWorkouts: Workout[] = [
        {
          id: '1',
          title: 'Upper Workout',
          tags: ['Hardcore', 'Yoga'],
          progress: 5,
          total: 20,
          image: 'https://via.placeholder.com/150',
          instructor: 'Noor M. Ali',
        },
        {
          id: '2',
          title: 'Lower Workout',
          tags: ['Hardcore', 'Yoga'],
          progress: 5,
          total: 20,
          image: 'https://via.placeholder.com/150',
          instructor: 'Noor M. Ali',
        },
      ];

      const sampleTasks: Task[] = [
        {
          id: '1',
          title: 'Body Measurement',
          description: 'June Weight Update',
          time: '10:00 AM',
          date: '13th June, 2024',
          completed: true,
        },
        {
          id: '2',
          title: 'Tips for breath work',
          description: 'Useful Document',
          time: '10:00 AM',
          date: '13th June, 2024',
          completed: false,
        },
        {
          id: '3',
          title: 'Progress Photo',
          description: 'June Progress Photo',
          time: '10:00 AM',
          date: '13th June, 2024',
          completed: false,
        },
      ];

      this.setState({ workouts: sampleWorkouts, tasks: sampleTasks, loading: false });
    }, 2000);
  }

  // Render Workouts
  renderWorkoutItem = ({ item }: { item: Workout }) => (
    <View style={styles.workoutCard}>
      <Image source={{ uri: item.image }} style={styles.workoutImage} />
      <View style={styles.workoutDetails}>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        <Text style={styles.workoutTitle}>{item.title}</Text>
        <Text style={styles.instructor}>{item.instructor}</Text>
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              { width: `${(item.progress / item.total) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {item.progress}/{item.total}
        </Text>
      </View>
    </View>
  );

  // Render Tasks
  renderTaskItem = ({ item }: { item: Task }) => (
    <View style={[styles.taskCard, item.completed && styles.taskCompleted]}>
      <View>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
        <Text style={styles.taskTimeDate}>
          {item.time} | {item.date}
        </Text>
      </View>
      {item.completed && <Text style={styles.checkmark}>✓</Text>}
    </View>
  );

  render() {
    const { workouts, tasks, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/* Workouts Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Workouts</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={workouts}
          renderItem={this.renderWorkoutItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Tasks Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={this.renderTaskItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#007bff',
  },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workoutImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  workoutDetails: {
    flex: 1,
    marginLeft: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingHorizontal: 4,
    marginRight: 4,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  instructor: {
    fontSize: 12,
    color: '#666',
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginVertical: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#007bff',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskCompleted: {
    opacity: 0.6,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
  },
  taskTimeDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  checkmark: {
    fontSize: 24,
    color: '#007bff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
});

export default ToDoSection;
