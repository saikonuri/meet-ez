import React from 'react';
import { Icon } from 'react-native-elements'
import { Agenda } from 'react-native-calendars'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          '2012-05-22': [{ text: 'item 1 - any js object' }],
          '2012-05-23': [{ text: 'item 2 - any js object' }],
          '2012-05-24': [],
          '2012-05-25': [{ text: 'item 3 - any js object' }, { text: 'any js object' }],
        }],
      selected: '2019-02-16'
    }
  }


  renderItemComponent(item, firstItemInDay) {

    return( <Card style={{
      backgroundColor: '#fbfbfb',
    }}>
      <CardTitle
        title="This is a title"
        subtitle="This is subtitle"
      />
      <CardContent>
        <Text>{JSON.stringify(item)}</Text>
      </CardContent>
      <CardAction
        separator={true}
        inColumn={false}
        style={{
          padding:5,
        }}>
        <CardButton style={{
          flex: 1,
          // flexDirection: "row",
          alignItems: 'center',
          backgroundColor: '#15db92',
          width:'30%',
        }}
          onPress={() => { }}
          title="Push"
          color="blue"
        />
        <CardButton style={{
          flex: 1,
          // flexDirection: "row",
          alignItems: 'center',
          backgroundColor: '#15db92',
          width:'30%',
          marginRight:7,
        }}
          onPress={() => { }}
          title="Later"
          color="blue"
        />
      </CardAction>
    </Card> )
  }

  render() {
    return (
      < View style={styles.container}>
        <View style={{
          height: '15%',
          width: '100%',
          backgroundColor: '#15db92',
          alignItems: "center",
          justifyContent: 'center'
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: "white",
            fontSize: 50,
            position: "absolute",
            bottom: 0,
            paddingBottom: 8
          }}>
            Meet-Ez
            </Text>
          <TouchableOpacity style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}>
            <Icon
              reverse
              name='md-sync'
              type='ionicon'
              color='light blue'
              size={25}
            />
          </TouchableOpacity>

        </View>
        <View style={styles.calendarContainer}>
          <Agenda
            style={{
              width: "100%",
            }}
            items={
              {
                '2019-02-15': [{ text: 'item 0 - any js object' }, { text: 'Second item for the 16th' }],
                '2019-02-16': [{ text: 'item 1 - any js object' }],
                '2019-02-17': [{ text: 'item 2 - any js object' }],
                '2012-05-24': [],
                '2019-02-18': [{ text: 'item 3 - any js object' }],
              }}
            // callback that gets called when items for a certain month should be loaded (month became visible)
            loadItemsForMonth={(month) => { console.log('') }}
            // callback that fires when the calendar is opened or closed
            onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
            // callback that gets called on day press
            onDayPress={(day) => { console.log('') }}
            // callback that gets called when day changes while scrolling agenda list
            onDayChange={(day) => this.setState({ selected: day })}
            // initially selected day
            selected={this.state.selected}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => { return this.renderItemComponent(item, firstItemInDay); }}
            // specify how each date should be rendered. day can be undefined if the item is not first in that day.
            // renderDay={(day, item) => { console.log(item); }}
            // specify how empty date content with no items should be rendered
            renderEmptyDate={() => { return (<View />); }}
            // specify what should be rendered instead of ActivityIndicator
            renderEmptyData={() => { return (<View />); }}
            // specify your item comparison function for increased performance
            rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
            // Hide knob button. Default = false
            hideKnob={false}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
            onRefresh={() => console.log('')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}
            // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
            refreshControl={null}
          ></Agenda>
        </View>
      </View>
    );
  }


  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#11e3ff",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    // backgroundColor: "orange",
    width: '80%',
    height: '20%',
    paddingBottom: 50,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#007fff',
    borderRadius: 4,
  },
  buttonText: {
    padding: 4,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  calendarContainer: {
    alignItems: 'center',
    marginBottom: 50,
    height: '95%',
    width: '95%',
    backgroundColor: "purple"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
