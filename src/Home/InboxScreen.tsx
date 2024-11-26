// import React, { Component } from 'react';
// import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
// // import SuccessView from '../components/common/SuccessView';
// // import MessageIcon from '../assets/icons/MessageIcon';
// import NotificationCard from './NotificationCard';
// // import CustomButton from '../components/common/CustomButton';
// import theme from '../Constants/theme';

// interface Chat {
//     id: string;
//     name: string;
//     message: string;
//     timestamp: Date;
// }

// interface Section {
//     title: string;
//     data: Chat[];
// }

// export class InboxScreen extends Component {
//     render() {
//         const crew: Chat[] = [
//             { id: '1', name: 'Noor M. Crew', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.', timestamp: new Date('2024-07-15T14:30:00Z') },
//             { id: '2', name: 'Lama Salama Crew', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.', timestamp: new Date('2024-07-15T14:30:00Z') },
//         ];

//         const trainers: Chat[] = [
//             { id: '1', name: 'Noor M.', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.', timestamp: new Date('2024-07-15T14:30:00Z') },
//             { id: '2', name: 'Lama Salama', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu..', timestamp: new Date('2024-07-15T14:30:00Z') },
//         ];

//         const sections: Section[] = [
//             { title: 'Crew', data: crew },
//             { title: 'Trainers', data: trainers },
//         ];

//         return (
//             // <ScreenWrapper>
//                 <View style={styles.container}>
//                     {crew.length > 0 || trainers.length > 0 ? (
//                         <>
//                         {crew.length > 0 && (
//                             <>
//                             <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 27}}>
//                                 <Text style={{textTransform: 'uppercase', color: theme.secondaryText}}>Crew</Text>
//                                 <Text style={{color: theme.primary}}>Mark all as read</Text>
//                             </View>
//                                 {crew.map((chat, index) => (
//                                    <NotificationCard
//                                         key={index}
//                                         title={chat.name}
//                                         message={chat.message}
//                                         timestamp={chat.timestamp}
//                                     />
//                                 ))}
//                             </>
//                         )}
//                         {trainers.length > 0 && (
//                             <>
//                             <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 27}}>
//                                 <Text style={{textTransform: 'uppercase', color: theme.secondaryText}}>Trainers</Text>
//                                 <Text style={{color: theme.primary}}>Mark all as read</Text>
//                             </View>
//                             {trainers.map((chat, index) => (
//                                <NotificationCard
//                                     key={index}
//                                     title={chat.name}
//                                     message={chat.message}
//                                     timestamp={chat.timestamp}
//                                 />
//                                 ))}
//                             </>
//                         )}
                        
                            
//                             {/* <SectionList
//                                 sections={sections}
//                                 keyExtractor={(item) => item.id}
//                                 renderItem={({ item }) => (
//                                     <View style={styles.chatItem}>
//                                         <Text style={styles.chatName}>{item.name}</Text>
//                                         <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//                                     </View>
//                                 )}
//                                 renderSectionHeader={({ section }) => (
//                                     <Text style={styles.sectionHeader}>{section.title}</Text>
//                                 )}
//                             /> */}
//                             </>
//                     ) : (
//                         <View style={styles.emptyContainer}>
//                             <Text>No Messages</Text>
//                             {/* <SuccessView
//                                 image={MessageIcon}
//                                 title='No Messages'
//                                 description='There are no messages were sent yet.'
//                             /> */}
//                         </View>
//                     )}
//                 </View>
//             // </ScreenWrapper>
//         )
//     }
// }

// export default InboxScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//     },
//     emptyContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     sectionHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 10,
//         marginBottom: 5,
//         backgroundColor: 'lightgray',
//         padding: 5,
//     },
//     chatItem: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     chatName: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     lastMessage: {
//         fontSize: 14,
//         color: 'gray',
//     },
// })