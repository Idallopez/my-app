import Header from '../../components/header/Header';
import SideBar from '../../components/asideBar/AsideBar';
import Footer from '../../components/Footer/Footer';
import CardAdmin from '../../components/cardAdmin/CardAdmin';

import './ViewListRoom.css';

function ViewListRoom() {
    return (
        
    <body class="grid-container">
        <header ><Header/></header>
        <nav><SideBar/></nav>
        <main><CardAdmin/></main>
        <aside></aside>
        <footer><Footer/></footer>
    </body>
        

    )
}

export default ViewListRoom;