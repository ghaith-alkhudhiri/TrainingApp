import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../../Layout/ScreenWrapper';
import CustomTabs from '../../../Common/CustomTabs';
import TaskCard from './TaskCard';
import { storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

export interface Task {
    title: string;
    description: string;
    status: 'done' | 'pending';
    type: 'bodyMeasurement' | 'document' | 'progressPhoto';
    url?: string;
}

interface Props {
    navigation: any;
}

interface State {
    tasks: Task[],
    isLoading: boolean,
}


export class TasksPage extends Component<Props, State> {
    state: State = {
        tasks: [],
        isLoading: true,
    }
    componentDidMount(): void {
        this.simulateFetchTasks();
    }

    getFileUrl = async (fileName: string): Promise<string> => {
        try {
            const fileRef = ref(storage, fileName);
            const url = await getDownloadURL(fileRef);
            return url;
        } catch (error) {
            console.error("Error fetching file URL:", error);
            return "";
        }
    }

   

    simulateFetchTasks = async () => {
        const simulatedTasks: Task[] = [
            { title: 'Body Measurement', description: 'June Weight Update', status: 'done', type: 'bodyMeasurement'},
            { title: 'Workout', description: 'Morning Routine', status: 'pending', type: 'progressPhoto'},
            { title: 'Meal Prep', description: 'Lunch Prep', status: 'done', type: 'document', url: "Desktop.pdf" },
            { title: 'Grocery Shopping', description: 'Weekly groceries', status: 'pending', type: 'document', url: "Desktop.pdf" },
            { title: 'Project Review', description: 'Code review with team', status: 'done', type: 'bodyMeasurement'},
        ];

        try {
            const tasksWithUrls = await Promise.all(
                simulatedTasks.map(async (task) => {
                    if (task.type === 'document' && task.url) {
                        const url = await this.getFileUrl(task.url);
                        return { ...task, url };
                    }
                    return task;
                })
            );

            this.setState({ tasks: tasksWithUrls, isLoading: false });
            console.log("State", this.state);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            this.setState({ isLoading: false });
        }
    }

    handleTaskNavigation = (task: Task) => {
        switch(task.type){
            case 'bodyMeasurement':
                this.props.navigation.navigate('bodyMeasurement');
                break;
            case 'document':
                if(task.url){
                    this.props.navigation.navigate('Document', {
                        title: task.title,
                        description: task.description,
                        document: task.url
                    });
                }else {
                    console.warn('Document URL is not available');
                }
                break;
            case 'progressPhoto':
                this.props.navigation.navigate('ProgressPhoto');
        }
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
                            type={task.type}
                            status={task.status}
                            onPress={() => this.handleTaskNavigation(task)} 
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
                        type={task.type}
                        status={task.status}
                        onPress={this.handleTaskNavigation}
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
                        type={task.type}
                        description={task.description}
                        status={task.status}
                        onPress={this.handleTaskNavigation}
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