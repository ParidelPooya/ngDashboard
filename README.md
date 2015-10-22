# ngDashboard

*ngDashboard* is a (proof of concept) dynamic directive loader module for *Angularjs* which allows to create a page based on list of directives with multiple settings to control the layout and beauvoir.

It is about 90 lines of code and has no dependency to third party library.

## getting started

add the module to your application using standard angularjs module management
```javascript
angular.module('myApp',['ngDashboard']);
```
### Create list of directives

Create array of directive you want to add:

```javascript
[
    {
      Directive:"hello",
      Title:'Directive Sample',
      Desc: 'View Battery Level',
      Icon: 'icon-car',
      Size:[4,2],
      Color:'#1797be',
      BGColor:'#42B6E9',
      SupportedSize:[[1,1],[2,2]],
      Data:{},
      SelBGColor:'#484848',
      ClassName:'widget'
    },
    // Next Directives
];

```


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
