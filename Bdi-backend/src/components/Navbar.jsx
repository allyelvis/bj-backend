import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/purchases">Purchases</Link>
      <Link to="/reports">Reports</Link>
    </nav>
  );
};

export default Navbar;
