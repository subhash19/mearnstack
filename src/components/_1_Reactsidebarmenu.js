import { NavLink, Outlet } from "react-router-dom";
function Reactsidebarmenu() {
    return (
        <aside className="bd-sidebar">
                <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">
                    <ul className="list-unstyled mb-0 py-3 pt-md-1">
            
                    <li className="mb-1">
                        <a to="/react/introduction">
                        Getting started
                        </a>

                        <div>
                            <ul className="list-unstyled fw-normal pb-1 small">
                                <li><NavLink to="/react/introduction">Introduction</NavLink></li>
                                <li><NavLink to="/react/installation">Installation</NavLink></li>
                                <li><NavLink to="/react/folder-structure">Folder Structure</NavLink></li>
                            </ul>
                        </div>
                    </li>
            
                    <li className="mb-1">
                        <NavLink to="/react/component">Getting started</NavLink>
                        <div>
                            <ul className="list-unstyled fw-normal pb-1 small">
                                <li><NavLink to="/react/class-component">Class Component</NavLink></li>
                                <li><NavLink to="/react/function-component">Function Component</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    </ul>
                </nav>
                <Outlet />
        </aside>
    );
  }
  
  export default Reactsidebarmenu;
  