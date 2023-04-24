Here are the check points for the contact list project.

Step 1: add Contacts screen ([diff](https://github.com/sbunivedu/contact_list_solution/commit/94da86fe39c4a201c5d82d015a3e7503e195cca1)) up to page 408.

Step 2: add Profile screen ([diff](https://github.com/sbunivedu/contact_list_solution/commit/61bea867708e7c75784e08a8317f7a6c2439b7b8)) up to page 413.

Step 3: add stack navigator ([diff](https://github.com/sbunivedu/contact_list_solution/commit/ab4423f4b06b8041665e00fe11bfb334b79ba579)) up to page 420.

Step 4: pass contact info from the Contacts screen to the Profile screen ([diff](https://github.com/sbunivedu/contact_list_solution/commit/be4826b317baf450737204359caf832794fa8195)) up to page 426.

Step 5: customize screen title and header style via navigation options ([diff](https://github.com/sbunivedu/contact_list_solution/commit/641ab5ce9e4cb8288641fd5df62bc05940af0923)) up to page 429.

Step 6: add Favorites screen and make it inital route ([diff](https://github.com/sbunivedu/contact_list_solution/commit/158be79e642def52e03d317dc814d0415ddf6e72)) up to page 436.

Step 7: add User screen and test it out as initial route ([diff](https://github.com/sbunivedu/contact_list_solution/commit/28a5107f99a0b0cac47226195f0e423e4bf93504)) up to page 440.

Step 8: add a tab navigator and test it out ([diff](https://github.com/sbunivedu/contact_list_solution/commit/a5fab7009f7c0e97f11e093946a57fd7770e92ac)) up to page 441.

Step 9: add stack navigators in tab navigator ([diff](https://github.com/sbunivedu/contact_list_solution/commit/416a9c356cd3c7b7abe060d396f5c6682a5c8ae9)) up to page 449.

Step 10: switch to drawer navigation from tab navigation ([diff](https://github.com/sbunivedu/contact_list_solution/commit/95b02d2c729b5c305872e5c4dc85a40effcd3eaa)) with some issues that will be fixed later

To implement this step please make the following changes to your project:

Install dependencies:
```
npm install @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

Add the following to the top of `App.js`:
```
import 'react-native-gesture-handler';
```

Change "reanimated" version in `package.json` as follows and run `npm install`.
```
"react-native-reanimated": "^2.14.4"
```

Step 11: add icons to the drawer menu, hide drawer navigator header when a stack navigator is visible, add a hamburger menu icon to the header of the first screen in each stack navigator to open the drawer ([diff](https://github.com/sbunivedu/contact_list_solution/commit/82b460fd3c6d7f3ffcd8676db0af03a8a85cb62f)).

Resources consulted for implementing this step:
* https://blog.deversity.com/2021/10/combining-drawer-tab-and-stack.html
* https://reactnavigation.org/docs/screen-options-resolution/
* https://reactnavigation.org/docs/hiding-tabbar-in-screens
* https://reactnavigation.org/docs/header-buttons/
