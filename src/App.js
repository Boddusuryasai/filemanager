import './App.css';
import { useState } from 'react';
const explorer = {
  id:"1",
  name: "root",
  isFolder: true,
  items: [
    {
      id:"2",
      name: "public",
      isFolder: true,
      items: [
        {
          id:"3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id:"4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id:"5",
              name: "hello.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id:"6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id:"7",
      name: "src",
      isFolder: true,
      items: [
        {
          id:"8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id:"9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id:"10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id:"11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

const File = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}> 📂{explorer.name}</span>
      {isOpen &&
        explorer.items.map((d) => {
          return (
            <div className="space">
              {d.isFolder ? (
                <div className="space">
                  <File explorer={d} />
                </div>
              ) : (
                <div className="space">📄{d.name}</div>
              )}
            </div>
          );
        })}
    </>
  );
};

function App() {
  return (
  <>
   <File explorer= {explorer}/>
  </>
  );
}

export default App;
