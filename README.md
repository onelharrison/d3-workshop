# D3 Workshop

## Getting Started

**1. Clone the repository**
```
git clone https://github.com/onelharrison/d3-workshop
```

**2. Install the dependencies**
```
cd d3-workshop
npm install
```

**3. Server the project**
```
python3 -m http.server 8000
```

OR

```
python -m SimpleHTTPServer 8000
```

**4. Understand how to complete exercises**

You will find directories named after each key section of the workshop in the
`exercises/` directory. Starter code for the exercises in each section are
found in those section directories.

For example, the first exercise for the _selections_ section of the workshop is
located at `exercises/selections/ex0.js`. Some exercies also have a css file that
is named in the same way (e.g. `exercises/selections/ex0.css`).

**Exercise instructions are found in an exercise's javascript file.**

To see the effect of the code you have written, edit the `index.html` file to
link to your exercise files.

**NOTE**: You can find the solutions to the exercises in the `solutions/`
directory if you get stuck.

**5. Reference the supporting documentation when needed**

Selections
* [Selecting Elements](https://github.com/d3/d3-selection#selecting-elements)
* [Modifying Elements](https://github.com/d3/d3-selection#modifying-elements)

Data
* [Joining Data](https://github.com/d3/d3-selection#joining-data)
* [Fetching Data](https://github.com/d3/d3-fetch#api-reference)

SVG
* [Presentation Attributes](https://www.w3.org/TR/SVG/styling.html#PresentationAttributes)

Scales and Axes
* [Scales](https://github.com/d3/d3-scale#api-reference)
* [Axes](https://github.com/d3/d3-axis#api-reference)

## References
* [Heights and Weights by Gender data set](https://www.kaggle.com/mustafaali96/weight-height)
