// import Search from './Search/Search';
import Navbar from './Navbar/Navbar';
import BrowsePngcats from './Browse/Browse';
import DragBox from './DragBox/DragBox';

// to use separately like in HomePage
export { default as Search } from "./Search/Search";

const Components = {
  Navbar: Navbar,
  DragBox: DragBox,
  Browse: BrowsePngcats
}

export default Components;