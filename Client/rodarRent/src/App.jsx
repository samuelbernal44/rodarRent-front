import {Route, Routes, useLocation} from 'react-router-dom'
import routesHelper from './helpers/routes';
import CarList from './components/Cars/Cars';
import Nav from './components/Nav/Nav';

function App() {

  const location = useLocation()
  const renderNav = location.pathname !==routesHelper.contact || location.pathname !== routesHelper.register

  return (
    <div>
      {renderNav ? <Nav/> : null}
      <Routes>
        <Route path={routesHelper.cars} element={<CarList/>}/>
      </Routes>
    </div>
  );
}

export default App;
