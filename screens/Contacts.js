import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utils/api';

const keyExtractor = ({ phone }) => phone;

export default class Contacts extends React.Component {
  state = {
    contacts: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const contacts = await fetchContacts();
      this.setState({
        contacts,
        loading: false,
        error: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderContact = ({ item }) => {
    const { navigation } = this.props;
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={()=>navigation.push('Profile', { contact: item })} />
    );
  };

  render() {
    const { loading, contacts, error } = this.state;
    const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name),);

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading &&
          !error && (
            <FlatList
              data={contactsSorted}
              keyExtractor={keyExtractor}
              renderItem={this.renderContact}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});
