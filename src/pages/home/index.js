import Header from '../../components/planning/Header';
import Main from '../../components/planning/Main';
import Sidebar from '../../components/planning/Sidebar';
import Categoria from '../../components/planning/Categoria';
import './style.css';


const HomePage = () => {
  return (
    <div> 
    <Header></Header>
    <div className='content flex'>
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    </div>

  );
};

export default HomePage;