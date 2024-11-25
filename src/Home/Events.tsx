import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomCard from '../Common/CustomCard'
import EventCard from '../Events/EventCard'
import SectionHeader from './SectionHeader'

const events = [
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/dc24/dc22/44983a60442e7bbfdfb4e8f4940f773b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fM6Z38u-H0SM0wp~eoUbAZoapYlY7mfssC5j6MZ~F0QR89hkcfe0-~MR8iG0bN6CRAjb~fvcA5bs0FpxEA72LX2lkRcQWCxPejGhpKBJsUP5YwiNuCtY0Uo7ldypdH9XUgQp~bKlldcoYTnb8QbB6aIMXRKNRlPRB5MLAi2Hog7TOv74OMxL59sNclbdc3h~oLkw1MdGcc9scUvj2iJ3mWTsxPNC9lGxRPNXaomjBTHtRfxfoYjPBKf-0uT~1c1w3lYb5KWynXq90LNELw5CJuvt7FUgz8SnhQWN2NU4QzEKAEHOKOmT0Z6ppy-qegoHJGkvVTagkWAvdjpaVexsKQ__',
    title: 'Event 1',
    duration: 2,
    date: new Date('2023-07-03'),
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/a9bc/cbbb/d4f513101d21303854ccb281923517a2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkTftGDKy1urVaPewanputlinyFDzEhwgktoluwj1A~Nw6y9YyYOb-j1tbAsU7y~2lCeuMVJDougpxGhgnn-5z2oI~uXDqIZ~nLu0QXOMh8wD5DLFwEVgxSG0W0TlroPhsWXttvjaxME2jhWvutap31hl3CtidqU0ITJm1GPFxHWRehz9l38HpUpR9tLTVt-NhChG5tFGoO9A1kjJvmEj9PG69QQ~-FaWD3D24X52gTI1ebaHd4jEa2HKxbr1h13QyR-F3sjAOjhFfpwx6xNkz1hyL0YF60Frg7K-Sw7qKPxzUuEQe7qOzC9Q-vPjtw-gHkQJKoR4uTAGawLmggM0Q__',
    title: 'Event 2',
    duration: 3,
    date: new Date('2023-07-04'),
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/a9bc/cbbb/d4f513101d21303854ccb281923517a2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkTftGDKy1urVaPewanputlinyFDzEhwgktoluwj1A~Nw6y9YyYOb-j1tbAsU7y~2lCeuMVJDougpxGhgnn-5z2oI~uXDqIZ~nLu0QXOMh8wD5DLFwEVgxSG0W0TlroPhsWXttvjaxME2jhWvutap31hl3CtidqU0ITJm1GPFxHWRehz9l38HpUpR9tLTVt-NhChG5tFGoO9A1kjJvmEj9PG69QQ~-FaWD3D24X52gTI1ebaHd4jEa2HKxbr1h13QyR-F3sjAOjhFfpwx6xNkz1hyL0YF60Frg7K-Sw7qKPxzUuEQe7qOzC9Q-vPjtw-gHkQJKoR4uTAGawLmggM0Q__',
    title: 'Event 2',
    duration: 3,
    date: new Date('2023-07-04'),
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/a9bc/cbbb/d4f513101d21303854ccb281923517a2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkTftGDKy1urVaPewanputlinyFDzEhwgktoluwj1A~Nw6y9YyYOb-j1tbAsU7y~2lCeuMVJDougpxGhgnn-5z2oI~uXDqIZ~nLu0QXOMh8wD5DLFwEVgxSG0W0TlroPhsWXttvjaxME2jhWvutap31hl3CtidqU0ITJm1GPFxHWRehz9l38HpUpR9tLTVt-NhChG5tFGoO9A1kjJvmEj9PG69QQ~-FaWD3D24X52gTI1ebaHd4jEa2HKxbr1h13QyR-F3sjAOjhFfpwx6xNkz1hyL0YF60Frg7K-Sw7qKPxzUuEQe7qOzC9Q-vPjtw-gHkQJKoR4uTAGawLmggM0Q__',
    title: 'Event 2',
    duration: 3,
    date: new Date('2023-07-04'),
  },
]

export class Events extends Component {
  render() {
    return (
        <View style={styles.container}>
          <SectionHeader title="Events" onPress={() => {}} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
            {events.map((event, index) => (
              <EventCard 
                key={index}
                imageUrl={event.imageUrl}
                title={event.title}
                duration={event.duration}
                date={event.date}
              />
            ))}
          </ScrollView>
        </View>
    )
  }
}

export default Events

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    scrollView: {
      paddingVertical: 10,
      gap: 13,
    },
})  