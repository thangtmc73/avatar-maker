import "./App.css";
import PreviewView from "./components/preview-view/PreviewView";
import ListCategories from "./components/list-categories/ListCategories";
import ListItems from "./components/list-items/ListItems";

function App() {
  return (
    <div className="app">
      <div className="main">
        <PreviewView />
        <ListCategories />
        <ListItems />
      </div>
    </div>
  );
}

export default App;
