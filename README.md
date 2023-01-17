# Expanding Cards

Expanding Cards is a reusable library of code that contains panels which expands on click.
Can also be modified to expand on hover or any suitable event listener.

## Authors

- [@anonymousMornach](https://www.github.com/anonymousMornach)

## Tech Stack

**Client:** HTML, CSS, Javascript

## Support

For support, email techmornach@gmail.com.

## Documentation

**index.html :** Contains Html used to show the Effects of the library

**styles.css :** Contains Supplementary Style code for added aesthetics

**panel.css :** Main library that Contains Style code

**panel.js :** Main library containing javascript code for panel functionality

### Classes in panel.css

**panel_container :** Used for parent element that Contains every panel

**panel_item :** Each individual panel in the parent container

**panel_content :** For content whithin each panel

**panel_placeholder :** For Placeholder content before panel is expanded, Can also be added to the panel_content element, if that is to be used.

## FAQ

#### Can I copy this code?

Yes, this code is open source and can be copied and modified for any use.

## Contributing

Contributions are always welcome!

## Usage/Examples

To use simply add the external stylesheet "panel.css" inside the head element and the external script "panel.js" at the bottom of the body element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="panel.css" />
  </head>
  <body>
    <!-- Container element containing all panels -->
    <div class="panel_container">
      <!-- Individual Panel items is labelled with the .panel_item class.
      The current active panel is labelled with the .active_panel class.
      The placeholder on panel before expansion is labelled with the .panel_placeholder class.
      -->
      <div
        class="panel_item panel_placeholder active_panel"
        style="background-color:blue"
      >
        <h3 class="panel_content">Expand</h3>
      </div>
      <div class="panel_item" style="background-color:green">
        <h3 class="panel_content">Expand</h3>
      </div>
      <div class="panel_item" style="background-color:red">
        <h3 class="panel_content">Expand</h3>
      </div>
      <div class="panel_item" style="background-color:green">
        <h3 class="panel_content">Expand</h3>
      </div>
    </div>
    <script src="panel.js"></script>
  </body>
</html>
```
