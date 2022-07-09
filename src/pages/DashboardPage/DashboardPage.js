import Header from '../../components/header/Header';
import SideBar from '../../components/asideBar/AsideBar';
import Footer from '../../components/Footer/Footer';


import './DashboardPage.css';

function dashboardPage() {
    return (
        
    <body class="grid-container">
        <header ><Header/></header>
        <nav><SideBar/></nav>
        <main></main>
        <aside></aside>
        <footer><Footer/></footer>
    </body>
        

    )
}

export default dashboardPage;