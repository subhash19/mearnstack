
function Reactsidebarmenu() {
    return (
        <aside className="bd-sidebar">
                <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation">
                    <ul className="list-unstyled mb-0 py-3 pt-md-1">
            
                    <li className="mb-1">
                        <a href="/react/introduction">
                        Getting started
                        </a>

                        <div>
                            <ul className="list-unstyled fw-normal pb-1 small">
                                <li><a href="/react/introduction">Introduction</a></li>
                                <li><a href="/react/installation">Installation</a></li>
                                <li><a href="/react/folder-structure">Folder Structure</a></li>
                            </ul>
                        </div>
                    </li>
            
                    <li className="mb-1">
                        <a href="/react/component">
                        Getting started
                        </a>

                        <div>
                            <ul className="list-unstyled fw-normal pb-1 small">
                                <li><a href="/react/class-component">Class Component</a></li>
                                <li><a href="/react/function-component">Function Component</a></li>
                            </ul>
                        </div>
                    </li>
                    </ul>
                </nav>
        </aside>
    );
  }
  
  export default Reactsidebarmenu;
  