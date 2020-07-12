import { h } from 'preact';
import style from './style';

import Helloworld from '../../components/helloworld';
import TestButton from '../../components/TestButton';
import TestCheckbox from '../../components/TestCheckbox';
import TestDrawer from '../../components/TestDrawer';
import TestModal from '../../components/TestModal'
import TestDatatable from '../../components/TestDatatable'
import TestMenu from '../../components/TestMenu'


const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <h2>button</h2>
    <TestButton />

    <h2>checkbox</h2>
    <TestCheckbox />

    <h2>Drawer</h2>
    <TestDrawer OpenMenu={false}/>

    <h2>Modal</h2>
    <TestModal />

    <h2>datatable</h2>
    <TestDatatable />

    <h2>menu</h2>
    <TestMenu />
  </div>
);

export default Home;
