import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Logo from './components/Logo';
import SmLogo from './components/SmLogo';
import Experience from './components/Experience';

const App = () => {
    return (
        <>
            <SmLogo />
            <Logo />
            <Sidenav />
            <Home />
            <Experience />
        </>
    );
};

export default App;
