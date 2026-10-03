Vertices and Edges .net
proudly presents:

# Notebook
## Introduction
The notebook app aims to provide a notebook experience similar to that of Jupyter Notebook, except that this is browser Javascript and Typescript. The notebooks uses the ipynb format for writing and reading files, but sets the language field to javascript. 

## Features
The notebook consists of cells, which come in three types:
* Markdown
* Typescript
* Javascript

The markdown cell offers a wysiwyg markdown editor, and has support for code blocks and even math blocks.

Typescript and Javascript cells are run in the context of a AsyncFunctions, which means you can use the await keyword inside of code cells (unless you're in a non-async function).

You can save notebooks to File, URL for POST request, or the Browser's IndexedDB. You can open notebooks from File, URL for GET request, or from the Browser's IndexedDB via the notebook title. 

Don't forget to give the notebook a title! The header is contenteditable. The notebook title becomes the filename for file download and browser storage. 

## Examples
1. [Notebook User Manual](https://apps.verticesandedges.net/notebook/?url=./examples/Notebook%20User%20Manual.ipynb) just talks about the three types of notebook. [LaTeX Rendering](https://apps.verticesandedges.net/notebook/?url=./examples/LaTeX%20Rendering.ipynb) demonstrates two ways of equations rendered via KaTeX.

Loading other libraries:
2. **Vega** [Vega Embed](https://apps.verticesandedges.net/notebook/?url=./examples/Dynamic%20Import.ipynb) and [Streaming Vega](https://apps.verticesandedges.net/notebook/?url=./examples/Streaming%20Vega.ipynb)
3. **Strudel.cc** [Strudel.cc](https://apps.verticesandedges.net/notebook/?url=./examples/Strudel.ipynb)

4. **<graph-element>** [Loading graph-element](https://apps.verticesandedges.net/notebook/?url=./examples/Minimal%20Graph.ipynb) demonstrates loading the @verticesandedges/graph-element library to draw and erase a simplest possible graph, a vertex hugging itself. The [Graph Element Notebook](https://apps.verticesandedges.net/notebook/?url=./examples/graph-element.ipynb) demonstrates adding, removing and manipulating vertices and edges. [Minimal Cube](https://apps.verticesandedges.net/notebook/?url=./examples/Minimal%20Cube.ipynb) adds a graph-element, then constructs a cube arrangement of vertices.


5. Some random ones include: [The Monty Hall Paradox](https://apps.verticesandedges.net/notebook/?url=./examples/The%20Monty%20Hall%20Paradox.ipynb), in which I recreate the Monty Hall Paradox to  

## Development
```bash
git clone https://github.com/verticesandedges/notebook.git
cd notebook
npm install

npm run start
```

Enjoy!
