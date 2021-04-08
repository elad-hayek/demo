import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageView from './Components/basic-components/PageView/PageView';
import AppProvider from './Utilities/stores/Main/AppProvider';

function App() {
  return (
    <AppProvider>
      <PageView/>
    </AppProvider>
  )
}

export default App;
