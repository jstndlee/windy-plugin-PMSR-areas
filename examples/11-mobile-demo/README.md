## Drag and Mobile example

- This plugin is a boilerplate for building plugins on mobile.
- Demonstration on how do use the bottomSlider mechanism to close the plugin pane on mobile.
- I have also modified the bottomSlider so that the plugin pane can be dragged down partially,  to display part of the map and the picker.
- The Drag class is also demonstrated:
    - You can drag the circle in the box above, or
    - If you drag the open white area the cross hairs will move.
- The z-index of the plugin is set to 10 so that it appears on top of the picker.
- The z-index of the bottom element is set to 20,  so that the calendar is on top of the plugin.
- A backdrop (linear-gradient background image)  is created for the calendar timecode.
- When you scroll down the "mobile-header" class becomes visible.


