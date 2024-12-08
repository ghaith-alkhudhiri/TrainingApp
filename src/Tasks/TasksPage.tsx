import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomTabs from '../Common/CustomTabs';
import TaskCard from './TaskCard';


interface Task {
    title: string;
    description: string;
    status: 'done' | 'pending';
}

interface State {
    tasks: Task[],
    isLoading: boolean,
}


export class TasksPage extends Component<any, State> {
    state: State = {
        tasks: [],
        isLoading: true,
    }
    componentDidMount(): void {
        this.simulateFetchTasks();
    }

    simulateFetchTasks = async () => {
        const simulatedTasks: Task[] = [
            { title: 'Body Measurement', description: 'June Weight Update', status: 'done'},
            { title: 'Workout', description: 'Morning Routine', status: 'pending'},
            { title: 'Meal Prep', description: 'Lunch Prep', status: 'done'},
            { title: 'Grocery Shopping', description: 'Weekly groceries', status: 'pending'},
            { title: 'Project Review', description: 'Code review with team', status: 'done'},
        ];

        setTimeout(() => {
            this.setState({tasks: simulatedTasks, isLoading: false})
        }, 1000);
    }
  render() {
    const { tasks, isLoading} = this.state;

    const allTasks = tasks;
    const openTasks = tasks.filter(task => task.status === 'pending');
    const closedTasks = tasks.filter(task => task.status === 'done');

    const tabs = [
        {
            key: 'tabAll',
            label: "All",
            content: (
                <View style={styles.tasksContainer}>
                    {allTasks.map((task, index) => (
                        <TaskCard 
                            key={index} 
                            title={task.title} 
                            description={task.description} 
                            status={task.status} 
                        />

                    ))}
                
                </View>
            )
        },
        {
            key: 'tabOpen',
            label: 'Open',
            content: (
                <View style={styles.tasksContainer}>
                    {openTasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                    />
                    ))}
                </View>
            )
        },
        {
            key: 'tabClosed',
            label: "Closed",
            content: (
                <View style={styles.tasksContainer}>
                    {closedTasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                    />
                    ))}
                </View>
            )
        }
    ];

    if(isLoading){
        return (
            <ScreenWrapper title="Tasks">
                <Text>Loading tasks...</Text>
            </ScreenWrapper>
        )
    }

    return (
        <ScreenWrapper title="Tasks">
            <CustomTabs
                tabs={tabs}
                styleType='small'
            />

        </ScreenWrapper>
    )
  }
}

export default TasksPage;

const styles = StyleSheet.create({
   tasksContainer: {
    flexDirection: 'column',
    gap: 10,
   }
});