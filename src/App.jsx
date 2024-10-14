import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';

function App() {
    return (
        <div className="d-flex flex-column vh-100 justify-content-between">
            <Header />
            <Outlet />
            {/* URL에 따라서 변경되는 부분 */}
            <Footer />
        </div>
    );
}

export default App;
