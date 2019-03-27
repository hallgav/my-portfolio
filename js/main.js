import React from 'react'
import ReactDOM from 'react-dom'
import ExampleWork from './examples-work'

const myWork = [
    {
        'title': "Street Photography",
        'image': {
            'desc': "example photographs of a project involving street photography",
            'src': "images/example1.jpg",
            'comment': ""
        }
    },
    {
        'title': "Portraits",
        'image': {
            'desc': "example photographs of a project involving street portraits",
            'src': "images/example2.jpg",
            'comment': ""
        }
    },
    {
        'title': "Fun",
        'image': {
            'desc': "a collection of fun photographs with no particular theme",
            'src': "images/example3.png",
            'comment': ""
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'))
