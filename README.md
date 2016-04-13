# Self-Diagrammer
Self-Diagrammer is a proof-of-concept of the self-diagramming code concept presented at [NashJS lightning talks]( http://slides.com/brianbroll/self-diagramming-code#/).

When lua or ruby code is provided, Self-Diagrammer cross compiles to js. Then it overrides basic language behavior so running the cross compiled code will then create a diagram of itself (as opposed to the originally intended behavior).

# Getting Started
First, start mongodb locally. Then
```
git clone https://github.com/brollb/self-diagrammer
cd self-diagrammer
npm install
npm start
```
