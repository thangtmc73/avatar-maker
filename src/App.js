import "./App.css";
import PreviewView from "./components/preview-view/PreviewView";
import ListCategories from "./components/list-categories/ListCategories";

function App() {
  return (
    <div className="app">
      <div className="main">
        <PreviewView />
        <ListCategories />
      </div>
    </div>
  );
}

export default App;
