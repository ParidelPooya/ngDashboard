# ngDashboard

*ngDashboard* is a (proof of concept) dynamic directive loader module for *Angularjs* which allows to create a page based on list of directives with multiple settings to control the layout and beauvoir.

It is about 90 lines of code and has no dependency to third party library.

## Build ##
    use bower to install needed component

```
bower install
```

## getting started


add the module to your application using standard angularjs module management
```javascript
angular.module('myApp',['ngDashboard']);
```
### Create list of directives

Create array of directive you want to add:

```javascript
widgetList=[
    {
      Directive:"your-directive-name",
      Title:'Directive Title',
      Desc: 'Directive Description',
      Icon: 'Your Directive Icon',
      Size:[width,height],
      SupportedSize:[[width1,height1],[width2,height2],...,[widthN,heightN]],
      Data:{you can pass any object to your directive},
      ClassName:'CSS class name'
    },
    // Next Directives
];

```

### Add directive

Add dashboard directive to the place you want all dynamic directive added and pass your created array to it:

```html
<dashboard widget-list="widgetList"></dashboard>
```

### Example

* Available examples in "example" folder:
  * 01-SimpleUsage: Very Simple Example with only in directive to load.
  * 02-MultipleDirective: Load more directives.
  * 03-DirectiveWithDiffParam: calling one directive twice with different settings.
  * 04-AddingDirective: Simple example to show how to add new directive to the page.
  * 05-RemovingDirective: There is parameter for ngDashboard to show remove button for directives.
  * 06-ResizingDirective: There is parameter for ngDashboard to enable directives resizing.
  * 07-ShowMoreData: Directives can detect current size and show more/ different data based on size.
  * 08-NestedWidgets: Dashboard inside another dashboard.
  * 09-DragNDrop: Drag and Drop is easily achievable by using other module.


##Licence

ngDashboard module is under MIT license:

> Copyright (C) 2015 Pooya Paridel.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
