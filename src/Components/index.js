// import Search from './Search/Search';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import BrowsePngcats from './Browse/Browse';
import DragBox from './DragBox/DragBox';

// to use separately like in HomePage
export { default as Search } from "./Search/Search";

const Components = {
  Navbar: Navbar,
  About: About,
  DragBox: DragBox,
  Browse: BrowsePngcats
}

export default Components;