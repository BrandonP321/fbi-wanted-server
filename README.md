# FBI Wanted Back End
This is a very simple Express.js server for interacting with the FBI's wanted persons API.  The reason for not just accessing the API from the site itself is that every time I attempted to get data from the API, I would get a cors error, stating that the server wouldn't allow access to domains other than it's own.  I could however access the API from a node.js server, so I just decided to create this simple server.

## Front End Repository
Click [here](https://github.com/BrandonP321/fbi-wanted) to visit the font end repository and README

## License
The MIT License (MIT)

Copyright (c) 2021 Brandon Phillips

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.