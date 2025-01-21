import { FlatList, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../../Layout/ScreenWrapper'
import CustomTabs from '../../../Common/CustomTabs';
import theme from '../../../Constants/theme';
import PersonIcon from '../../../Assets/Icons/PersonIcon';
import ScreenHeader from '../../../Layout/ScreenHeader';
import { NavProps } from '../../../types';

interface Workout {
    id: string;
    title: string;
    tags: string[];
    progress: number;
    total: number;
    image: any;
    instructor: string;
}

    interface State {
    workouts: Workout[];
    loading: boolean;
}

type Props = NavProps & Workout;

export class Workouts extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
          workouts: [],
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
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
            {
              id: '2',
              title: 'Lower Workout',
              tags: ['Hardcore', 'Yoga'],
              progress: 20,
              total: 20,
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
            {
              id: '3',
              title: 'Upper Workout',
              tags: ['Hardcore', 'Yoga'],
              progress: 20,
              total: 20,
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
            {
              id: '4',
              title: 'Lower Workout',
              tags: ['Hardcore', 'Yoga'],
              progress: 0,
              total: 20,
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
            {
              id: '5',
              title: 'Full-Body Workout',
              tags: ['Hardcore', 'Yoga'],
              progress: 20,
              total: 20,
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
            {
              id: '6',
              title: 'Leg Workout',
              tags: ['Hardcore', 'Yoga'],
              progress: 20,
              total: 20,
              image: require('../../../Assets/Images/img.png'),
              instructor: 'Noor M. Ali',
            },
          ];
    
          this.setState({ workouts: sampleWorkouts, loading: false });
        });//add timer if you want
      }
    
      // Render Workouts
      renderWorkoutItem = ({ item }: { item: Workout }) => (
        <Pressable onPress={()=>{this.props.navigation.navigate('WorkoutsOverview')}} style={styles.workoutCard}>
          <Image source={item.image} resizeMode='cover' style={styles.workoutImage} />
          <View style={styles.workoutDetails}>
            <View style={styles.rowContainer}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <View style={styles.rowContainer}>
              <PersonIcon width={13} height={13} color={theme.primary} />
              <Text style={styles.instructor}>{item.instructor}</Text>
            </View>
            <View style={styles.workoutBottomContainer}>
              <View style={styles.progressContainer}>
                <View
                  style={[
                    styles.progressBar,
                    { width: `${(item.progress / item.total) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{item.progress}/{item.total}</Text>
            </View>
          </View>
        </Pressable>
      );

  render() {
    const { workouts, loading } = this.state;

    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        );
    }

    // Separate ongoing and completed workouts
    const ongoingWorkouts = workouts.filter((workout) => workout.progress < workout.total);
    const completedWorkouts = workouts.filter((workout) => workout.progress === workout.total);

    const tabs = [
        {
          key: 'ongoing',
          label: 'Ongoing',
          content: (
            <View style={{gap: 22, }}>
              <FlatList
                data={ongoingWorkouts}
                renderItem={this.renderWorkoutItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
          )
        },
        {
          key: 'completed',
          label: 'Completed',
          content: (
            <View style={{gap: 22, }}>
                <FlatList
                data={completedWorkouts}
                renderItem={this.renderWorkoutItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
          )
        }
      ];
    return (
      <ScreenWrapper scrollContainerStyle={{padding: 0}} childrenContainerStyle={{padding: 0}} title='My Workouts'>
        {/* <CustomTabs styleType='small' tabs={[{key:'ongoing', label:'ongoing', content: (null)}, {key:'completed', label:'completed', content: (null)}]} />
        <CustomTabs styleType='large' tabs={[{key:'ongoing', label:'ongoing', content: (null)}, {key:'completed', label:'completed', content: (null)}]} /> */}
        <CustomTabs styleType='underline' tabs={tabs} />
      </ScreenWrapper>
    )
  }
}

export default Workouts

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      gap: 13,
    },
    separator: {
      height: 13,
      backgroundColor: 'transparent',
    },
    workoutCard: {
      flexDirection: 'row',
      backgroundColor: '#FDFDFD',
      borderRadius: 7,
      paddingVertical: 10,
      paddingLeft: 11,
      paddingRight: 19,
      borderWidth: 1,
      borderColor: '#EEEEEF',
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: { width: -2, height: 1 },
      shadowOpacity: 0.03,
      shadowRadius: 16.9,
      elevation: 3,
      gap: 31,
    },
    workoutImage: {
      width: 83,
      height: 97,
      borderRadius: 6,
    },
    workoutDetails: {
      justifyContent: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
    },
    tag: {
      fontSize: 10,
      fontWeight: 400,
      fontFamily: theme.font,
      lineHeight: 16,
      color: theme.primary,
      backgroundColor: '#F4F6F9',
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginRight: 12,
    },
    workoutTitle: {
      marginTop: 5,
      marginBottom: 2,
      color: '#000',
      fontFamily: theme.font,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: -0.3,
    },
    instructor: {
      marginLeft: 4,
      color: '#000',
      fontFamily: theme.font,
      fontSize: 10,
      fontWeight: 300,
      alignSelf: 'center',
    },
    workoutBottomContainer: {
      alignItems: 'center',
      gap: 46,
      marginTop: 14,
      flexDirection: 'row',
    },
    progressContainer: {
      height: 6,
      width: 96,
      backgroundColor: '#D9D9D9',
      borderRadius: 8,
    },
    progressBar: {
      height: 6,
      backgroundColor: '#2771FF',
      borderRadius: 8,
    },
    progressText: {
      color: '#797979',
      textAlign: 'center',
      fontFamily: theme.font,
      fontSize: 12,
      fontWeight: 400,
      
    },
    taskCard: {
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 28,
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 11,
      borderWidth: 1,
      borderColor: '#EEEEEF',
      backgroundColor: '#FFF',
      shadowColor: 'rgba(0, 39, 138, 0.10)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 7.3,
      elevation: 5,
      overflow: 'visible',
    },
    taskTopContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    taskTitle: {
      color: '#000',
      fontFamily: theme.font,
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 18.75,
    },
    taskDescription: {
      color: '#A0A0A0',
      fontFamily: theme.font,
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 13.75,
    },
    line: {
      backgroundColor: '#ECEAEA',
      width: '100%',
      height: 1,
    },
    taskBottomContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    taskTimeDateContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    taskTimeDate: {
      color: '#9E9E9E',
      fontFamily: theme.font,
      fontSize: 11,
      fontWeight: 500,
      lineHeight: 13.75,
    },
    checkmark: {
      backgroundColor: theme.primary,
      borderRadius: 27,
      width: 24,
      height: 24,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    uncheck: {
      borderRadius: 27,
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: '#E3E3E3',
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